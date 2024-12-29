import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link } from '@inertiajs/react';

export default function Show({ event }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Event Details</h2>}
        >
            <Head title="Event Details" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-between items-center">
                                <h1 className="font-bold text-2xl">Event: {event.title}</h1>
                                <Link
                                    href={route('event.index')}
                                    className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowLeft}
                                        className="mr-2"
                                    />
                                    Back to Events
                                </Link>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Short Description</h3>
                                <p className="text-gray-700">{event.short_description}</p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Long Description</h3>
                                <p className="text-gray-700">{event.long_description}</p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Date</h3>
                                <p className="text-gray-700">{event.date}</p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Hashtags</h3>
                                <p className="text-gray-700">{event.hashtags}</p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Short Tips</h3>
                                <p className="text-gray-700">{event.short_tips}</p>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-semibold text-xl">Photo</h3>
                                <div className="flex justify-center">
                                    <img
                                        // src={event.photo}
                                        src={`/storage/${event.photo}`}
                                        alt={event.title}
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
