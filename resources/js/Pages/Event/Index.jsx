import ConfirmationDialog from '@/Components/ConfirmationDialog';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {
    faEye,
    faPencilAlt,
    faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ events }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [deleteUrl, setDeleteUrl] = useState('');
    const { delete: destroy } = useForm();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter events by title based on the search term
    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteClick = url => {
        setDeleteUrl(url);
        setIsDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        setIsDialogOpen(false);
        destroy(deleteUrl);
    };

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Add Event</h2>}
        >
            <Head title="Event" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl">
                                Your Events
                            </h1>
                            {/* Aligning the button to the top right */}
                            <div className="flex justify-end space-x-4 mb-4">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="px-2 py-1 search-input"
                                    placeholder="Search by Title"
                                />
                                <Link href={route('event.create')} className="btn btn-primary">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Add Event
                                    </button>
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">ID</th>
                                            <th className="px-4 py-2">Title</th>
                                            <th className="px-4 py-2">Short Description</th>
                                            <th className="px-4 py-2">Long Description</th>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Hashtags</th>
                                            <th className="px-4 py-2">Short Tips</th>
                                            <th className="px-4 py-2">Photo</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredEvents.map(event => (
                                            <tr key={event.id}>
                                                <td className="px-4 py-2 border">{event.id}</td>
                                                <td className="px-4 py-2 border">{event.title}</td>
                                                <td className="px-4 py-2 border">{truncateText(event.short_description, 40)}</td>
                                                <td className="px-4 py-2 border">{truncateText(event.long_description, 40)}</td>
                                                <td className="px-4 py-2 border">{event.date}</td>
                                                <td className="px-4 py-2 border">{event.hashtags}</td>
                                                <td className="px-4 py-2 border">{event.short_tips}</td>
                                                <td className="px-4 py-2 border">{truncateText(event.photo, 20)}</td>
                                                <td className="px-4 py-2 border">
                                                    <div className="flex space-x-2 px-4 py-2">
                                                        <Link
                                                            href={route('event.edit', event.id)}
                                                            className="bg-blue-100 hover:bg-blue-200 mr-2 px-4 py-2 rounded text-blue-600"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faPencilAlt}
                                                                className="mr-2"
                                                            />
                                                            Edit
                                                        </Link>

                                                        <Link
                                                            href={route('event.show', event.id)}
                                                            className="bg-green-100 hover:bg-green-200 mr-2 px-4 py-2 rounded text-green-600"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faEye}
                                                                className="mr-2"
                                                            />
                                                            Preview
                                                        </Link>

                                                        <button
                                                            onClick={() =>
                                                                handleDeleteClick(
                                                                    route('event.destroy', event.id)
                                                                )
                                                            }
                                                            className="bg-red-100 hover:bg-red-200 px-4 py-2 rounded text-red-600"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faTrashAlt}
                                                                className="mr-2"
                                                            />
                                                            Delete
                                                        </button>
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
            </div>
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={handleConfirmDelete}
            />
        </AuthenticatedLayout>
    );
}
