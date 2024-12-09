import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

const Create = () => {
    const { data, setData, post, errors } = useForm({
        title: '',
        description: '',
        rating: '',
        date: '',
        photo: null,
    });

    const [hovered, setHovered] = useState(0); // State for hover effect

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('testimonials.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800 text-xl leading-tight">Add New Testimonial</h2>
                    <Link
                        href={route('testimonials.index')}
                        className="bg-red-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
                    >
                        Cancel
                    </Link>
                </div>
            }
        >
            <Head title="Add Testimonial" />
            <div className="bg-white shadow-md mx-auto mt-8 p-6 rounded-lg max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                            placeholder="Enter the testimonial title"
                        />
                        {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block mb-2 font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="5"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                            placeholder="Enter the testimonial short description"
                        />
                        {errors.description && (
                            <div className="text-red-500 text-sm">{errors.description}</div>
                        )}
                    </div>

                    {/* Ratings */}
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
                                    onClick={() => setData('rating', star)}
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
                            <div className="text-red-500 text-sm">{errors.rating}</div>
                        )}
                    </div>

                    {/* Date */}
                    <div>
                        <label htmlFor="date" className="block mb-2 font-medium text-gray-700">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={data.date}
                            onChange={(e) => setData('date', e.target.value)}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                        />
                        {errors.date && <div className="text-red-500 text-sm">{errors.date}</div>}
                    </div>

                    {/* Photo Upload */}
                    <div>
                        <label htmlFor="photo" className="block mb-2 font-medium text-gray-700">
                            Testimonial Photo
                        </label>
                        <input
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={(e) => setData('photo', e.target.files[0])}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full text-gray-700"
                            accept="image/*"
                        />
                        {errors.photo && <div className="text-red-500 text-sm">{errors.photo}</div>}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full text-white focus:outline-none"
                        >
                            Add new Testimonial
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
