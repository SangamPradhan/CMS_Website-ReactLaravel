import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    // Function to handle user greeting
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // Function to handle FAQs dynamically
    const handleFAQResponse = (message) => {
        const botMessage = createChatBotMessage(message);

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // Passing actions to children
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleFAQResponse,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;
