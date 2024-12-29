import Layout from "@/Layouts/layout";
import { useState } from "react";
import Footer from '../components/Footer/Footer.jsx'; // Assuming the Footer component is in this directory

const Gallery = ({ photos, videos }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <Layout />
            {/* Dark Themed Section */}
            <div className="bg-white-100 p-6 text-center">
                {/* Logo */}
                <a href="#" className="block mb-4 font-bold text-2xl text-black xl:text-2xl">
                    Gallery
                </a>

                {/* Description */}
                <p className="mb-6 font-medium text-black text-lg">Following Event Pictures</p>

                {/* Instagram Post Grid (Photos) */}
                <ul className="gap-10 grid grid-cols-4" style={{ gap: "12px" }}>
                    {Array.isArray(photos) && photos.length > 0 ? (
                        photos.map((post, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => setSelectedImage(post.photo)} // Display photo on click
                                    className="block focus:outline-none"
                                >
                                    <img
                                        src={`/storage/${post.photo}`}
                                        alt={`Insta post ${index + 1}`}
                                        className="shadow-lg rounded-md w-full h-auto"
                                    />
                                </button>
                                <p className="flex justify-center items-center p-4 font-medium text-black text-center">{post.title}</p>
                            </li>
                        ))
                    ) : (
                        <p>No photos available</p>
                    )}
                </ul>

                {/* Modal for Enlarged Image */}
                {/* Modal for Enlarged Image */}
                {selectedImage && (
                    <div
                        className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-75"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative">
                            <img
                                src={`storage/${selectedImage}`}
                                alt="Selected post"
                                className="rounded-lg w-3/4 max-w-full h-auto max-h-screen" // Increased size (3/4 of screen width)
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
                    <h2 className="mb-6 font-medium text-blackt-xl">Featured Videos</h2>
                    {Array.isArray(videos) && videos.length > 0 ? (
                        <ul className="gap-6 grid grid-cols-3">
                            {videos.map((video, index) => (
                                <li key={index} className="shadow-lg rounded-md overflow-hidden">
                                    <iframe
                                        src={video.video} // Video URL
                                        title={video.title || `Video ${index + 1}`} // Title fallback if not provided
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-48"
                                    ></iframe>
                                    <p className="p-4 font-medium text-black text-lg">{video.title}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No videos available</p>
                    )}
                </div>
            </div>
            <br />

            {/* Footer Section */}
            <Footer />
        </>
    );
};

export default Gallery;
