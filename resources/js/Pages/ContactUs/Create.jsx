// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { useForm } from '@inertiajs/react';

// const Create = () => {
//     const { data, setData, post, errors } = useForm({
//         email: '',
//         subject: '',
//         message: '',
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Post the data to Laravel with the use of the route helper
//         post(route('contactus.sendmail'));
//     };

//     return (
//         <AuthenticatedLayout
//             header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">User Feedbacks</h2>}
//         >
//             <div className="py-12">
//                 <div className="mx-auto p-4 container">
//                     <h1 className="mb-4 font-bold text-2xl">Contact Us</h1>
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         {/* Email Input */}
//                         <div>
//                             <label htmlFor="email" className="block font-medium text-gray-700 text-sm">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 value={data.email}  // Using data from useForm hook
//                                 onChange={(e) => setData('email', e.target.value)}  // Update data
//                                 required
//                                 className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 w-full sm:text-sm focus:outline-none"
//                             />
//                             {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
//                         </div>

//                         {/* Subject Input */}
//                         <div>
//                             <label htmlFor="subject" className="block font-medium text-gray-700 text-sm">
//                                 Subject
//                             </label>
//                             <input
//                                 type="text"
//                                 id="subject"
//                                 value={data.subject}  // Using data from useForm hook
//                                 onChange={(e) => setData('subject', e.target.value)}  // Update data
//                                 required
//                                 className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 w-full sm:text-sm focus:outline-none"
//                             />
//                             {errors.subject && <div className="text-red-500 text-sm">{errors.subject}</div>}
//                         </div>

//                         {/* Message Input */}
//                         <div>
//                             <label htmlFor="message" className="block font-medium text-gray-700 text-sm">
//                                 Message
//                             </label>
//                             <textarea
//                                 type="text"
//                                 id="message"
//                                 value={data.message}  // Using data from useForm hook
//                                 onChange={(e) => setData('message', e.target.value)}  // Update data
//                                 required
//                                 className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 w-full sm:text-sm focus:outline-none"
//                             />
//                             {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
//                         </div>

//                         {/* Submit Button */}
//                         <div>
//                             <button
//                                 type="submit"
//                                 className="inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 shadow-sm px-4 py-2 border border-transparent rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium text-sm text-white focus:outline-none"
//                             >
//                                 Send
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// };

// export default Create;

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import React from 'react';

export default function Create() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ac2fadaa-5c9d-49f3-a2d4-f6356abece2f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <AuthenticatedLayout
                header={
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800 text-xl leading-tight">User Feedbacks</h2>
                    </div>
                }
            >
                <div className="bg-white shadow-md mx-auto mt-8 p-6 rounded-lg max-w-4xl">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="font-bold text-2xl text-blue-500">
                            Submit Feedback
                        </h2>
                        <Link
                        href={route('contactus.index')}
                        className="bg-red-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
                    >
                        Cancel
                    </Link>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                required
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                required
                                placeholder="Write your message here"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-indigo-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full text-white focus:outline-none"
                            >
                                Send Mail
                            </button>
                        </div>
                    </form>
                    <span className="block mt-4 text-center text-gray-600">{result}</span>
                </div>
            </AuthenticatedLayout>
        </>
    );

}

// This example uses `@web3forms/react` plugin and tailwindcss for css styling

// import useWeb3Forms from "@web3forms/react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// export default function Contact() {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         watch,
//         control,
//         setValue,
//         formState: { errors, isSubmitSuccessful, isSubmitting },
//     } = useForm({
//         mode: "onTouched",
//     });
//     const [isSuccess, setIsSuccess] = useState(false);
//     const [message, setMessage] = useState(false);

//     // Please update the Access Key in the .env
//     const apiKey = process.env.PUBLIC_ACCESS_KEY || "ac2fadaa-5c9d-49f3-a2d4-f6356abece2f";

//     const { submit: onSubmit } = useWeb3Forms({
//         access_key: apiKey,
//         settings: {
//             from_name: "Acme Inc",
//             subject: "New Contact Message from your Website",
//         },
//         onSuccess: (msg, data) => {
//             setIsSuccess(true);
//             setMessage(msg);
//             reset();
//         },
//         onError: (msg, data) => {
//             setIsSuccess(false);
//             setMessage(msg);
//         },
//     });

//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)} className="my-10">
//                 <input
//                     type="checkbox"
//                     id=""
//                     className="hidden"
//                     style={{ display: "none" }}
//                     {...register("botcheck")}></input>

//                 <div className="mb-5">
//                     <input
//                         type="text"
//                         placeholder="Full Name"
//                         autoComplete="false"
//                         className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${errors.name
//                                 ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
//                                 : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
//                             }`}
//                         {...register("name", {
//                             required: "Full name is required",
//                             maxLength: 80,
//                         })}
//                     />
//                     {errors.name && (
//                         <div className="mt-1 text-red-600">
//                             <small>{errors.name.message}</small>
//                         </div>
//                     )}
//                 </div>

//                 <div className="mb-5">
//                     <label htmlFor="email_address" className="sr-only">
//                         Email Address
//                     </label>
//                     <input
//                         id="email_address"
//                         type="email"
//                         placeholder="Email Address"
//                         name="email"
//                         autoComplete="false"
//                         className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${errors.email
//                                 ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
//                                 : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
//                             }`}
//                         {...register("email", {
//                             required: "Enter your email",
//                             pattern: {
//                                 value: /^\S+@\S+$/i,
//                                 message: "Please enter a valid email",
//                             },
//                         })}
//                     />
//                     {errors.email && (
//                         <div className="mt-1 text-red-600">
//                             <small>{errors.email.message}</small>
//                         </div>
//                     )}
//                 </div>

//                 <div className="mb-3">
//                     <textarea
//                         name="message"
//                         placeholder="Your Message"
//                         className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${errors.message
//                                 ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
//                                 : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
//                             }`}
//                         {...register("message", {
//                             required: "Enter your Message",
//                         })}
//                     />
//                     {errors.message && (
//                         <div className="mt-1 text-red-600">
//                             {" "}
//                             <small>{errors.message.message}</small>
//                         </div>
//                     )}
//                 </div>

//                 <button
//                     type="submit"
//                     className="bg-gray-900 hover:bg-gray-800 dark:bg-white px-7 py-4 rounded-md focus:ring focus:ring-gray-200 focus:ring-offset-2 w-full font-semibold text-white dark:text-black transition-colors focus:outline-none">
//                     {isSubmitting ? (
//                         <svg
//                             className="mx-auto w-5 h-5 text-white dark:text-black animate-spin"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24">
//                             <circle
//                                 className="opacity-25"
//                                 cx="12"
//                                 cy="12"
//                                 r="10"
//                                 stroke="currentColor"
//                                 strokeWidth="4"></circle>
//                             <path
//                                 className="opacity-75"
//                                 fill="currentColor"
//                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                     ) : (
//                         "Send Message"
//                     )}
//                 </button>
//             </form>

//             {isSubmitSuccessful && isSuccess && (
//                 <div className="mt-3 text-center text-green-500 text-sm">
//                     {message || "Success. Message sent successfully"}
//                 </div>
//             )}
//             {isSubmitSuccessful && !isSuccess && (
//                 <div className="mt-3 text-center text-red-500 text-sm">
//                     {message || "Something went wrong. Please try later."}
//                 </div>
//             )}
//         </>
//     );
// }


