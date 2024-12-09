import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import BlogCard from "../../Components/Blogs/BlogCard";

const Show = ({ blog }) => {
    return (
        <>
            <AuthenticatedLayout
                header={
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-gray-800 text-xl leading-tight">
                            Blog Details
                        </h2>
                        <Link
                            href={route('blogs.index')}
                            className="bg-blue-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white focus:outline-none"
                        >
                            Back
                        </Link>
                    </div>
                }
            >
                <div className="bg-gray-100 dark:bg-gray-900 mx-auto py-10 pb-14 dark:text-white">
                    <section data-aos="fade-up" className="ml-10 container">
                        <h1 className="border-primary/50 my-8 py-2 pl-2 border-l-8 font-semibold text-3xl">
                            {blog.title}
                        </h1>
                        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {/* Render BlogCard dynamically with the passed blog data */}
                            <BlogCard
                                id={blog.id}
                                image={blog.image}
                                title={blog.title}
                                description={blog.short_description}
                                author={blog.long_description}
                                date={blog.date}
                            />
                        </div>
                    </section>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Show;
