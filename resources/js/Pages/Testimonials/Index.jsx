import ConfirmationDialog from '@/Components/ConfirmationDialog';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { faEye, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index({ testimonials, flash }) {
    // State management
    const [searchTerm, setSearchTerm] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [deleteUrl, setDeleteUrl] = useState('');
    const { delete: destroy } = useForm();

    // Handlers for confirmation dialog
    const handleDeleteClick = (url) => {
        setDeleteUrl(url);
        setIsDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        setIsDialogOpen(false);
        destroy(deleteUrl);
    };

    // Flash message notifications
    useEffect(() => {
        if (flash?.message?.success) toast.success(flash.message.success);
        if (flash?.message?.error) toast.error(flash.message.error);
    }, [flash]);

    // Search functionality
    const handleSearchChange = (event) => setSearchTerm(event.target.value);

    const filteredTestimonials = testimonials.filter((testimonial) =>
        testimonial.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const truncateText = (text, maxLength) => 
        text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Testimonials from our Clients</h2>}
        >
            <Head title="Testimonials" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl">Your Testimonial Posts</h1>
                            <div className="flex justify-end space-x-4 mb-4">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="px-2 py-1 border rounded"
                                    placeholder="Search by Title"
                                />
                                <Link href={route('testimonials.create')}>
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Add Testimonial
                                    </button>
                                </Link>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="border min-w-full">
                                    <thead>
                                        <tr>
                                            {['ID', 'Title', 'Description', 'Ratings', 'Date', 'Photo', 'Actions'].map((heading) => (
                                                <th key={heading} className="px-4 py-2 border">{heading}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredTestimonials.map((testimonial) => (
                                            <tr key={testimonial.id}>
                                                <td className="px-4 py-2 border">{testimonial.id}</td>
                                                <td className="px-4 py-2 border">{testimonial.title}</td>
                                                <td className="px-4 py-2 border">
                                                    {truncateText(testimonial.description, 40)}
                                                </td>
                                                <td className="px-4 py-2 border">{testimonial.rating}</td>
                                                <td className="px-4 py-2 border">{testimonial.date}</td>
                                                <td className="px-4 py-2 border">
                                                    {truncateText(testimonial.photo, 20)}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={route('testimonials.edit', testimonial.id)}
                                                            className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-600"
                                                        >
                                                            <FontAwesomeIcon icon={faPencilAlt} className="mr-2" />
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            href={route('testimonials.show', testimonial.id)}
                                                            className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded text-green-600"
                                                        >
                                                            <FontAwesomeIcon icon={faEye} className="mr-2" />
                                                            Preview
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDeleteClick(route('testimonials.destroy', testimonial.id))}
                                                            className="bg-red-100 hover:bg-red-200 px-4 py-2 rounded text-red-600"
                                                        >
                                                            <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
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
