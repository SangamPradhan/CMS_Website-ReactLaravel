import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {
    faEye,
    faPencilAlt,
    faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head, Link } from '@inertiajs/react';

export default function Index({ testimonials }) {

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Testimonials from our Clients</h2>}
        >
            <Head title="testimonials" />
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="font-bold text-2xl" >
                                Your testimonial Posts
                            </h1>
                            {/* Aligning the button to the top right */}
                            <div className="flex justify-end space-x-4 mb-4">
                                <input type="text" className="px-2 py-1 search-input" placeholder="Search" />
                                <Link href={route('testimonials.create')} className="btn btn-primary">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white focus:outline-none">
                                        Add testimonial
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
                                        {testimonials.map(testimonial => (
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

                                                        <Link
                                                            href={route('testimonials.destroy', testimonial.id)}
                                                            method="delete"
                                                            className='bg-red-100 hover:bg-green-200 mr-2 px-4 py-2 rounded text-red-600'
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faTrashAlt}
                                                                className='mr-2'
                                                            />
                                                            Delete
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
