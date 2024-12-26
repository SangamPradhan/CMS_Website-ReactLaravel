import Layout from "@/Layouts/layout";
import Footer from "../components/Footer/Footer.jsx";

const HomeEvents = ({ events }) => {
    // Default to empty structure if events are undefined
    const eventList = events?.data || [];
    const paginationLinks = events?.links || [];

    return (
        <>
            <Layout />
            <div className="bg-white-100 px-4 py-10 text-black">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-4 ml-4 font-bold text-2xl text-center">Recent Event Updates</h2>
                    <p className="mb-8 ml-4 text-center text-gray-600">Check out the upcoming and past events</p>
                    <ul className="space-y-8">
                        {eventList.length > 0 ? (
                            eventList.map((event) => (
                                <li
                                    key={event.id}
                                    className="flex md:flex-row flex-col items-start border-gray-200 bg-gray-100 shadow-lg mx-auto border rounded-lg max-w-[90%] overflow-hidden"
                                >
                                    <div
                                        className="flex-shrink-0 w-full md:w-1/3"
                                        style={{ height: "300px", maxWidth: "300px", minWidth: "250px" }}
                                    >
                                        <img
                                            src={`/storage/${event.photo}`}
                                            alt={event.title}
                                            className="rounded-md w-full h-full object-cover"
                                        />
                                    </div>
                                    <div
                                        className="flex flex-col flex-1 justify-between p-4"
                                        style={{ minHeight: "300px", maxHeight: "300px" }}
                                    >
                                        <span
                                            className="bg-blue-600 px-3 py-1 rounded-full text-sm text-white"
                                            style={{
                                                maxWidth: "15%",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {event.short_tips}
                                        </span>
                                        <h3 className="mt-0.5 font-bold text-4xl hover:text-blue-600 cursor-pointer">
                                            {event.title}
                                        </h3>
                                        <p className="mt-2 text-gray-600 text-lg">{event.short_description}</p>
                                        <div className="flex justify-between items-center mt-4">
                                            <div className="space-x-2 text-gray-700">#{event.hashtags}</div>
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <span className="mr-1 text-lg material-icons">Date:</span>
                                                {event.date}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">No events available at the moment.</p>
                        )}
                    </ul>

                    {/* Pagination */}
                    {paginationLinks.length > 0 && (
                        <div className="flex justify-center items-center space-x-3 mt-8">
                            {paginationLinks.map((link, index) => (
                                <button
                                    key={index}
                                    className={`px-3 py-1 rounded-full ${
                                        link.active
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-600 hover:text-blue-600"
                                    }`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                    onClick={() => {
                                        if (link.url) window.location.href = link.url;
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-gray-50">
                <Footer />
            </div>
        </>
    );
};

export default HomeEvents;
