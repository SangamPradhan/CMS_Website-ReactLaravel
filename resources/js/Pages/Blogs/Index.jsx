import ConfirmationDialog from '@/Components/ConfirmationDialog';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {
    faEye,
    faPencilAlt,
    faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index({ blogs, flash }) {
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
        destroy(deleteUrl);
    };

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }
        if (flash.message.error) {
            toast.error(flash.message.error);
        }
    }), [flash];

    // Filter blogs by title based on the search term
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Blogs</h2>}
        >
            <Head title="Blogs" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl">
                                Your Blogs
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
                                <Link href={route('blogs.create')} className="btn btn-primary">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Add Blog
                                    </button>
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="mt-4 min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">ID</th>
                                            <th className="px-4 py-2">Title</th>
                                            <th className="px-4 py-2">Short Description</th>
                                            <th className="px-4 py-2">Long Description</th>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Photo</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredBlogs.map(blog => (
                                            <tr key={blog.id}>
                                                <td className="px-4 py-2 border">{blog.id}</td>
                                                <td className="px-4 py-2 border">{blog.title}</td>
                                                <td className="px-4 py-2 border">{truncateText(blog.short_description, 20)}</td>
                                                <td className="px-4 py-2 border">{truncateText(blog.long_description, 20)}</td>
                                                <td className="px-4 py-2 border">{blog.date}</td>
                                                <td className="px-4 py-2 border">{truncateText(blog.photo, 20)}</td>
                                                <td className="px-4 py-2 border">
                                                    <div className="flex space-x-2 px-4 py-2">
                                                        <Link
                                                            href={route(
                                                                'blogs.edit',
                                                                blog.id
                                                            )}
                                                            className="bg-blue-100 hover:bg-blue-200 mr-2 px-4 py-2 rounded text-blue-600"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faPencilAlt}
                                                                className="mr-2"
                                                            />
                                                            Edit
                                                        </Link>

                                                        <Link
                                                            href={route(
                                                                'blogs.show',
                                                                blog.id
                                                            )}
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
                                                                    route(
                                                                        'blogs.destroy',
                                                                        blog.id
                                                                    )
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
            <ToastContainer />
        </AuthenticatedLayout>
    );
}
