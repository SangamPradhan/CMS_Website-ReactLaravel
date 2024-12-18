import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {
    faEye,
    faPencilAlt,
    faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link } from '@inertiajs/react';

export default function Index({ galleries }) {

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Add Images and Videos</h2>}
        >
            <Head title="gallery" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl" >
                                Your Gallery Posts
                            </h1>
                            {/* Aligning the button to the top right */}
                            <div className="flex justify-end space-x-4 mb-4">
                                <input type="text" className="px-2 py-1 search-input" placeholder="Search" />
                                <Link href={route('gallery.create')} className="btn btn-primary">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Add gallery
                                    </button>
                                </Link>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="mt-4 min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">ID</th>
                                            <th className="px-4 py-2">Title</th>
                                            <th className="px-4 py-2">Date</th>
                                            <th className="px-4 py-2">Photo</th>
                                            <th className="px-4 py-2">Video</th>
                                            <th className="px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {galleries.map(gallery => (
                                            <tr key={gallery.id}>
                                                <td className="px-4 py-2 border">{gallery.id}</td>
                                                <td className="px-4 py-2 border">{gallery.title}</td>
                                                <td className="px-4 py-2 border">{gallery.date}</td>
                                                <td className="px-4 py-2 border">{gallery.photo}</td>
                                                <td className="px-4 py-2 border">{gallery.video}</td>
                                                <td className="px-4 py-2 border">
                                                    <div className="flex space-x-2">
                                                        <Link href={route('gallery.edit', gallery.id)} className="mr-2">
                                                            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white focus:outline-none">
                                                                <FontAwesomeIcon
                                                                    icon={faPencilAlt}
                                                                    className='mr-2'
                                                                />
                                                                Edit
                                                            </button>
                                                        </Link>

                                                        <Link href={route('gallery.show', gallery.id)} className="mr-2">
                                                            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white focus:outline-none">
                                                                <FontAwesomeIcon
                                                                    icon={faEye}
                                                                    className='mr-2'
                                                                />
                                                                View
                                                            </button>
                                                        </Link>

                                                        <Link
                                                            href={route('gallery.destroy', gallery.id)}
                                                            method="delete"
                                                            className="mr-2"
                                                        >
                                                            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white className= focus:outline-none">
                                                                <FontAwesomeIcon
                                                                    icon={faTrashAlt}
                                                                    className='mr-2'
                                                                />
                                                                Delete
                                                            </button>
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
            </div>
        </AuthenticatedLayout>
    );
}


