import Img1 from '../../../assets/blog/blog1.png';
import BlogCard from "./BlogCard";


const BlogsData = [
    {
        id: 1,
        image: Img1,
        title: "Realtime analytics",
        description:
            "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
        author: "Someone",
        date: "April 22, 2022",
    },
    {
        id: 2,
        image: Img1,
        title: "Realtime analytics",
        description:
            "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
        author: "Someone",
        date: "April 22, 2022",
    },
    {
        id: 3,
        image: Img1,
        title: "Realtime analytics",
        description:
            "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. ",
        author: "Someone",
        date: "April 22, 2022",
    },
];

const BlogsComp = () => {
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-900 py-10 pb-14 dark:text-white">
                <section data-aos="fade-up" className="ml-10 container">
                    <h1 className="border-primary/50 my-8 py-2 pl-2 border-l-8 font-semibold text-3xl">
                        Our Blogs
                    </h1>
                    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {BlogsData.map((item) => (
                            <BlogCard key={item.id} {...item} />
                        ))}
                    </div>
                    <div className="text-center">
                        <button className="primary-btn">View All Posts</button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogsComp;
