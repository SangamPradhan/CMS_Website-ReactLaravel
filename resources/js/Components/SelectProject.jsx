import { useForm } from '@inertiajs/react';
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectProject = ({ project, onClose, flash }) => {

    console.log(project);
    useEffect(() => {
        document.body.style.overflow = project ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [project]);

    const [activeTab, setActiveTab] = useState('reviews');
    const [hovered, setHovered] = useState(0);
    const [loading, setLoading] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        if (project) {
            modalRef.current?.focus();
        }
    }, [project]);

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    const { data, setData, post, errors, reset } = useForm({
        name: '',
        project_review: '',
        rating: 0,  // Set a default value for rating to avoid undefined
        email: '',
        project_id: project?.id ? String(project.id) : '', // Fallback to an empty string if undefined
    });

    // Update project_id when project changes
    useEffect(() => {
        if (project?.id) {
            setData('project_id', String(project.id));
        }
    }, [project]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     post(route('addprojectreview'), {

    //         // data,
    //         // project_id: project.id,
    //         preserveScroll: true,
    //         onSuccess: () => {
    //             reset();
    //             setActiveTab('reviews');
    //             toast.success('Review submitted successfully!');
    //         },
    //         onError: () => {
    //             toast.error('Failed to submit the review. Please try again.');
    //         },
    //         onFinish: () => {
    //             setLoading(false);
    //         }
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // console.log(data);
        post(route('addprojectreview'), {
            name: data.name,
            email: data.email,
            project_review: data.project_review,
            rating: data.rating,
            project_id: data.project_id, // Include the project ID
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.success('Review submitted successfully!');
            },
            onError: () => {
                toast.error('Failed to submit the review. Please try again.');
            },
            onFinish: () => {
                setLoading(false);
            },
        });
    };

    if (!project) return null;

    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div
                ref={modalRef}
                tabIndex="-1"
                className="relative bg-white shadow-lg p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto focus:outline-none"
            >
                <RiCloseLargeLine
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('reviews');
                        setData({ rating: 0, project_review: "", name: "", email: "" });  // Reset form data on close
                        onClose();
                    }}
                    className="top-2 right-2 absolute font-semibold text-gray-700 text-xl"
                    style={{ cursor: 'pointer' }}
                />

                <div className="mb-4">
                    <img
                        src={`/storage/${project.image}`}
                        alt={project.title}
                        className="rounded-lg w-full h-60 object-cover"
                    />
                </div>

                <h3 className="font-bold text-2xl text-gray-800">{project.title}</h3>
                <p className="mt-2 text-orange-500 text-sm">{project.subtitle}</p>
                <p className="mt-4 text-base text-gray-700 leading-relaxed">{project.description}</p>
                <p className="mt-4 text-gray-500 text-sm">Published Date: {project.date}</p>

                <div className="mt-6">
                    <div className="flex justify-around w-full text-center">
                        <button
                            className={`px-4 py-2 focus:outline-none ${activeTab === 'reviews' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Reviews
                        </button>
                        <button
                            className={`px-4 py-2 focus:outline-none ${activeTab === 'add-review' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('add-review')}
                        >
                            Add a Review
                        </button>
                    </div>

                    {activeTab === 'reviews' && (
                        <div className="mt-4">
                            {project.reviews.length > 0 ? (
                                <ul className="space-y-6">
                                    {project.reviews.map((review, index) => (
                                        <li key={index} className="bg-white shadow-sm p-4 border rounded-lg">
                                            <div className="flex items-start">
                                                {/* Name and Email */}
                                                <div className="flex-1">
                                                    <h5 className="font-bold text-gray-800">{review.name}</h5>
                                                    <p className="text-gray-500 text-sm">{review.email}</p>
                                                </div>

                                                {/* Ratings and Date */}
                                                <div className="flex flex-col items-end">
                                                    <div className="flex">
                                                        {Array.from({ length: review.rating }).map((_, i) => (
                                                            <FaStar key={i} className="text-yellow-500" />
                                                        ))}
                                                        {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                                            <FaStar key={i} className="text-gray-300" />
                                                        ))}
                                                    </div>
                                                    <p className="mt-1 text-gray-400 text-sm">
                                                        {new Date(review.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Review Text */}
                                            <p className="mt-3 text-gray-600 leading-relaxed">{review.project_review}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-4 text-gray-500">No reviews available for this project.</p>
                            )}
                        </div>

                    )}

                    {activeTab === 'add-review' && (
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="border-gray-300 p-2 border rounded-md w-full"
                                    placeholder="Your name"
                                    value={data.name || ''}  // Default value to avoid uncontrolled input
                                    onChange={(e) => setData('name', e.target.value)} // Update the data on change
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="border-gray-300 p-2 border rounded-md w-full"
                                    placeholder="Your email"
                                    value={data.email || ''}  // Default value to avoid uncontrolled input
                                    onChange={(e) => setData('email', e.target.value)} // Update the data on change
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 font-semibold text-gray-700">Comment</label>
                                <textarea
                                    className="border-gray-300 p-2 border rounded-md w-full"
                                    placeholder="Your review"
                                    rows="4"
                                    value={data.project_review || ''}  // Default value to avoid uncontrolled input
                                    onChange={(e) => setData('project_review', e.target.value)} // Update the data on change
                                    required
                                ></textarea>
                                {errors.project_review && <p className="text-red-500 text-sm">{errors.project_review}</p>}
                            </div>

                            {/* <div className="hidden mb-4">
                                <label className="block mb-2 font-semibold text-gray-700">project id</label>
                                <textarea
                                    className="border-gray-300 p-2 border rounded-md w-full"
                                    placeholder="Your review"
                                    value={project?.id }  // Default value to avoid uncontrolled input
                                    onChange={(e) => setData('project_id', e.target.value)} // Update the data on change
                                    required
                                ></textarea>
                                {errors.project_review && <p className="text-red-500 text-sm">{errors.project_}</p>}
                            </div> */}

                            <div>
                                <label htmlFor="rating" className="block mb-2 font-medium text-gray-700">
                                    Ratings
                                </label>

                                <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={star <= (hovered || data.rating) ? "gold" : "none"}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-yellow-400 cursor-pointer"
                                            onMouseEnter={() => setHovered(star)}
                                            onMouseLeave={() => setHovered(0)}
                                            onClick={() => setData('rating', star)}  // Update the rating when clicked
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 17.27l5.18 3.03-1.64-6.03 4.46-3.89-6.07-.26L12 2 9.07 6.11l-6.07.26 4.46 3.89-1.64 6.03L12 17.27z"
                                            />
                                        </svg>
                                    ))}
                                </div>

                                {errors.rating && (
                                    <p className="text-red-500 text-sm">{errors.rating}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 mt-4 px-4 py-2 rounded-md text-white"
                            >
                                Submit {/* {loading ? 'Submitting...' : 'Submit Review'} */}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectProject;






{/* <h3 className="font-bold text-2xl text-gray-800">{project.title}</h3>
                <p className="mt-2 text-orange-500 text-sm">{project.subtitle}</p>
                <p className="mt-4 text-base text-gray-700 leading-relaxed">{project.description}</p>
                <p className="mt-4 text-gray-500 text-sm">Published Date: {project.date}</p>
                <div className="flex justify-around w-full text-center">
                */}

// const { data, setData, post, processing, reset } = useForm({
//     rating: "",
//     project_review: "",
//     name: "",
//     email: "",
// });

// <div className="mb-4">
//                 <label className="block mb-2 font-semibold text-gray-700">Name</label>
//                 <input
//                     type="text"
//                     className="border-gray-300 p-2 border rounded-md w-full"
//                     placeholder="Your name"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2 font-semibold text-gray-700">Email</label>
//                 <input
//                     type="email"
//                     className="border-gray-300 p-2 border rounded-md w-full"
//                     placeholder="Your email"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2 font-semibold text-gray-700">Comment</label>
//                 <textarea
//                     className="border-gray-300 p-2 border rounded-md w-full"
//                     placeholder="Your review"
//                     rows="4"
//                     required
//                     onChange={(e) => setData({ ...data, project_review: e.target.value })}
//                 ></textarea>
//             </div>
//             <div>
//                 <label htmlFor="rating" className="block mb-2 font-medium text-gray-700">
//                     Ratings
//                 </label>

//                 <div className="flex items-center space-x-1">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                         <svg
//                             key={star}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill={star <= (hovered || data.rating) ? "gold" : "none"}
//                             viewBox="0 0 24 24"
//                             strokeWidth={2}
//                             stroke="currentColor"
//                             className="w-6 h-6 text-yellow-400 cursor-pointer"
//                             onMouseEnter={() => setHovered(star)}
//                             onMouseLeave={() => setHovered(0)}
//                             onClick={() => setData(prev => ({ ...prev, rating: star }))}
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M12 17.27l5.18 3.03-1.64-6.03 4.46-3.89-6.07-.26L12 2 9.07 6.11l-6.07.26 4.46 3.89-1.64 6.03L12 17.27z"
//                             />
//                         </svg>
//                     ))}
//                 </div>
//             </div>

