import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./ActionProvider.jsx"; // Correct relative path
import Config from "./Config.jsx"; // Correct relative path
import MessageParser from "./MessageParser.jsx"; // Correct relative path

const ChatBotComponent = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <div className="relative">
            {/* Chatbot Icon */}
            <button
                className="right-5 bottom-5 z-50 fixed flex justify-center items-center bg-blue-600 hover:bg-blue-700 shadow-md rounded-full w-14 h-14 text-white focus:outline-none"
                onClick={toggleChatbot}
            >
                💬
            </button>

            {/* Chatbot Window */}
            {showChatbot && (
                <div className="right-5 bottom-20 z-50 fixed" >
                    <Chatbot
                        config={Config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        style={{ width: '400px', height: '450px' }}
                    />
                </div>
            )}
        </div>
    );
};

export default ChatBotComponent;
