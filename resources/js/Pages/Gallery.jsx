import Layout from "@/Layouts/layout";
import { useState } from "react";
import logo from '../../assets/brands/logo.svg';
import insta1 from '../../assets/website/insta-post-1.png';
import insta2 from '../../assets/website/insta-post-2.png';
import insta3 from '../../assets/website/insta-post-3.png';
import insta4 from '../../assets/website/insta-post-4.png';
import insta5 from '../../assets/website/insta-post-5.png';
import insta6 from '../../assets/website/insta-post-6.png';
import insta7 from '../../assets/website/insta-post-7.png';
import insta8 from '../../assets/website/insta-post-8.png';
import insta9 from '../../assets/website/insta-post-9.png';
import Footer from '../components/Footer/Footer.jsx'; // Assuming the Footer component is in this directory

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const instaPosts = [
        insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8, insta9,
    ];

    // Videos Data
    const videoPosts = [
        { title: "Video 1", url: "https://www.youtube.com/embed/KNE8o4gK_y0?si=_yt5eI6YQPEgCO2c" },
        { title: "Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
        { title: "Video 3", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    ];

    return (
        <>
        <Layout/>
            {/* Dark Themed Section */}
            <div className="bg-gray-950 p-6 text-center">
                {/* Logo */}
                <a href="#" className="block mb-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="mx-auto"
                        width={119}
                        height={37}
                    />
                </a>

                {/* Description */}
                <p className="mb-6 font-medium text-lg text-white">Following Event Pictures</p>

                {/* Instagram Post Grid */}
                <ul className="gap-10 grid grid-cols-4" style={{ gap: "12px" }}>
                    {instaPosts.map((post, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setSelectedImage(post)}
                                className="block focus:outline-none"
                            >
                                <img
                                    src={post}
                                    alt={`Insta post ${index + 1}`}
                                    className="shadow-lg rounded-md w-full h-auto"
                                />
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Modal for Enlarged Image */}
                {selectedImage && (
                    <div
                        className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-75"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Selected post"
                                className="rounded-lg max-w-full max-h-screen"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="top-2 right-2 absolute text-3xl text-white"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}

                {/* Videos Section */}
                <div className="mt-10">
                    <h2 className="mb-6 font-medium text-white text-xl">Featured Videos</h2>
                    <ul className="gap-6 grid grid-cols-3">
                        {videoPosts.map((video, index) => (
                            <li key={index} className="shadow-lg rounded-md overflow-hidden">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-48"
                                ></iframe>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <br />

            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Gallery;
