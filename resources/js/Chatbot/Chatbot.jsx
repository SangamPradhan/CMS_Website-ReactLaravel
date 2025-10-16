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
                className="right-5 bottom-5 z-50 fixed flex justify-center items-center bg-blue-600 hover:bg-blue-700 shadow-md rounded-full focus:outline-none w-14 h-14 text-white"
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
// import { useRef, useState } from "react";

// const ChatBot = () => {
//     const [messages, setMessages] = useState([
//         { sender: "bot", text: "AI Solutions at your service! How can I assist you today?" },
//     ]);
//     const [input, setInput] = useState("");
//     const chatEndRef = useRef(null);

//     const sendMessage = async () => {
//         if (!input.trim()) return;

//         const newMessages = [...messages, { sender: "user", text: input }];
//         setMessages(newMessages);
//         setInput("");

//         try {
//             const res = await fetch("http://localhost:8000/api/chatbot", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ message: input }),
//             });
//             const data = await res.json();

//             const updatedMessages = [...newMessages, { sender: "bot", text: data.reply }];
//             setMessages(updatedMessages);

//             // Play voice
//             if (data.audio) {
//                 const audio = new Audio(`data:audio/mpeg;base64,${data.audio}`);
//                 audio.play();
//             }

//             chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };

//     return (
//         <div className="right-6 bottom-6 z-50 fixed">
//             <div className="bg-white shadow-2xl border border-blue-300 rounded-2xl w-96 overflow-hidden">
//                 {/* Header */}
//                 <div className="bg-blue-600 p-4 font-semibold text-white text-center">
//                     💡 AI Solutions Chatbot
//                 </div>

//                 {/* Messages */}
//                 <div className="space-y-3 bg-blue-50 p-3 h-96 overflow-y-auto">
//                     {messages.map((msg, index) => (
//                         <div
//                             key={index}
//                             className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//                         >
//                             <div
//                                 className={`px-4 py-2 rounded-2xl max-w-[75%] ${msg.sender === "user"
//                                         ? "bg-blue-500 text-white"
//                                         : "bg-white text-gray-800 border border-blue-100"
//                                     }`}
//                             >
//                                 {msg.text}
//                             </div>
//                         </div>
//                     ))}
//                     <div ref={chatEndRef} />
//                 </div>

//                 {/* Input */}
//                 <div className="flex items-center bg-white border-t border-blue-200">
//                     <input
//                         className="flex-grow p-2 rounded-bl-2xl outline-none"
//                         placeholder="Write your message here..."
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                     />
//                     <button
//                         onClick={sendMessage}
//                         className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-br-2xl text-white transition"
//                     >
//                         ➤
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChatBot;
