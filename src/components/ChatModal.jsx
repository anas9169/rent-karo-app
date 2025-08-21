import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, X } from 'lucide-react';

const ChatModal = ({ isOpen, onClose, user, listing }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      senderId: 'other',
      text: `Hi! I'm interested in renting your ${listing?.title}. Is it available for the dates I mentioned?`,
      timestamp: new Date(Date.now() - 300000),
      senderName: user?.name || 'User'
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      senderId: 'me',
      text: message,
      timestamp: new Date(),
      senderName: 'You'
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate response
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        senderId: 'other',
        text: 'Thanks for your interest! Yes, it should be available. Let me check the exact dates and get back to you.',
        timestamp: new Date(),
        senderName: user?.name || 'User'
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[500px] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className="text-base">{user?.name || 'Chat'}</DialogTitle>
                <DialogDescription className="text-sm">
                  About {listing?.title || 'listing'}
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 px-1">
          <div className="space-y-4 pb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    msg.senderId === 'me'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${
                    msg.senderId === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground/70'
                  }`}>
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex-shrink-0 flex items-center space-x-2 pt-4 border-t">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} size="sm">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;