import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link } from '@inertiajs/react';

export default function Show({ gallery }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Gallery Preview</h2>}
        >
            <Head title={`Preview - ${gallery.title}`} />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="mb-4 font-bold text-2xl">
                                {gallery.title}
                            </h1>

                            {/* Back to Gallery List */}
                            <div className="mb-4">
                                <Link
                                    href={route('gallery.index')}
                                    className="flex items-center text-blue-600 hover:text-blue-800"
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowLeft}
                                        className="mr-2"
                                    />
                                    Back to Gallery List
                                </Link>
                            </div>

                            {/* Display Content */}
                            <div className="space-y-4">
                                {/* Display Photo */}
                                {gallery.photo && (
                                    <div>
                                        <h2 className="mb-2 font-semibold text-lg">Photo:</h2>
                                        <img
                                            src={`/storage/${gallery.photo}`}
                                            alt={gallery.title}
                                            className="shadow rounded w-80 h-96 align-middle object-cover"
                                        />
                                        <p>{gallery.title}</p>
                                    </div>
                                )}

                                {/* Display Video */}
                                {gallery.video && (
                                    <div>
                                        <h2 className="mb-2 font-semibold text-lg">Video:</h2>
                                        <div className="aspect-w-16 aspect-h-9">
                                            <iframe
                                                src={gallery.video}
                                                title={gallery.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="shadow rounded w-full h-64"
                                            ></iframe>
                                        </div>
                                    </div>
                                )}

                                {/* No Content Message */}
                                {!gallery.photo && !gallery.video && (
                                    <div className="text-gray-500">
                                        No photo or video available for this gallery.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
