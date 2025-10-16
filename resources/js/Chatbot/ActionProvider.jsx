// import React from 'react';

// const ActionProvider = ({ createChatBotMessage, setState, children }) => {
//     // Function to handle user greeting
//     const handleHello = () => {
//         const botMessage = createChatBotMessage('Hello. Nice to meet you.');

//         setState((prev) => ({
//             ...prev,
//             messages: [...prev.messages, botMessage],
//         }));
//     };

//     //handle user message for FAQs
//     const handleUserMessage = async (message) => {
//         const botMessage = createChatBotMessage("Thinking...");
//         setState(prev => ({
//             ...prev,
//             messages: [...prev.messages, botMessage],
//         }));

//         try {
//             // Always send the user's message to the backend
//             const response = await fetch("http://127.0.0.1:8000/api/chat", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ message }),
//             });

//             const data = await response.json();

//             // Show Gemini's reply
//             const botMessage = createChatBotMessage(data.reply);
//             setState((prev) => ({
//                 ...prev,
//                 messages: [...prev.messages, botMessage],
//             }));
//         } catch (error) {
//             console.error("Error:", error);
//             const botMessage = createChatBotMessage(
//                 "Oops! Something went wrong connecting to AI."
//             );
//             setState((prev) => ({
//                 ...prev,
//                 messages: [...prev.messages, botMessage],
//             }));
//         }
//     };


//     // Function to handle FAQs dynamically
//     const handleFAQResponse = (message) => {
//         const botMessage = createChatBotMessage(message);

//         setState((prev) => ({
//             ...prev,
//             messages: [...prev.messages, botMessage],
//         }));
//     };

//     // Passing actions to children
//     return (
//         <div>
//             {React.Children.map(children, (child) => {
//                 return React.cloneElement(child, {
//                     actions: {
//                         handleHello,
//                         handleFAQResponse,
//                     },
//                 });
//             })}
//         </div>
//     );
// };

// export default ActionProvider;



import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    // ✅ 1. Handle sending user messages to your Laravel backend (Gemini)
    const handleUserMessage = async (message) => {
        // Temporary "thinking" message
        const thinkingMessage = createChatBotMessage("Thinking...");
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, thinkingMessage],
        }));

        try {
            // Always send the user's message to the backend
            const response = await fetch("http://127.0.0.1:8000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();

            // Show Gemini's reply
            const botMessage = createChatBotMessage(data.reply);
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        } catch (error) {
            console.error("Error:", error);
            const botMessage = createChatBotMessage(
                "Oops! Something went wrong connecting to AI."
            );
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        }
    };

    // ✅ 2. Expose the function to children (the chatbot)
    return (
        <div>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    actions: {
                        handleUserMessage, // main function for replies
                    },
                })
            )}
        </div>
    );
};

export default ActionProvider;
