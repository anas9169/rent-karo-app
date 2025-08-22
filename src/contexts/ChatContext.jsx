import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChatModal = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatModal must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatData, setChatData] = useState({
    user: null,
    listing: null
  });

  const openChat = (user, listing = null) => {
    setChatData({ user, listing });
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setChatData({ user: null, listing: null });
  };

  const value = {
    isOpen,
    chatData,
    openChat,
    closeChat
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};