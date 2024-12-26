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


export default function Index({ projects, flash }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [deleteUrl, setDeleteUrl] = useState('');
    const { delete: destroy } = useForm();

    const handleDeleteClick = url => {
        setDeleteUrl(url);
        setIsDialogOpen(true);
    };

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);  // Pass the success message
        }
        if (flash.message.error) {
            toast.error(flash.message.error);  // Pass the error message
        }
    }, [flash]);

    // if (route().current('projects.index') && route().has('success')) {
    //     toast.success(route().success);
    // }

    const handleConfirmDelete = () => {
        setIsDialogOpen(false);
        destroy(deleteUrl);
    };

    // const handleConfirmDelete = () => {
    //     setIsDialogOpen(false);
    //     destroy(deleteUrl, {
    //         onSuccess: () => {
    //             // Show success toast after deletion
    //             toast.success('Project deleted successfully!');
    //         }
    //     });
    // };

    // Filter projects by title based on the search term
    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Projects</h2>}
        >
            <Head title="Projects" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl">
                                Your Projects
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
                                <Link href={route('projects.create')} className="btn btn-primary">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Add project
                                    </button>
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="mt-4 min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">ID</th>
                                            <th className="px-4 py-2">Title</th>
                                            <th className="px-4 py-2">Subtitle</th>
                                            <th className="px-4 py-2">Description</th>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Photo</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredProjects.map(project => (
                                            <tr key={project.id}>
                                                <td className="px-4 py-2 border">{project.id}</td>
                                                <td className="px-4 py-2 border">{project.title}</td>
                                                <td className="px-4 py-2 border">{project.subtitle}</td>
                                                <td className="px-4 py-2 border">{truncateText(project.description, 40)}</td>
                                                <td className="px-4 py-2 border">{project.date}</td>
                                                <td className="px-4 py-2 border">{truncateText(project.image, 20)}</td>
                                                <td className="px-4 py-2 border">
                                                    <div className="flex space-x-2">
                                                        <Link
                                                            href={route('projects.edit', project.id)}
                                                            className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded text-blue-600"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faPencilAlt}
                                                                className="mr-2"
                                                            />
                                                            Edit
                                                        </Link>

                                                        <Link
                                                            href={route('projects.show', project.id)}
                                                            className="bg-green-100 hover:bg-green-200 px-4 py-2 rounded text-green-600"
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
                                                                    route('projects.destroy', project.id)
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
