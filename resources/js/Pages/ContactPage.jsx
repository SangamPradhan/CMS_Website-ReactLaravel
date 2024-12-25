import Layout from '@/Layouts/layout';
import { useForm } from '@inertiajs/react'; // Import useForm for form handling
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; // Import necessary icons
import Footer from '../components/Footer/Footer';

const ContactPage = () => {
    // Initialize the form data and methods using useForm
    const { data, setData, post, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('contact.store'), {
            onSuccess: () => reset(), // Clears the form on successful submission
        });
    };

    return (
        <>
            <Layout />
            <section className="mx-auto my-8 px-4 container">
                <h2 className="mb-8 font-semibold text-3xl text-center">Contact Us</h2>

                <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                    {/* Contact Form */}
                    <div className="space-y-4 form-container">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium text-gray-700 text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Enter your name"
                                    className="border-gray-300 p-2 border rounded-lg w-full text-sm"
                                />
                                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-sm">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Enter your email"
                                    className="border-gray-300 p-2 border rounded-lg w-full text-sm"
                                />
                                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 text-sm">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    placeholder="Enter the subject"
                                    className="border-gray-300 p-2 border rounded-lg w-full text-sm"
                                />
                                {errors.subject && <div className="text-red-500 text-sm">{errors.subject}</div>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium text-gray-700 text-sm">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Enter your message"
                                    rows="4"
                                    className="border-gray-300 p-2 border rounded-lg w-full text-sm"
                                ></textarea>
                                {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
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
                            contact@company.com
                        </p>
                        <p className="flex items-center text-base">
                            <FaPhoneAlt className="mr-2 text-lg" />
                            +1 333 4040 5566
                        </p>
                        <p className="flex items-center text-base">
                            <FaMapMarkerAlt className="mr-2 text-lg" />
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
