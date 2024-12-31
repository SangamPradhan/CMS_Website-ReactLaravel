import Layout from "@/Layouts/layout.jsx";
import { useState } from "react";
import ChatBot from "../../../resources/js/Chatbot/Chatbot.jsx";
import BlogsComp from "../../../resources/js/components/Blogs/BlogsComp.jsx";
import BrandsLogo from "../../../resources/js/components/BrandsLogo/BrandsLogo.jsx";
import Footer from "../../../resources/js/components/Footer/Footer.jsx";
import Hero from "../../../resources/js/components/Hero/Hero.jsx";
import Services from "../../../resources/js/components/Services/Services.jsx";
import Testimonial from "../../../resources/js/components/Testimonial/Testimonial.jsx";

const Home = ({ testimonials = [], blogs = [] }) => {
    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <>
            <Layout />
            <Hero />
            <BrandsLogo />
            <Services />
            {/* <div className="right-5 bottom-5 z-50 fixed">
                {showChatbot && (
                    <div className="right-5 bottom-20 fixed bg-white shadow-lg rounded-lg w-96 h-[450px] overflow-hidden">
                        <Chatbot
                            config={config}
                            messageParser={MessageParser}
                            actionProvider={ActionProvider}
                        />
                    </div>
                )}
                <button
                    className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 shadow-md rounded-full w-14 h-14 text-white focus:outline-none"
                    onClick={toggleChatbot}
                >
                    💬
                </button>
            </div> */}
            <ChatBot/>
            <Testimonial testimonials={testimonials} />
            <BlogsComp blogs={blogs} />
            <Footer />
        </>
    );
};

export default Home;
