import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
    const { data, setData, post, errors } = useForm({
        title: '',
        subtitle: '',
        description: '',
        date: '',
        photo: null,
    });

    if (route().current('projects.index') && route().has('success')) {
        toast.success(route().success);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        post(route('projects.store'), {
            onSuccess: () => {
                // Show success toast notification
                toast.success('Project created successfully!');
    
                // Delay the redirection to allow the toast to show fully
                setTimeout(() => {
                    window.location.href = route('projects.index');
                }, 1000); // 2000ms (2 seconds) delay before redirect
            }
        });
    };


        return (
            <AuthenticatedLayout
                header={
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800 text-xl leading-tight">Add New Project</h2>
                    </div>
                }
            >
                <Head title="Add Project" />
                <div className="bg-white shadow-md mx-auto mt-8 p-6 rounded-lg max-w-4xl">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="font-bold text-2xl text-blue-500">
                            Create a Project
                        </h2>
                        <Link
                            href={route('projects.index')}
                            className="bg-red-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
                        >
                            Cancel
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter the project title"
                            />
                            {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                        </div>

                        {/* Subtitle */}
                        <div>
                            <label htmlFor="subtitle" className="block mb-2 font-medium text-gray-700">
                                Subtitle
                            </label>
                            <input
                                type="text"
                                id="subtitle"
                                name="subtitle"
                                value={data.subtitle}
                                onChange={(e) => setData('subtitle', e.target.value)}
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter the project short description"
                            />
                            {errors.subtitle && (
                                <div className="text-red-500 text-sm">{errors.subtitle}</div>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="long_description" className="block mb-2 font-medium text-gray-700">
                                Long Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="5"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                                placeholder="Enter the detailed Project description"
                            />
                            {errors.description && (
                                <div className="text-red-500 text-sm">{errors.description}</div>
                            )}
                        </div>

                        {/* Date */}
                        <div>
                            <label htmlFor="date" className="block mb-2 font-medium text-gray-700">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={data.date}
                                onChange={(e) => setData('date', e.target.value)}
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full"
                            />
                            {errors.date && <div className="text-red-500 text-sm">{errors.date}</div>}
                        </div>

                        {/* Photo Upload */}
                        <div>
                            <label htmlFor="photo" className="block mb-2 font-medium text-gray-700">
                                Project Photo
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={(e) => setData('image', e.target.files[0])}
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full text-gray-700"
                                accept="image/*"
                            />

                            {errors.image && <div className="text-red-500 text-sm">{errors.image}</div>}
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full text-white focus:outline-none"
                            >
                                Add new Project
                            </button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </AuthenticatedLayout>
        );
    };

    export default Create;
