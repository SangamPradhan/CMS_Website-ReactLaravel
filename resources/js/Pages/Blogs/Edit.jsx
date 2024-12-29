// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Edit({ blog }) {
//     console.log(blog);
//     const { data, setData, put, errors } = useForm({
//         title: blog.title,
//         short_description: blog.short_description,
//         long_description: blog.long_description,
//         date: blog.date,
//         image: null,
//     }
//     );

//     // Handle text input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setData(name, value);
//     };

//     // Handle file input change
//     const handleFileChange = (e) => {
//         setData('image', e.target.files[0]);
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         put(route('blogs.update', blog.id));  // Send the PUT request to update the blog
//     };

//     return (
//         <AuthenticatedLayout
//             header={
//                 <div className="flex justify-between items-center">
//                     {/* Left-aligned Title */}
//                     <h2 className="font-semibold text-gray-800 text-xl leading-tight">Edit This blog</h2>
//                 </div>
//             }

//         >
//             <Head title="Edit Blog Post" />

//             <div className="flex justify-center items-center pt-5 md:pt-5 lg:pt-5">
//                 <div className="bg-white shadow-md p-10 rounded-lg w-full max-w-3xl">

//                     <div className="flex justify-between items-center mb-10">
//                         <h2 className="font-bold text-2xl text-blue-500">
//                             Update Blog's Information
//                         </h2>
//                         <Link
//                             href={route('blogs.index')}
//                             className="bg-red-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
//                         >
//                             Cancel
//                         </Link>
//                     </div>


//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-7">
//                             <label htmlFor="title" className="block mb-1 font-medium text-gray-700 text-sm">Title</label>
//                             <input
//                                 type="text"
//                                 id="title"
//                                 name="title"
//                                 value={data?.title}
//                                 onChange={handleInputChange}
//                                 className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
//                                 placeholder="blog Title"
//                             />
//                             {errors.title && <div className="mt-1 text-red-500 text-sm">{errors.title}</div>}
//                         </div>
//                         <div className="mb-7">
//                             <label htmlFor="short_description" className="block mb-1 font-medium text-gray-700 text-sm">Short Description</label>
//                             <textarea
//                                 id="short_description"
//                                 name="short_description"
//                                 value={data?.short_description}
//                                 onChange={handleInputChange}
//                                 className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
//                                 placeholder="Short Description"
//                             />
//                             {errors.short_description && <div className="mt-1 text-red-500 text-sm">{errors.short_description}</div>}
//                         </div>
//                         <div className="mb-7">
//                             <label htmlFor="long_description" className="block mb-1 font-medium text-gray-700 text-sm"> Description</label>
//                             <textarea
//                                 id="long_description"
//                                 name="long_description"
//                                 value={data?.long_description}
//                                 onChange={handleInputChange}
//                                 className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
//                                 placeholder=" Description"
//                             />
//                             {errors.long_description && <div className="mt-1 text-red-500 text-sm">{errors.long_description}</div>}
//                         </div>
//                         <div className="mb-7">
//                             <label htmlFor="date" className="block mb-1 font-medium text-gray-700 text-sm">blog Date</label>
//                             <input
//                                 type="date"
//                                 id="date"
//                                 name="date"
//                                 value={data?.date}
//                                 onChange={handleInputChange}
//                                 className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
//                             />
//                             {errors.date && <div className="mt-1 text-red-500 text-sm">{errors.date}</div>}
//                         </div>

//                         <div className="mb-7">
//                             <label htmlFor="photo" className="block mb-2 font-medium text-gray-700">
//                                 New Blog Photo (Optional)
//                             </label>
//                             <input
//                                 type="file"
//                                 id="photo"
//                                 name="photo"
//                                 onChange={(e) => setData('photo', e.target.files[0])}
//                                 className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full text-gray-700"
//                                 accept="image/*"
//                             />
//                             {errors.photo && <div className="text-red-500 text-sm">{errors.photo}</div>}
//                         </div>

//                         <button
//                             type="submit"
//                             className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md w-full text-white transition duration-300"
//                         >
//                             Update Blog
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }


import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Edit({ blog }) {
    console.log(blog);
    const { data, setData, put, errors } = useForm({
        title: blog.title,
        short_description: blog.short_description,
        long_description: blog.long_description,
        date: blog.date,
        image: null,
    });

    // State to hold image preview
    const [imagePreview, setImagePreview] = useState(blog.photo ? `/storage/${blog.photo}` : null);

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
        put(route('blogs.update', blog.id));  // Send the PUT request to update the blog
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    {/* Left-aligned Title */}
                    <h2 className="font-semibold text-gray-800 text-xl leading-tight">Edit This blog</h2>
                </div>
            }
        >
            <Head title="Edit Blog Post" />

            <div className="flex justify-center items-center pt-5 md:pt-5 lg:pt-5">
                <div className="bg-white shadow-md p-10 rounded-lg w-full max-w-3xl">

                    <div className="flex justify-between items-center mb-10">
                        <h2 className="font-bold text-2xl text-blue-500">
                            Update Blog's Information
                        </h2>
                        <Link
                            href={route('blogs.index')}
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
                                placeholder="Blog Title"
                            />
                            {errors.title && <div className="mt-1 text-red-500 text-sm">{errors.title}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="short_description" className="block mb-1 font-medium text-gray-700 text-sm">Short Description</label>
                            <textarea
                                id="short_description"
                                name="short_description"
                                value={data?.short_description}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Short Description"
                            />
                            {errors.short_description && <div className="mt-1 text-red-500 text-sm">{errors.short_description}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="long_description" className="block mb-1 font-medium text-gray-700 text-sm">Description</label>
                            <textarea
                                id="long_description"
                                name="long_description"
                                value={data?.long_description}
                                onChange={handleInputChange}
                                className="border-gray-300 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full focus:outline-none"
                                placeholder="Description"
                            />
                            {errors.long_description && <div className="mt-1 text-red-500 text-sm">{errors.long_description}</div>}
                        </div>
                        <div className="mb-7">
                            <label htmlFor="date" className="block mb-1 font-medium text-gray-700 text-sm">Blog Date</label>
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
                            <label htmlFor="current-photo" className="block mb-2 font-medium text-gray-700">
                                Current Blog Photo
                            </label>
                            {/* Display current photo preview or path */}
                            {imagePreview && (
                                <div className="mb-4">
                                    <img src={imagePreview} alt="Current Blog Photo" className="w-32 h-32 object-cover" />
                                </div>
                            )}
                            {!imagePreview && blog.photo && (
                                <p className="mt-1 text-gray-500 text-sm">No image preview available</p>
                            )}
                        </div>

                        <div className="mb-7">
                            <label htmlFor="photo" className="block mb-2 font-medium text-gray-700">
                                New Blog Photo (Optional)
                            </label>
                            <input
                                type="file"
                                id="photo"
                                name="photo"
                                onChange={handleFileChange}
                                className="border-gray-300 focus:border-indigo-500 shadow-sm rounded-md focus:ring-indigo-500 w-full text-gray-700"
                                accept="image/*"
                            />
                            {errors.photo && <div className="text-red-500 text-sm">{errors.photo}</div>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md w-full text-white transition duration-300"
                        >
                            Update Blog
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
