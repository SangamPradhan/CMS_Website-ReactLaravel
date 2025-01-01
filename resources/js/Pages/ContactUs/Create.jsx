import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';

const Create = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ email, subject, message });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">User Feedbacks</h2>}
        >
            <div className="py-12">
                <div className="mx-auto p-4 container">
                    <h1 className="mb-4 font-bold text-2xl">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block font-medium text-gray-700 text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 w-full sm:text-sm focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block font-medium text-gray-700 text-sm">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 w-full sm:text-sm focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-medium text-gray-700 text-sm">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 px-3 py-2 border rounded-md focus:ring-indigo-500 w-full sm:text-sm focus:outline-none"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="inline-flex justify-center bg-indigo-600 hover:bg-indigo-700 shadow-sm px-4 py-2 border border-transparent rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium text-sm text-white focus:outline-none"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
