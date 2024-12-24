import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

const Create = () => {
    const { data, setData, post, errors } = useForm({
        title: '',
        short_description: '',
        long_description: '',
        date: '',
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('blogs.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800 text-xl leading-tight">Add New blog</h2>

                </div>
            }
        >
            <Head title="Add Blog Post" />
            <div className="bg-white shadow-md mx-auto mt-8 p-6 rounded-lg max-w-4xl">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="font-bold text-2xl text-blue-500">
                        Add Blog Post
                    </h2>
                    <Link
                        href={route('blogs.index')}
                        className="bg-red-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
                    >
                        Cancel
                    </Link>
                </div>
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
                            placeholder="Enter the blog title"
                        />
                        {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                    </div>

                    {/* Subtitle */}
                    <div>
                        <label htmlFor="short_description" className="block mb-2 font-medium text-gray-700">
                            Subtitle
                        </label>
                        <input
                            type="text"
                            id="short_description"
                            name="short_description"
                            value={data.short_description}
                            onChange={(e) => setData('short_description', e.target.value)}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                            placeholder="Enter the blog short description"
                        />
                        {errors.short_description && (
                            <div className="text-red-500 text-sm">{errors.short_description}</div>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="long_description" className="block mb-2 font-medium text-gray-700">
                            Long Description
                        </label>
                        <textarea
                            id="long_description"
                            name="long_description"
                            rows="5"
                            value={data.long_description}
                            onChange={(e) => setData('long_description', e.target.value)}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                            placeholder="Enter the detailed blog description"
                        />
                        {errors.long_description && (
                            <div className="text-red-500 text-sm">{errors.long_description}</div>
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
                            Blog Photo
                        </label>
                        <input
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={(e) => setData('photo', e.target.files[0])} // Corrected this line
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
                            Add new Blog
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
