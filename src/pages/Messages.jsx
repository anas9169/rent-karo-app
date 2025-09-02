import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ChatModal from '@/components/ChatModal';
import FilterModal from '@/components/FilterModal';

const Messages = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [activeFilters, setActiveFilters] = useState(null);

  // Sample conversations data
  const conversations = [
    {
      id: 1,
      user: {
        name: 'Rajesh Kumar',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      listing: {
        title: 'Canon EOS R5 Professional Camera',
        image: 'https://images.unsplash.com/photo-1606983340126-99ab4febbf25?w=60&h=60&fit=crop'
      },
      lastMessage: 'Thanks for your interest! Yes, it should be available. Let me check the exact dates and get back to you.',
      timestamp: new Date(Date.now() - 300000),
      unreadCount: 2,
      isOwner: false
    },
    {
      id: 2,
      user: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&crop=face'
      },
      listing: {
        title: 'MacBook Pro 16" M2',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=60&h=60&fit=crop'
      },
      lastMessage: 'Perfect! I\'ll be there at 10 AM for pickup.',
      timestamp: new Date(Date.now() - 3600000),
      unreadCount: 0,
      isOwner: false
    },
    {
      id: 3,
      user: {
        name: 'Amit Patel',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      listing: {
        title: 'Professional DJ Equipment Set',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=60&h=60&fit=crop'
      },
      lastMessage: 'Hi! I\'m interested in renting your DJ equipment for my event.',
      timestamp: new Date(Date.now() - 7200000),
      unreadCount: 1,
      isOwner: true
    }
  ];

  const filteredConversations = conversations.filter(conv => {
    // Search filter
    const matchesSearch = conv.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.listing.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    // Apply additional filters if active
    if (!activeFilters) return true;
    
    // Unread only filter
    if (activeFilters.unreadOnly && conv.unreadCount === 0) return false;
    
    // Owner chats only filter
    if (activeFilters.ownerChats && !conv.isOwner) return false;
    
    // Timeframe filter
    if (activeFilters.timeframe !== 'all') {
      const now = new Date();
      const messageTime = conv.timestamp;
      const diffHours = (now - messageTime) / (1000 * 60 * 60);
      
      if (activeFilters.timeframe === 'today' && diffHours > 24) return false;
      if (activeFilters.timeframe === 'week' && diffHours > 168) return false;
      if (activeFilters.timeframe === 'month' && diffHours > 720) return false;
    }
    
    return true;
  });

  const formatTime = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const openChat = (conversation) => {
    setSelectedChat({
      name: conversation.user.name,
      avatar: conversation.user.avatar,
      listing: conversation.listing
    });
    setShowChat(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Messages</h1>
          <p className="text-muted-foreground">Manage your conversations with other users</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            variant="outline" 
            className="w-full sm:w-auto"
            onClick={() => setShowFilterModal(true)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
            {activeFilters && <span className="ml-1 bg-primary text-primary-foreground text-xs rounded-full w-2 h-2"></span>}
          </Button>
        </div>

        {/* Conversations List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              All Conversations ({filteredConversations.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredConversations.length > 0 ? (
              <div className="space-y-4">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={() => openChat(conversation)}
                  >
                    {/* User Avatar */}
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={conversation.user.avatar} />
                      <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    {/* Listing Image */}
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={conversation.listing.image}
                        alt={conversation.listing.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Conversation Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm truncate">
                          {conversation.user.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {conversation.isOwner && (
                            <Badge variant="secondary" className="text-xs">Owner</Badge>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {formatTime(conversation.timestamp)}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1 truncate">
                        About: {conversation.listing.title}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                    </div>

                    {/* Unread Badge */}
                    {conversation.unreadCount > 0 && (
                      <Badge variant="destructive" className="text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No conversations found</h3>
                <p className="text-muted-foreground">
                  {searchTerm ? 'Try adjusting your search terms' : 'Start browsing listings to connect with other users'}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Chat Modal */}
        {showChat && selectedChat && (
          <ChatModal
            isOpen={showChat}
            onClose={() => setShowChat(false)}
            user={selectedChat}
            listing={selectedChat.listing}
          />
        )}

        {/* Filter Modal */}
        <FilterModal
          isOpen={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          onApplyFilter={setActiveFilters}
        />
      </div>
    </div>
  );
};

export default Messages;