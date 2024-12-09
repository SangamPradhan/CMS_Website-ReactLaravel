import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ testimonials }) {

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Add testimonial</h2>}
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
                                                        <Link href={route('testimonials.edit', testimonial.id)} className="mr-2">
                                                            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white focus:outline-none">
                                                                Edit
                                                            </button>
                                                        </Link>

                                                        <Link href={route('testimonials.show', testimonial.id)} className="mr-2">
                                                            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white focus:outline-none">
                                                                View
                                                            </button>
                                                        </Link>

                                                        <Link
                                                            href={route('testimonials.destroy', testimonial.id)}
                                                            method="delete"
                                                            className="mr-2"
                                                        >
                                                            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white className= focus:outline-none">
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
