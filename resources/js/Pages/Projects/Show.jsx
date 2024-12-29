import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { FaStar } from 'react-icons/fa';

export default function Show({ project, reviews }) {
    console.log(project);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-gray-800 text-xl leading-tight">
                    Project Details
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="mb-6 font-bold text-2xl">
                                Project Information
                            </h1>

                            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                                {/* ID */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        ID:
                                    </h2>
                                    <p className="text-gray-900">{project?.id}</p>
                                </div>

                                {/* Title */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Title:
                                    </h2>
                                    <p className="text-gray-900">{project.title}</p>
                                </div>

                                {/* Subtitle */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Subtitle:
                                    </h2>
                                    <p className="text-gray-900">{project.subtitle}</p>
                                </div>

                                {/* Description */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Description:
                                    </h2>
                                    <p className="text-gray-900">{project.description}</p>
                                </div>

                                {/* Date */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Date:
                                    </h2>
                                    <p className="text-gray-900">{new Date(project.date).toLocaleString()}</p>
                                </div>

                                {/* Image */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Image:
                                    </h2>
                                    <p className="text-gray-900">{project.image}</p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-4 mt-6">
                                <Link
                                    href={route('projects.index')}
                                    className="bg-gray-500 hover:bg-gray-600 shadow px-4 py-2 rounded-md text-white"
                                >
                                    Back to List
                                </Link>
                            </div>
                        </div>
                        <div>
                            {/* Reviews Section */}
                            <div className="p-6 text-gray-900">
                                <h1 className='mt-5 mb-2 font-bold text-2xl'>Project's Reviews</h1>
                                <div className="mt-4">
                                    {project.reviews.length > 0 ? (
                                        <ul className="space-y-6">
                                            {project.reviews.map((review, index) => (
                                                <li key={index} className="bg-white shadow-sm p-4 border rounded-lg">
                                                    <div className="flex items-start">
                                                        {/* Name and Email */}
                                                        <div className="flex-1">
                                                            <h5 className="font-bold text-gray-800">{review.name}</h5>
                                                            <p className="text-gray-500 text-sm">{review.email}</p>
                                                        </div>

                                                        {/* Ratings and Date */}
                                                        <div className="flex flex-col items-end">
                                                            <div className="flex">
                                                                {Array.from({ length: review.rating }).map((_, i) => (
                                                                    <FaStar key={i} className="text-yellow-500" />
                                                                ))}
                                                                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                                                    <FaStar key={i} className="text-gray-300" />
                                                                ))}
                                                            </div>
                                                            <p className="mt-1 text-gray-400 text-sm">
                                                                {new Date(review.created_at).toLocaleDateString()}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Review Text */}
                                                    <p className="mt-3 text-gray-600 leading-relaxed">{review.project_review}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="mt-4 text-gray-500">No reviews available for this project.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
