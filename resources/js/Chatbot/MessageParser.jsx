import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        message = message.toLowerCase();


        if (message.trim() !== "") {
            actions.handleUserMessage(message);
        }

    };

    return (
        <div>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { parse })
            )}
        </div>
    );
};

export default MessageParser;
