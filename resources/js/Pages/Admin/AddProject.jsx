import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react'; // Import `router` instead of `Inertia`
import { useState } from 'react';

const AddProject = () => {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        description: '',
        date: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('title', formData.title);
        form.append('subtitle', formData.subtitle);
        form.append('description', formData.description);
        form.append('date', formData.date);
        if (formData.image) {
            form.append('image', formData.image);
        }

        // Use `router.post` instead of `Inertia.post`
        router.post('/projects', form);
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-gray-800 text-xl leading-tight">Add The Upcoming Projects</h2>}
        >
            <Head title="Add Projects" />

            <div className="bg-white shadow-md mx-auto mt-8 p-6 rounded-lg max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                    {/* Title */}
                    <div>
                        <label
                            htmlFor="title"
                            className="block mb-2 font-medium text-gray-700"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                            placeholder="Enter the project title"
                            required
                        />
                    </div>

                    {/* Subtitle */}
                    <div>
                        <label
                            htmlFor="subtitle"
                            className="block mb-2 font-medium text-gray-700"
                        >
                            Subtitle
                        </label>
                        <input
                            type="text"
                            id="subtitle"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                            placeholder="Enter the project subtitle"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="5"
                            value={formData.description}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                            placeholder="Enter the project description"
                            required
                        ></textarea>
                    </div>

                    {/* Date */}
                    <div>
                        <label
                            htmlFor="date"
                            className="block mb-2 font-medium text-gray-700"
                        >
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label
                            htmlFor="image"
                            className="block mb-2 font-medium text-gray-700"
                        >
                            Project Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                            className="block border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full text-gray-700"
                            accept="image/*"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full text-white focus:outline-none"
                        >
                            Add Project
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddProject;
