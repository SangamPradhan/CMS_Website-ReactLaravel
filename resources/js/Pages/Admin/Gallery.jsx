import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Gallery = () => {
    return (
        <>
            <AuthenticatedLayout
                header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Add New Gallery</h2>}
            >
                <Head title="Gallery" />

                <div className="bg-white shadow-md mx-auto mt-8 p-6 rounded-lg max-w-4xl">
                    <form className="space-y-6">
                        {/* Event Title */}
                        <div>
                            <label
                                htmlFor="event_title"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Event Title
                            </label>
                            <input
                                type="text"
                                id="event_title"
                                name="event_title"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter the event title"
                                required
                            />
                        </div>

                        {/* Image Upload Section */}
                        <div>
                            <label
                                htmlFor="image_gallery"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Image Gallery
                            </label>
                            <input
                                type="file"
                                id="image_gallery"
                                name="image_gallery[]"
                                className="block border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full text-gray-700"
                                accept="image/*"
                                multiple
                                required
                            />
                            <p className="mt-2 text-gray-500 text-sm">Select multiple images for the gallery</p>
                        </div>

                        {/* Video Upload Section */}
                        <div>
                            <label
                                htmlFor="video_gallery"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Video Gallery
                            </label>
                            <input
                                type="file"
                                id="video_gallery"
                                name="video_gallery[]"
                                className="block border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full text-gray-700"
                                accept="video/*"
                                multiple
                                required
                            />
                            <p className="mt-2 text-gray-500 text-sm">Select multiple videos for the gallery</p>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full text-white focus:outline-none"
                            >
                                Add to Gallery
                            </button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Gallery;
