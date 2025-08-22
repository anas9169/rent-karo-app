import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X } from "lucide-react";

const ChatModal = ({ isOpen, onClose, user, listing }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      senderId: "other",
      text: `Hi! I'm interested in renting your ${
        listing?.title || "item"
      }. Is it available for the dates I mentioned?`,
      timestamp: new Date(Date.now() - 300000),
      senderName: user?.name || "User",
    },
  ]);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      senderId: "me",
      text: message,
      timestamp: new Date(),
      senderName: "You",
    };

    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate response
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        senderId: "other",
        text: "Thanks for your interest! Yes, it should be available. Let me check the exact dates and get back to you.",
        timestamp: new Date(),
        senderName: user?.name || "User",
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md sm:max-w-lg w-full mx-4 h-[500px] sm:h-[600px] flex flex-col p-0">
        <DialogHeader className="flex-shrink-0 p-4 sm:p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="text-xs sm:text-sm">{user?.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <DialogTitle className="text-sm sm:text-base truncate">
                  {user?.name || "Chat"}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm truncate">
                  About {listing?.title || "listing"}
                </DialogDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea
          className="flex-1 px-3 sm:px-4 overflow-y-auto"
          ref={scrollRef}
        >
          <div className="space-y-3 sm:space-y-4 py-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.senderId === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-lg px-3 py-2 text-xs sm:text-sm ${
                    msg.senderId === "me"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <p className="break-words">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.senderId === "me"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground/70"
                    }`}
                  >
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex-shrink-0 flex items-center space-x-2 p-3 sm:p-4 border-t">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="text-sm sm:text-base"
          />
          <Button onClick={handleSendMessage} size="sm" className="h-9 w-9 sm:h-10 sm:w-10 p-0">
            <Send className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;