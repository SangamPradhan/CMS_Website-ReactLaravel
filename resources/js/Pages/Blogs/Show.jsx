import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link } from '@inertiajs/react';

export default function Show({ blog }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Blog Details</h2>}
        >
            <Head title="Blog Details" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-2xl">Blog: {blog.title}</h1>
                                <Link
                                    href={route('blogs.index')}
                                    className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowLeft}
                                        className="mr-2"
                                    />
                                    Back to Blogs
                                </Link>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Short Description</h3>
                                <p className="text-gray-700">{blog.short_description}</p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Long Description</h3>
                                <p className="text-gray-700">{blog.long_description}</p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Date</h3>
                                <p className="text-gray-700">{blog.date}</p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Photo</h3>
                                <div className="flex justify-center">
                                    <img
                                        src={`/storage/${blog.photo}`}
                                        alt={blog.title}
                                        className="shadow-md rounded-lg w-full max-w-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
