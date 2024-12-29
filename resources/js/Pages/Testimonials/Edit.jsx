import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Edit({ testimonial }) {
    const { data, setData, put, errors } = useForm({
        title: testimonial.title,
        description: testimonial.description,
        rating: testimonial.rating,
        date: testimonial.date,
        image: null, // Initialize image as null
    });

    // State for image preview
    const [imagePreview, setImagePreview] = useState(null);

    // Set initial image preview if the testimonial has an image
    useEffect(() => {
        if (testimonial.photo) {
            setImagePreview(`/storage/${testimonial.photo}`);
        }
    }, [testimonial.photo]);

    // Handle text input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    // Handle file input change (Image upload)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);

        // Create image preview
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);  // Set the preview image
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('rating', data.rating);
        formData.append('date', data.date);
        
        if (data.image) {
            formData.append('photo', data.photo);
        }

        // Send the form data with PUT request to update the testimonial
        put(route('testimonials.update', testimonial.id), {
            body: formData, // Send data using FormData
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    {/* Left-aligned Title */}
                    <h2 className="font-semibold text-gray-800 text-xl leading-tight">Edit This Testimonial</h2>
                </div>
            }
        >
            <Head title="Edit Testimonial Post" />

            <div className="flex justify-center items-center pt-5 md:pt-5 lg:pt-5">
                <div className="bg-white shadow-md p-10 rounded-lg w-full max-w-3xl">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="font-bold text-2xl text-blue-500">
                            Update Testimonial Information
                        </h2>
                        <Link
                            href={route('testimonials.index')}
                            className="bg-red-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
                        >
                            Cancel
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-7">
                            <label htmlFor="title" className="block mb-1 font-medium text-gray-700 text-sm">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data?.title}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Testimonial Title"
                            />
                            {errors.title && <div className="mt-1 text-red-500 text-sm">{errors.title}</div>}
                        </div>

                        <div className="mb-7">
                            <label htmlFor="description" className="block mb-1 font-medium text-gray-700 text-sm">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={data?.description}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Testimonial Description"
                            />
                            {errors.description && <div className="mt-1 text-red-500 text-sm">{errors.description}</div>}
                        </div>

                        <div className="mb-7">
                            <label htmlFor="rating" className="block mb-1 font-medium text-gray-700 text-sm">Rating</label>
                            <textarea
                                id="rating"
                                name="rating"
                                value={data?.rating}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Testimonial Rating"
                            />
                            {errors.rating && <div className="mt-1 text-red-500 text-sm">{errors.rating}</div>}
                        </div>

                        <div className="mb-7">
                            <label htmlFor="date" className="block mb-1 font-medium text-gray-700 text-sm">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={data?.date}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                            />
                            {errors.date && <div className="mt-1 text-red-500 text-sm">{errors.date}</div>}
                        </div>

                        {/* Image Preview Section */}
                        <div className="mb-7">
                            <label htmlFor="current-photo" className="block mb-2 font-medium text-gray-700">Current Testimonial Image</label>
                            {imagePreview && (
                                <div className="mb-4">
                                    <img src={imagePreview} alt="Testimonial Photo Preview" className="w-32 h-32 object-cover" />
                                </div>
                            )}
                            {!imagePreview && testimonial.image && (
                                <p className="mt-1 text-gray-500 text-sm">No image preview available</p>
                            )}
                        </div>

                        {/* Image Upload Section */}
                        <div className="mb-7">
                            <label htmlFor="photo" className="block mb-1 font-medium text-gray-700 text-sm">Testimonial Image</label>
                            <div className="border-2 border-gray-300 p-4 hover:border-blue-500 border-dashed rounded-md text-center transition duration-300 cursor-pointer">
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label htmlFor="photo" className="text-gray-500 hover:text-blue-500 cursor-pointer">
                                    {data?.photo ? data.photo.name : "Upload Testimonial Image"}
                                </label>
                            </div>
                            {errors.photo && <div className="mt-1 text-red-500 text-sm">{errors.photo}</div>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md w-full text-white transition duration-300"
                        >
                            Update Testimonial
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
