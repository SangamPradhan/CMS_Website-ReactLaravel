import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Blogs = () => {
    return (
        <>
            <AuthenticatedLayout
                header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Add New Blog Post</h2>}
            >
                <Head title="Add Blog Post" />

                <div className="bg-white shadow-md mx-auto mt-8 p-6 rounded-lg max-w-4xl">
                    <form className="space-y-6">
                        {/* Title */}
                        <div>
                            <label
                                htmlFor="title"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter the blog post title"
                                required
                            />
                        </div>

                        {/* Short Description */}
                        <div>
                            <label
                                htmlFor="short_description"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Short Description
                            </label>
                            <input
                                type="text"
                                id="short_description"
                                name="short_description"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter the short description for the blog post"
                                required
                            />
                        </div>

                        {/* Whole Story/Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Whole Story/Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="6"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter the full story or description for the blog post"
                                required
                            ></textarea>
                        </div>

                        {/* Date */}
                        <div>
                            <label
                                htmlFor="date"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                required
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label
                                htmlFor="image"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Blog Image
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                className="block border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full text-gray-700"
                                accept="image/*"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full text-white focus:outline-none"
                            >
                                Add Blog Post
                            </button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Blogs;
