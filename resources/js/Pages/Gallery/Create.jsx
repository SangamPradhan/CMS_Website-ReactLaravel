import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

const Create = () => {
    const { data, setData, post, errors } = useForm({
        title: '',
        photo: null,
        date: '',
        video_title: '',
        video: '',
        type: '',
    });

    // Manage the 'type' state with useState
    const [type, setType] = useState('photo');

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('gallery.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800 text-xl leading-tight">
                        Add New Gallery Image/Video
                    </h2>
                    <Link
                        href={route('gallery.index')}
                        className="bg-red-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
                    >
                        Cancel
                    </Link>
                </div>
            }
        >
            <Head title="Add Gallery" />
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
                            placeholder="Enter the Gallery collection's title"
                        />
                        {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
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

                    {/* Type Selector */}
                    <div>
                        <label htmlFor="type" className="block mb-2 font-medium text-gray-700">
                            Select Type
                        </label>
                        <select
                            id="type"
                            name="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)} // Update type state
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                        >
                            <option value="">-- Select --</option>
                            <option value="photo">Photo</option>
                            <option value="video">Video</option>
                        </select>
                        {errors.type && <div className="text-red-500 text-sm">{errors.type}</div>}
                    </div>

                    {/* Dynamic Fields */}
                    {type === 'photo' && (
                        <div>
                            <label htmlFor="photo" className="block mb-2 font-medium text-gray-700">
                                Upload Photo
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
                    )}

                    {type === 'video' && (
                        <div>
                            <label htmlFor="video" className="block mb-2 font-medium text-gray-700">
                                Video URL
                            </label>
                            <textarea
                                id="video"
                                name="video"
                                value={data.video}
                                onChange={(e) => setData('video', e.target.value)}
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter the video URL"
                            />
                            {errors.video && <div className="text-red-500 text-sm">{errors.video}</div>}
                        </div>
                    )}

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full text-white focus:outline-none"
                        >
                            Add New Gallery Collection
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
