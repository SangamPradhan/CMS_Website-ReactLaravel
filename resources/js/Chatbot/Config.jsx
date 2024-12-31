import { createChatBotMessage } from 'react-chatbot-kit';
import Logo from "../../assets/website/Vector.svg";

const botName = 'AI Solutions';

const config = {
    initialMessages: [createChatBotMessage(` ${botName} at your service! How can I help you today?`)],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#5ccc9d',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
    customComponents: {
        botAvatar: () => (
            <img
                src={Logo}
                alt="bot"
                style={{
                    width: '40px', // Match size to the default avatar
                    height: '40px',
                    borderRadius: '50%', // Make the image circular
                    objectFit: 'contain', // Ensure the image fits well
                    margin: '0 10px', // Add space between the avatar and text
                }}
            />
        ),
    },
};

export default config;


// '#376B7E',
