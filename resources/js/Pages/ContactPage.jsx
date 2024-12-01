import Layout from '@/Layouts/layout';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; // Import necessary icons
import Footer from '../components/Footer/Footer';
// Assuming Footer component is in the same directory

const ContactPage = () => {
    return (
        <>
        <Layout/>
            <section className="mx-auto my-8 px-4 container">
                <h2 className="mb-8 font-semibold text-3xl text-center">Contact Us</h2>

                <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                    {/* Contact Form */}
                    <div className="space-y-4 form-container">
                        <form action="#" method="POST" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium text-gray-700 text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="border-gray-300 p-2 border rounded-lg w-full text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-sm">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="border-gray-300 p-2 border rounded-lg w-full text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 text-sm">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Enter the subject"
                                    className="border-gray-300 p-2 border rounded-lg w-full text-sm"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium text-gray-700 text-sm">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Enter your message"
                                    rows="4"
                                    className="border-gray-300 p-2 border rounded-lg w-full text-sm"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg w-full font-bold text-white transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="ml-auto p-7 max-w-md text-gray-700 text-sm contact-info">
                        <h3 className="mb-4 font-semibold text-2xl">Contact Info</h3>
                        <p className="flex items-center text-base">
                            <FaEnvelope className="mr-2 text-lg" />
                            {/* <strong>Email: </strong> */}
                            contact@company.com
                        </p>
                        <p className="flex items-center text-base">
                            <FaPhoneAlt className="mr-2 text-lg" />
                            {/* <strong>Phone: </strong> */}
                            +1 333 4040 5566
                        </p>
                        <p className="flex items-center text-base"> <FaMapMarkerAlt className="mr-2 text-lg" />
                        {/* <strong>Address: </strong> */}
                            212 Barrington New York, ABC 10001, United States
                        </p>


                        <div className="mt-8 follow-us">
                            <h4 className="mb-4 font-semibold text-lg">Follow Us On</h4>
                            <div className="flex justify-start gap-6">
                                <a href="#" className="text-3xl hover:text-blue-500 duration-300">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-3xl hover:text-blue-500 duration-300">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="text-3xl hover:text-blue-500 duration-300">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
};

export default ContactPage;
