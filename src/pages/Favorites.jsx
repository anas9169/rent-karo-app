import { useState } from 'react';
import { Heart, Filter, Grid, List, Search, Star, MapPin, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ListingCard from '@/components/ListingCard';

const Favorites = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample favorite listings
  const favoriteListings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4febbf25?w=400&h=300&fit=crop',
      title: 'Canon EOS R5 Professional Camera',
      city: 'Mumbai',
      price: 2500,
      rating: 4.9,
      reviewCount: 127,
      category: 'Camera',
      savedDate: '2024-01-15'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
      title: 'Professional Drill Set with Accessories',
      city: 'Delhi',
      price: 800,
      rating: 4.7,
      reviewCount: 89,
      category: 'Tools',
      savedDate: '2024-01-12'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110?w=400&h=300&fit=crop',
      title: 'BMW 3 Series for Weekend Getaways',
      city: 'Bangalore',
      price: 4200,
      rating: 4.8,
      reviewCount: 156,
      category: 'Vehicle',
      savedDate: '2024-01-10'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      title: 'Nike Air Max Running Shoes',
      city: 'Chennai',
      price: 200,
      rating: 4.6,
      reviewCount: 43,
      category: 'Sports',
      savedDate: '2024-01-08'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      title: 'DJ Headphones & Mixer Setup',
      city: 'Pune',
      price: 1500,
      rating: 4.8,
      reviewCount: 92,
      category: 'Electronics',
      savedDate: '2024-01-05'
    }
  ];

  const categories = ['all', 'Camera', 'Tools', 'Vehicle', 'Sports', 'Electronics'];

  const filteredListings = favoriteListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || listing.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const removeFavorite = (id) => {
    // Handle removing from favorites
    console.log('Remove favorite:', id);
  };

  const clearAllFavorites = () => {
    // Handle clearing all favorites
    console.log('Clear all favorites');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Your Favorites</h1>
          </div>
          <p className="text-muted-foreground">
            Items you've saved for later. {favoriteListings.length} item{favoriteListings.length !== 1 ? 's' : ''} saved.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-card border border-border rounded-lg p-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search your favorites..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md text-foreground bg-background"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Mode and Actions */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="p-2"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              
              {favoriteListings.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllFavorites}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredListings.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {favoriteListings.length === 0 ? 'No favorites yet' : 'No results found'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {favoriteListings.length === 0 
                ? 'Start browsing and save items you like by clicking the heart icon.'
                : 'Try adjusting your search or filter criteria.'
              }
            </p>
            <Button onClick={() => window.location.href = '/search'}>
              Browse Items
            </Button>
          </div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredListings.map((listing) => (
                  <div key={listing.id} className="relative">
                    <ListingCard {...listing} />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFavorite(listing.id)}
                      className="absolute top-2 left-2 p-2 bg-white/90 hover:bg-white rounded-full text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* List View */}
            {viewMode === 'list' && (
              <div className="space-y-4">
                {filteredListings.map((listing) => (
                  <div key={listing.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-card-foreground mb-1 truncate">
                          {listing.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{listing.city}</span>
                          <span className="mx-2">•</span>
                          <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                          <span>{listing.rating} ({listing.reviewCount})</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Saved on {new Date(listing.savedDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary mb-2">₹{listing.price}</div>
                        <div className="text-xs text-muted-foreground mb-3">per day</div>
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => window.location.href = `/listing/${listing.id}`}>
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFavorite(listing.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Tips */}
        {favoriteListings.length > 0 && (
          <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Pro Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Message owners early to check availability for your desired dates</li>
              <li>• Items in your favorites can become unavailable - act fast on items you really want</li>
              <li>• Set up alerts to get notified when similar items become available</li>
              <li>• Compare prices and reviews before making your final decision</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;