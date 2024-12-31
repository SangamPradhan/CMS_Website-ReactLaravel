import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Index({ galleries }) {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-gray-800 text-xl leading-tight">Gallery</h2>
                    <Link
                        href={route('gallery.create')}
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white focus:outline-none"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Gallery" />

            <div className="py-5">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
                        <div className="p-6">
                            {/* Flash Message */}
                            {flash.message && (
                                <div className="bg-green-100 mb-4 p-4 rounded-md text-green-700">
                                    {flash.message}
                                </div>
                            )}

                            {/* Gallery Table */}
                            <div className="overflow-x-auto">
                                <table className="border-collapse border-gray-200 border min-w-full table-auto">
                                    <thead>
                                        <tr className="bg-gray-100 text-left">
                                            <th className="px-6 py-3 border-b">#</th>
                                            <th className="px-6 py-3 border-b">Image</th>
                                            <th className="px-6 py-3 border-b">Title</th>
                                            <th className="px-6 py-3 border-b">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {galleries.map((gallery, index) => (
                                            <tr key={gallery.id} className="hover:bg-gray-50">
                                                {/* Serial Number */}
                                                <td className="px-6 py-4 border-b">{index + 1}</td>

                                                {/* Image Preview */}
                                                <td className="px-6 py-4 border-b">
                                                    <img
                                                        src={`/storage/${gallery.photo}`}
                                                        alt={gallery.title}
                                                        className="rounded w-16 h-16 object-cover"
                                                    />
                                                </td>

                                                {/* Title */}
                                                <td className="px-6 py-4 border-b">{gallery.title}</td>

                                                {/* Actions */}
                                                <td className="space-x-2 px-6 py-4 border-b">
                                                    <Link
                                                        href={route('gallery.show', gallery.id)}
                                                        className="text-blue-500 hover:underline"
                                                    >
                                                        View
                                                    </Link>
                                                    <Link
                                                        href={route('gallery.edit', gallery.id)}
                                                        className="text-yellow-500 hover:underline"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        as="button"
                                                        method="delete"
                                                        href={route('gallery.destroy', gallery.id)}
                                                        className="text-red-500 hover:underline"
                                                        onClick={(e) => {
                                                            if (!confirm('Are you sure you want to delete this item?')) {
                                                                e.preventDefault();
                                                            }
                                                        }}
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* No Data Message */}
                            {galleries.length === 0 && (
                                <div className="mt-4 text-center text-gray-500">
                                    No gallery items found. Start by adding one!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
