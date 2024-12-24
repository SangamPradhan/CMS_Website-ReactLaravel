import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
    return (
        <div className="dark:text-white group">
            <div className="overflow-hidden">
                <img
                    src={`/storage/${blog.photo}`} // Adjust the image path as per your setup
                    alt={blog.title}
                    className="w-full h-full object-cover" // Ensures image maintains aspect ratio and fits the container
                />
            </div>
            <div className="space-y-2 bg-white dark:bg-slate-950 ml-6 p-4 -translate-y-16">
                <h1 className="line-clamp-1 font-semibold text-2xl">{blog.title}</h1>
                <p className="line-clamp-4 text-gray-500 text-sm">{blog.short_description}</p>
                <p className="text-gray-500 text-sm">{blog.date}</p>
                <div className="flex justify-end pr-4 text-gray-500">
                    <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
