import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function Show({ contact }) {
    console.log(contact);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-gray-800 text-xl leading-tight">
                    Contact Details
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="mb-6 font-bold text-2xl">
                                Contact Information
                            </h1>

                            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                                {/* ID */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        ID:
                                    </h2>
                                    <p className="text-gray-900">{contact?.id}</p>
                                </div>

                                {/* Name */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Name:
                                    </h2>
                                    <p className="text-gray-900">{contact.name}</p>
                                </div>

                                {/* Email */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Email:
                                    </h2>
                                    <p className="text-gray-900">{contact.email}</p>
                                </div>

                                {/* Subject */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Subject:
                                    </h2>
                                    <p className="text-gray-900">{contact.subject}</p>
                                </div>

                                {/* Message */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Message:
                                    </h2>
                                    <p className="text-gray-900">{contact.message}</p>
                                </div>

                                {/* Created At */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Created At:
                                    </h2>
                                    <p className="text-gray-900">
                                        {new Date(contact.created_at).toLocaleString()}
                                    </p>
                                </div>

                                {/* Updated At */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Last Updated:
                                    </h2>
                                    <p className="text-gray-900">
                                        {new Date(contact.updated_at).toLocaleString()}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-4 mt-6">
                                <Link
                                    href={route('contactus.index')}
                                    className="bg-gray-500 hover:bg-gray-600 shadow px-4 py-2 rounded-md text-white"
                                >
                                    Back to List
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
