import { useChatModal } from '@/contexts/ChatContext';
import ChatModal from './ChatModal';

const GlobalChatModal = () => {
  const { isOpen, chatData, closeChat } = useChatModal();

  return (
    <ChatModal
      isOpen={isOpen}
      onClose={closeChat}
      user={chatData.user}
      listing={chatData.listing}
    />
  );
};

export default GlobalChatModal;