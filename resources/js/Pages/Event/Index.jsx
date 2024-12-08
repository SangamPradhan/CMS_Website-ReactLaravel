import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ events }) {
    if (!events || events.length === 0) {
        return <div>No events found.</div>;
    }

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Add Event</h2>}
        >
            <Head title="Event" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl" >
                                Your Events
                            </h1>
                            {/* Aligning the button to the top right */}
                            <div className="flex justify-end space-x-4 mb-4">
                                <input type="text" className="px-2 py-1 search-input" placeholder="Search" />
                                <Link href={route('event.create')} className="btn btn-primary">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Add Event
                                    </button>
                                </Link>
                            </div>

                            <table className="mt-4 min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Short Description</th>
                                        <th className="px-4 py-2">Long Description</th>
                                        <th className="px-4 py-2">Date</th>
                                        <th className="px-4 py-2">Hastags</th>
                                        <th className="px-4 py-2">Short tips</th>
                                        <th className="px-4 py-2">Photo</th>
                                        <th className="px-4 py-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map(event => (
                                        <tr key={event.id}>
                                            <td className="px-4 py-2 border">{event.id}</td>
                                            <td className="px-4 py-2 border">{event.title}</td>
                                            <td className="px-4 py-2 border">{event.short_description}</td>
                                            <td className="px-4 py-2 border">{event.long_description}</td>
                                            <td className="px-4 py-2 border">{event.date}</td>
                                            <td className="px-4 py-2 border">{event.hashtags}</td>
                                            <td className="px-4 py-2 border">{event.short_tips}</td>
                                            <td className="px-4 py-2 border">{event.photo}</td>
                                            <td className="px-4 py-2 border">
                                                <div className="flex space-x-2">
                                                    <Link href={route('event.edit', event.id)} className="mr-2">
                                                        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white focus:outline-none">
                                                            Edit
                                                        </button>
                                                    </Link>

                                                    <Link href={route('event.show', event.id)} className="mr-2">
                                                        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white focus:outline-none">
                                                            View
                                                        </button>
                                                    </Link>

                                                    <Link
                                                        href={route('event.destroy', event.id)}
                                                        method="delete"
                                                        className="inline-block mr-2"
                                                        as="button"
                                                    >
                                                        <span className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white focus:outline-none">
                                                            Delete
                                                        </span>
                                                    </Link>
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
