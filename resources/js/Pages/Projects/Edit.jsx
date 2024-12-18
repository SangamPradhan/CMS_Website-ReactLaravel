import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit({ project }) {
    console.log(project);
    const { data, setData, put, errors } = useForm({
        title: project.title,
        subtitle: project.subtitle,
        description: project.description,
        date: project.date,
        image: null,
    }
    );

    // Handle text input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setData('image', e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('projects.update', project.id));  // Send the PUT request to update the project
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    {/* Left-aligned Title */}
                    <h2 className="font-semibold text-gray-800 text-xl leading-tight">Edit This Project</h2>

                </div>
            }

        >
            <Head title="Edit project" />

            <div className="flex justify-center items-center pt-5 md:pt-5 lg:pt-5">
                <div className="bg-white shadow-md p-10 rounded-lg w-full max-w-3xl">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="font-bold text-2xl text-blue-500">
                            Update Project Information
                        </h2>
                        <Link
                            href={route('projects.index')}
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
                                placeholder="project Title"
                            />
                            {errors.title && <div className="mt-1 text-red-500 text-sm">{errors.title}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="subtitle" className="block mb-1 font-medium text-gray-700 text-sm">Short Description</label>
                            <textarea
                                id="subtitle"
                                name="subtitle"
                                value={data?.subtitle}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Short Description"
                            />
                            {errors.subtitle && <div className="mt-1 text-red-500 text-sm">{errors.subtitle}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="description" className="block mb-1 font-medium text-gray-700 text-sm"> Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={data?.description}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder=" Description"
                            />
                            {errors.description && <div className="mt-1 text-red-500 text-sm">{errors.description}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="date" className="block mb-1 font-medium text-gray-700 text-sm">Project Date</label>
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

                        <div className="mb-7">
                            <label htmlFor="image" className="block mb-1 font-medium text-gray-700 text-sm">project image</label>
                            <div className="border-2 border-gray-300 p-4 hover:border-blue-500 border-dashed rounded-md text-center transition duration-300 cursor-pointer">
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <label htmlFor="image" className="text-gray-500 hover:text-blue-500 cursor-pointer">
                                    {data?.image ? data.image.name : "Upload project image"}
                                </label>
                            </div>
                            {errors.image && <div className="mt-1 text-red-500 text-sm">{errors.image}</div>}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md w-full text-white transition duration-300"
                        >
                            Update Project
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
