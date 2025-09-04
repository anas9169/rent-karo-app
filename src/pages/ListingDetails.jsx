import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Star, Heart, Share2, Shield, MessageCircle, ArrowLeft } from 'lucide-react';
import { useChatModal } from '@/contexts/ChatContext';
import { getListingById } from '@/data/sampleListings';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useToast } from '@/hooks/use-toast';
import ImageGalleryModal from '@/components/ImageGalleryModal';

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openChat } = useChatModal();
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Get listing data based on ID
  const listing = getListingById(id);

  // If listing not found, show error
  if (!listing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
          <Button onClick={() => navigate('/')}>Go back to home</Button>
        </div>
      </div>
    );
  }

  const calculateTotal = () => {
    if (!selectedDate || !returnDate) return 0;
    const start = new Date(selectedDate);
    const end = new Date(returnDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days > 0 ? days * listing.price : 0;
  };

  const handleBookingRequest = () => {
    openChat(listing.owner, listing);
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: listing.title,
          text: `Check out this ${listing.title} for rent`,
          url: url
        });
      } catch (error) {
        // Fallback to clipboard if user cancels share
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Link copied!",
        description: "Listing link has been copied to clipboard",
      });
    }).catch(() => {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually",
        variant: "destructive",
      });
    });
  };

  const handleSaveListing = () => {
    const listingData = {
      id: listing.id,
      image: listing.images[0],
      title: listing.title,
      city: listing.city,
      price: listing.price,
      rating: listing.rating,
      reviewCount: listing.reviewCount,
      category: listing.category
    };

    if (isFavorite(listing.id)) {
      removeFromFavorites(listing.id);
      toast({
        title: "Removed from favorites",
        description: "Item has been removed from your favorites",
      });
    } else {
      addToFavorites(listingData);
      toast({
        title: "Added to favorites",
        description: "Item has been saved to your favorites",
      });
    }
  };

  const openImageModal = (index) => {
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to search
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <img 
                  src={listing.images[0]} 
                  alt={listing.title}
                  className="w-full h-96 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImageModal(0)}
                />
              </div>
              {listing.images.slice(1).map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${listing.title} ${index + 2}`}
                  className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImageModal(index + 1)}
                />
              ))}
            </div>

            {/* Title and Actions */}
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{listing.category}</Badge>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{listing.city}</span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{listing.title}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{listing.rating}</span>
                    <span className="text-muted-foreground ml-1">({listing.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleSaveListing}
                  className={isFavorite(listing.id) ? 'text-red-500 border-red-500' : ''}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFavorite(listing.id) ? 'fill-current' : ''}`} />
                  {isFavorite(listing.id) ? 'Saved' : 'Save'}
                </Button>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{listing.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold mb-3">What's included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {listing.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Shield className="w-4 h-4 text-primary mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold mb-4">Meet your host</h2>
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={listing.owner.avatar} />
                  <AvatarFallback>{listing.owner.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{listing.owner.name}</h3>
                    {listing.owner.verified && (
                      <Badge variant="outline" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{listing.owner.rating} ({listing.owner.reviewCount} reviews)</span>
                    </div>
                    <span>Joined {listing.owner.joinedDate}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => openChat(listing.owner, listing)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact host
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card p-6 rounded-lg border border-border shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary">₹{listing.price}</div>
                  <div className="text-muted-foreground">per day</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Pickup Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="date"
                        className="pl-10"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Return Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="date"
                        className="pl-10"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {selectedDate && returnDate && (
                  <div className="bg-muted p-4 rounded-lg mb-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>₹{listing.price} × {Math.ceil((new Date(returnDate) - new Date(selectedDate)) / (1000 * 60 * 60 * 24))} days</span>
                      <span>₹{calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Security deposit</span>
                      <span>₹{listing.deposit}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{calculateTotal() + listing.deposit}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Security deposit will be refunded after return
                    </p>
                  </div>
                )}

                <Button 
                  className="w-full btn-hero"
                  onClick={handleBookingRequest}
                  disabled={!selectedDate || !returnDate}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Owner
                </Button>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{listing.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    <span>Connect directly with the owner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        images={listing.images}
        title={listing.title}
        currentIndex={selectedImageIndex}
      />
    </div>
  );
};

export default ListingDetails;