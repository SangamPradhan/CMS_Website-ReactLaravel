import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function EditEvent({ events }) {
    const { data, setData, put, errors } = useForm({
        title: events.title,
        short_description: events.short_description,
        long_description: events.long_description,
        date: events.date,
        hashtags: events.hashtags,
        short_tips: events.short_tips,
        photo: null,
    });

    // Handle text input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setData('photo', e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('event.update', events.id));  // Send the PUT request to update the event
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    {/* Left-aligned Title */}
                    <h2 className="font-semibold text-gray-800 text-xl leading-tight">Edit This Event</h2>

                    {/* Right-aligned Cancel Button */}
                    <Link href={route('event.index')} className="bg-red-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none">
                        Cancel
                    </Link>
                </div>
            }

        >
            <Head title="Edit Event" />

            <div className="flex justify-center items-center pt-5 md:pt-5 lg:pt-5">
                <div className="bg-white shadow-md p-10 rounded-lg w-full max-w-3xl">
                    <h2 className="mb-10 font-bold text-2xl text-blue-500">Update Event Information</h2>
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
                        <div className="mb-7">
                            <label htmlFor="photo" className="block mb-1 font-medium text-gray-700 text-sm">Event Photo</label>
                            <div className="border-2 border-gray-300 p-4 hover:border-blue-500 border-dashed rounded-md text-center transition duration-300 cursor-pointer">
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleFileChange}
                                    className="hidden"
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
