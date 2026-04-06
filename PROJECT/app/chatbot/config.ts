import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "MediBot",
  initialMessages: [createChatBotMessage("Hi! I'm MediBot. How can I help you with your medical expenses today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    userMessageBox: {
      backgroundColor: "#e3f2fd",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;