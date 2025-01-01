import ConfirmationDialog from '@/Components/ConfirmationDialog';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {
    faEye,
    faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Index({ contacts, flash }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [deleteUrl, setDeleteUrl] = useState('');
    const { delete: destroy } = useForm();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter contacts by title based on the search term
    const filteredcontacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteClick = url => {
        setDeleteUrl(url);
        setIsDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        setIsDialogOpen(false);
        destroy(deleteUrl);
    };

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }
        if (flash.message.error) {
            toast.error(flash.message.error);
        }
    }, [flash]);

    const handleSearchChange = contact => {
        setSearchTerm(contact.target.value);
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">User Feedbacks</h2>}
        >
            <Head title="contact" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl">
                                User Contacts and Reviews
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
                                <Link href={route('contactus.create')} className="btn btn-primary">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Send Mail to User
                                    </button>
                                </Link>
                            </div>


                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">ID</th>
                                            <th className="px-4 py-2">User Name</th>
                                            <th className="px-4 py-2">Email</th>
                                            <th className="px-4 py-2">Subject</th>
                                            <th className="px-4 py-2"> Comments</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredcontacts.map(contact => (
                                            <tr key={contact.id}>
                                                <td className="px-4 py-2 border">{contact.id}</td>
                                                <td className="px-4 py-2 border">{contact.name}</td>
                                                <td className="px-4 py-2 border">{contact.email}</td>
                                                <td className="px-4 py-2 border">{contact.subject}</td>
                                                <td className="px-4 py-2 border">{contact.message}</td>

                                                <td className="px-4 py-2 border">
                                                    <div className="flex space-x-2 px-4 py-2">

                                                        <Link
                                                            href={route('contactus.show', contact.id)}
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
                                                                    route('contactus.destroy', contact.id)
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
            <ToastContainer />
            <ConfirmationDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={handleConfirmDelete}
            />
        </AuthenticatedLayout>
    );
}
