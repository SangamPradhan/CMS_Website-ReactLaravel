import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function EditEvent({ event }) {
    const { data, setData, put, errors } = useForm({
        title: event.title,
        short_description: event.short_description,
        long_description: event.long_description,
        date: event.date,
        hashtags: event.hashtags,
        short_tips: event.short_tips,
        photo: null,
    });

    // State to hold image preview
    const [imagePreview, setImagePreview] = useState(event.photo ? `/storage/${event.photo}` : null);

    // Handle text input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    // Handle file input change (Image upload)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData('photo', file);

        // Create image preview
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);  // Set the preview image
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('event.update', event.id));  // Send the PUT request to update the event
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    {/* Left-aligned Title */}
                    <h2 className="font-semibold text-gray-800 text-xl leading-tight">Edit This Event</h2>
                </div>
            }
        >
            <Head title="Edit Event" />

            <div className="flex justify-center items-center pt-5 md:pt-5 lg:pt-5">
                <div className="bg-white shadow-md p-10 rounded-lg w-full max-w-3xl">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="font-bold text-2xl text-blue-500">
                            Update Event Information
                        </h2>
                        <Link
                            href={route('event.index')}
                            className="bg-red-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
                        >
                            Cancel
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-7">
                            <label htmlFor="title" className="block mb-1 font-medium text-gray-700 text-sm">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Event Title"
                            />
                            {errors.title && <div className="mt-1 text-red-500 text-sm">{errors.title}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="short_description" className="block mb-1 font-medium text-gray-700 text-sm">Short Description</label>
                            <textarea
                                id="short_description"
                                name="short_description"
                                value={data.short_description}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Short Description"
                            />
                            {errors.short_description && <div className="mt-1 text-red-500 text-sm">{errors.short_description}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="long_description" className="block mb-1 font-medium text-gray-700 text-sm">Long Description</label>
                            <textarea
                                id="long_description"
                                name="long_description"
                                value={data.long_description}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Long Description"
                            />
                            {errors.long_description && <div className="mt-1 text-red-500 text-sm">{errors.long_description}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="date" className="block mb-1 font-medium text-gray-700 text-sm">Event Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={data.date}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                            />
                            {errors.date && <div className="mt-1 text-red-500 text-sm">{errors.date}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="hashtags" className="block mb-1 font-medium text-gray-700 text-sm">Hashtags</label>
                            <input
                                type="text"
                                id="hashtags"
                                name="hashtags"
                                value={data.hashtags}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Hashtags"
                            />
                            {errors.hashtags && <div className="mt-1 text-red-500 text-sm">{errors.hashtags}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="short_tips" className="block mb-1 font-medium text-gray-700 text-sm">Short Tips</label>
                            <input
                                type="text"
                                id="short_tips"
                                name="short_tips"
                                value={data.short_tips}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Short Tips"
                            />
                            {errors.short_tips && <div className="mt-1 text-red-500 text-sm">{errors.short_tips}</div>}
                        </div>

                        {/* Image Preview Section */}
                        <div className="mb-7">
                            <label htmlFor="current-photo" className="block mb-2 font-medium text-gray-700">Current Event Photo</label>
                            {imagePreview && (
                                <div className="mb-4">
                                    <img src={imagePreview} alt="Event Photo Preview" className="w-32 h-32 object-cover" />
                                </div>
                            )}
                            {!imagePreview && event.photo && (
                                <p className="mt-1 text-gray-500 text-sm">No image preview available</p>
                            )}
                        </div>

                        {/* Image Upload Section */}
                        <div className="mb-7">
                            <label htmlFor="photo" className="block mb-1 font-medium text-gray-700 text-sm">Event Photo</label>
                            <div className="border-2 border-gray-300 p-4 hover:border-blue-500 border-dashed rounded-md text-center transition duration-300 cursor-pointer">
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label htmlFor="photo" className="text-gray-500 hover:text-blue-500 cursor-pointer">
                                    {data.photo ? data.photo.name : "Upload Event Photo"}
                                </label>
                            </div>
                            {errors.photo && <div className="mt-1 text-red-500 text-sm">{errors.photo}</div>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md w-full text-white transition duration-300"
                        >
                            Update Event
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
