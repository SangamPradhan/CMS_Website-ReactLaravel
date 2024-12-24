import Layout from "@/Layouts/layout";
import Footer from "../components/Footer/Footer.jsx"; // Adjust the path based on your project structure

const HomeEvents = ({ events }) => {
    return (
        <>
            <Layout />
            {/* Recent Events Section */}
            <div className="bg-gray-950 px-4 py-10 text-white">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-4 ml-4 font-bold text-2xl text-center">Recent Event Updates</h2>
                    <p className="mb-8 ml-4 text-center text-gray-400">Check out the upcoming and past events</p>
                    <ul className="space-y-8">
                        {events.map((event) => (
                            <li
                                key={event.id}
                                className="flex md:flex-row flex-col items-start bg-gray-800 shadow-lg mx-auto rounded-lg max-w-[90%] overflow-hidden"
                            >
                                {/* Image Section */}
                                <div
                                    className="flex-shrink-0 w-full md:w-1/3"
                                    style={{ height: "300px", maxWidth: "300px", minWidth: "250px" }}
                                >
                                    <img
                                        src={`/storage/${event.photo}`}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Section */}
                                <div
                                    className="flex flex-col flex-1 justify-between p-4"
                                    style={{ minHeight: "300px", maxHeight: "300px" }}
                                >
                                    {/* Badge */}
                                    <span
                                        className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white"
                                        style={{ maxWidth: '15%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                    >
                                        {event.short_tips}
                                    </span>


                                    {/* Title */}
                                    <h3 className="mt-3 font-bold text-4xl hover:text-blue-500 cursor-pointer">
                                        {event.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 text-gray-400 text-lg">{event.short_description}</p>

                                    <div className="flex justify-between items-center mt-4">
                                        {/* Tags */}
                                        <div className="space-x-2">
                                            #{event.hashtags}
                                        </div>
                                        {/* Date */}
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <span className="mr-1 text-lg material-icons">Date:</span>
                                            {event.date}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Pagination */}
                    <div className="flex justify-center items-center space-x-3 mt-8">
                        <button className="flex items-center text-gray-400 hover:text-white">
                            <span className="material-icons">Previous</span>
                        </button>
                        <button className="bg-blue-600 px-3 py-1 rounded-full text-white">
                            1
                        </button>
                        <button className="text-gray-400 hover:text-white">2</button>
                        <button className="text-gray-400 hover:text-white">3</button>
                        <span className="text-gray-400">...</span>
                        <button className="flex items-center text-gray-400 hover:text-white">
                            Next <span className="material-icons"></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
};

export default HomeEvents;



// <span className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white">
// {event.short_tips}
// </span>
