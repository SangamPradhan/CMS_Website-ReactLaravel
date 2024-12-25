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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index({ testimonials }) {
    // Search state
    const [searchTerm, setSearchTerm] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [deleteUrl, setDeleteUrl] = useState('');
    const { delete: destroy } = useForm();

    const handleDeleteClick = url => {
        setDeleteUrl(url);
        setIsDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        setIsDialogOpen(false);
        destroy(deleteUrl, {
            onSuccess: () => {
                // Show success toast after deletion
                toast.success('Selected Testimonial deleted successfully!');
            }
        });
    };

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter testimonials based on the search term
    const filteredTestimonials = testimonials.filter(testimonial =>
        testimonial.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Testimonials from our Clients</h2>}
        >
            <Head title="testimonials" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl">
                                Your testimonial Posts
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
                                <Link href={route('testimonials.create')} className="btn btn-primary">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Add Testimonial
                                    </button>
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="mt-4 min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">ID</th>
                                            <th className="px-4 py-2">Title</th>
                                            <th className="px-4 py-2">Description</th>
                                            <th className="px-4 py-2">Ratings</th>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Photo</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredTestimonials.map(testimonial => (
                                            <tr key={testimonial.id}>
                                                <td className="px-4 py-2 border">{testimonial.id}</td>
                                                <td className="px-4 py-2 border">{testimonial.title}</td>
                                                <td className="px-4 py-2 border">{testimonial.description}</td>
                                                <td className="px-4 py-2 border">{testimonial.rating}</td>
                                                <td className="px-4 py-2 border">{testimonial.date}</td>
                                                <td className="px-4 py-2 border">{testimonial.photo}</td>
                                                <td className="px-4 py-2 border">
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={route(
                                                                'testimonials.edit',
                                                                testimonial.id
                                                            )}
                                                            className='bg-blue-100 hover:bg-blue-200 mr-2 px-4 py-2 rounded text-blue-600'>
                                                            <FontAwesomeIcon
                                                                icon={faPencilAlt}
                                                                className='mr-2'
                                                            />
                                                            Edit
                                                        </Link>

                                                        <Link
                                                            href={route(
                                                                'testimonials.show',
                                                                testimonial.id
                                                            )}
                                                            className='bg-green-100 hover:bg-green-200 mr-2 px-4 py-2 rounded text-green-600'
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faEye}
                                                                className='mr-2'
                                                            />
                                                            Preview
                                                        </Link>

                                                        <button
                                                            onClick={() =>
                                                                handleDeleteClick(
                                                                    route('testimonials.destroy', testimonial.id)
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
