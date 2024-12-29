import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Show({ testimonial }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    // Function to open the modal with the image
    const handleImageClick = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage('');
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-gray-800 text-xl leading-tight">
                    Testimonial Details
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-hidden">
                        <div className="p-6 text-gray-900">
                            <h1 className="mb-6 font-bold text-2xl">
                                Testimonial Information
                            </h1>

                            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                                {/* ID */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        ID:
                                    </h2>
                                    <p className="text-gray-900">{testimonial?.id}</p>
                                </div>

                                {/* Title */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Title:
                                    </h2>
                                    <p className="text-gray-900">{testimonial.title}</p>
                                </div>

                                {/* Description */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Description:
                                    </h2>
                                    <p className="text-gray-900">{testimonial.description}</p>
                                </div>

                                {/* Rating */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Rating:
                                    </h2>
                                    <p className="text-gray-900">{testimonial.rating}</p>
                                </div>

                                {/* Date */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Date:
                                    </h2>
                                    <p className="text-gray-900">
                                        {new Date(testimonial.created_at).toLocaleString()}
                                    </p>
                                </div>

                                {/* Photo (Clickable Image) */}
                                <div className="pb-2 border-b">
                                    <h2 className="font-medium text-gray-700">
                                        Photo:
                                    </h2>
                                    <p className="text-gray-900">
                                        <button onClick={() => handleImageClick(testimonial.photo)}>
                                            {testimonial.photo}
                                        </button>
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-4 mt-6">
                                <Link
                                    href={route('testimonials.index')}
                                    className="bg-gray-500 hover:bg-gray-600 shadow px-4 py-2 rounded-md text-white"
                                >
                                    Back to List
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Popup */}
            {isModalOpen && (
                <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="top-0 right-0 absolute bg-gray-700 p-2 rounded-full text-white"
                        >
                            X
                        </button>
                        <img
                        // src={`/storage/${project.image}`}
                            src={`/storage/${modalImage}`}
                            alt="Testimonial Image"
                            className="max-w-full max-h-screen object-contain"
                        />
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
