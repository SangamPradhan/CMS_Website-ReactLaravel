import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Events = () => {
    return (
        <>
            <AuthenticatedLayout
                header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Add New Event</h2>}
            >
                <Head title="Add Event" />

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
                                placeholder="Enter the event title"
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
                                placeholder="Enter the event short description"
                                required
                            />
                        </div>

                        {/* Long Description */}
                        <div>
                            <label
                                htmlFor="long_description"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Long Description
                            </label>
                            <textarea
                                id="long_description"
                                name="long_description"
                                rows="5"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter the detailed event description"
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

                        {/* Hashtags */}
                        <div>
                            <label
                                htmlFor="hashtags"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Hashtags
                            </label>
                            <input
                                type="text"
                                id="hashtags"
                                name="hashtags"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter event hashtags, separated by commas"
                                required
                            />
                        </div>

                        {/* Short Tips */}
                        <div>
                            <label
                                htmlFor="short_tips"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Short Tips
                            </label>
                            <input
                                type="text"
                                id="short_tips"
                                name="short_tips"
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter any short tips for the event"
                                required
                            />
                        </div>

                        {/* Photo Upload */}
                        <div>
                            <label
                                htmlFor="photo"
                                className="block mb-2 font-medium text-gray-700"
                            >
                                Event Photo
                            </label>
                            <input
                                type="file"
                                id="photo"
                                name="photo"
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
                                Add Event
                            </button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Events;
