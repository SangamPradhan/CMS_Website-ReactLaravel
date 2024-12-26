import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

const SelectProject = ({ project, onClose, reviews = [] }) => {

    useEffect(() => {
        document.body.style.overflow = project ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [project]);

    const [activeTab, setActiveTab] = useState('reviews');
    const [hovered, setHovered] = useState(0);
    const [data, setData] = useState({ rating: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('projects.review.store'), {
            onSuccess: () => {
                reset();
                setActiveTab('reviews'); // Redirect to reviews tab after submission
                alert('Review submitted successfully!');
            },
            onError: () => {
                alert('Failed to submit the review. Please try again.');
            }
        });
    };

    if (!project) return null;

    return (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative bg-white shadow-lg p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto">
                {/* <button
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('reviews');
                        setData({ rating: 0 });
                        onClose();
                    }}
                    className="top-2 right-2 absolute font-semibold text-gray-700 text-xl"
                >
                    X
                </button> */}

                <RiCloseLargeLine
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveTab('reviews');
                        setData({ rating: 0 });
                        onClose();
                    }}
                    className="top-2 right-2 absolute font-semibold text-gray-700 text-xl"
                    style={{ cursor: 'pointer' }}
                />

                <div className="mb-4">
                    <img
                        src={`/storage/${project.image}`}
                        alt={project.title}
                        className="rounded-lg w-full h-60 object-cover"
                    />
                </div>

                <h3 className="font-bold text-2xl text-gray-800">{project.title}</h3>
                <p className="mt-2 text-orange-500 text-sm">{project.subtitle}</p>
                <p className="mt-4 text-base text-gray-700 leading-relaxed">{project.description}</p>
                <p className="mt-4 text-gray-500 text-sm">Published Date: {project.date}</p>

                <div className="mt-6">
                    <div className="flex justify-around w-full text-center">
                        <button
                            className={`px-4 py-2 focus:outline-none ${activeTab === 'reviews' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Reviews
                        </button>
                        <button
                            className={`px-4 py-2 focus:outline-none ${activeTab === 'add-review' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('add-review')}
                        >
                            Add a Review
                        </button>
                    </div>

                    {activeTab === 'reviews' && (
                        <div className="mt-4">
                            {reviews.length > 0 ? (
                                <ul className="space-y-4">
                                    {reviews.map((review, index) => (
                                        <li key={index} className="bg-gray-100 p-4 rounded-lg">
                                            <div className="flex justify-between items-center">
                                                <h5 className="font-semibold text-gray-800">{review.name}</h5>
                                                <div className="flex items-center">
                                                    {Array.from({ length: review.stars }).map((_, i) => (
                                                        <FaStar key={i} className="text-yellow-500" />
                                                    ))}
                                                    {Array.from({ length: 5 - review.stars }).map((_, i) => (
                                                        <FaStar key={i} className="text-gray-300" />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="mt-2 text-gray-600">{review.comment}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-4 text-gray-500">No reviews available for this project.</p>
                            )}
                        </div>
                    )}

                    {activeTab === 'add-review' && (
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="border-gray-300 p-2 border rounded-md w-full"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="border-gray-300 p-2 border rounded-md w-full"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-semibold text-gray-700">Comment</label>
                                <textarea
                                    className="border-gray-300 p-2 border rounded-md w-full"
                                    placeholder="Your review"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="rating" className="block mb-2 font-medium text-gray-700">
                                    Ratings
                                </label>

                                <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill={star <= (hovered || data.rating) ? "gold" : "none"}
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-yellow-400 cursor-pointer"
                                            onMouseEnter={() => setHovered(star)}
                                            onMouseLeave={() => setHovered(0)}
                                            onClick={() => setData(prev => ({ ...prev, rating: star }))}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 17.27l5.18 3.03-1.64-6.03 4.46-3.89-6.07-.26L12 2 9.07 6.11l-6.07.26 4.46 3.89-1.64 6.03L12 17.27z"
                                            />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 mt-4 px-4 py-2 rounded-md text-white"
                            >
                                Submit Review
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectProject;


{/* <h3 className="font-bold text-2xl text-gray-800">{project.title}</h3>
                <p className="mt-2 text-orange-500 text-sm">{project.subtitle}</p>
                <p className="mt-4 text-base text-gray-700 leading-relaxed">{project.description}</p>
                <p className="mt-4 text-gray-500 text-sm">Published Date: {project.date}</p>
                <div className="flex justify-around w-full text-center">
                */}
