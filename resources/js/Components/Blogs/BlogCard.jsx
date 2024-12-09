import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image, title, description, date }) => {
    return (
        <>
            <div className="dark:text-white group">
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt="No image"
                        className="group-hover:scale-105 mx-auto w-full h-[420px] duration-300 object-cover"
                    />
                </div>
                <div className="space-y-2 bg-white dark:bg-slate-950 ml-6 p-4 -translate-y-16">
                    <h1 className="line-clamp-1 font-semibold text-2xl">{title}</h1>
                    <p className="line-clamp-4 text-gray-500 text-sm">{description}</p>
                    <p className="line-clamp-4 text-gray-500 text-sm">{date}</p>
                    <div className="flex justify-end pr-4 text-gray-500">
                        <FaArrowRight className="group-hover:text-primary group-hover:translate-x-2 duration-300" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
