import BlogCard from './BlogCard';

const BlogsComp = ({ blogs }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-10 pb-14 dark:text-white">
            <section data-aos="fade-up" className="ml-10 container">
                <h1 className="border-primary/50 my-8 py-2 pl-2 border-l-8 font-semibold text-3xl">
                    Our Blogs
                </h1>
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Pass the fetched blogs data to BlogCard */}
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
                <div className="text-center">
                    <button className="primary-btn">View All Posts</button>
                </div>
            </section>
        </div>
    );
};

export default BlogsComp;
