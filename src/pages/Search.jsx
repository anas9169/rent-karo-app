import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ListingCard from '@/components/ListingCard';
import SearchInput from '@/components/SearchInput';
import { Search, Filter, MapPin, Calendar } from 'lucide-react';
import AdBanner from '@/components/AdBanner';
import { getAllListings } from '@/data/sampleListings';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get('category');
  const initialSearchData = location.state || { what: '', where: '', dates: '' };
  
  const [searchData, setSearchData] = useState(initialSearchData);
  const [filters, setFilters] = useState({
    category: categoryFromUrl || 'all',
    priceRange: 'all',
    sortBy: 'relevance'
  });

  // Get all listings from sample data
  const allListings = getAllListings().map(listing => ({
    id: listing.id,
    image: listing.images[0],
    title: listing.title,
    city: listing.city,
    price: listing.price,
    rating: listing.rating,
    reviewCount: listing.reviewCount,
    category: listing.category
  }));

  const filteredListings = useMemo(() => {
    let filtered = allListings;

    // Filter by search terms
    if (searchData.what) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchData.what.toLowerCase()) ||
        item.category.toLowerCase().includes(searchData.what.toLowerCase())
      );
    }

    if (searchData.where) {
      filtered = filtered.filter(item => 
        item.city.toLowerCase().includes(searchData.where.toLowerCase())
      );
    }

    // Filter by category - handle both category ID and name matching
    if (filters.category !== 'all') {
      filtered = filtered.filter(item => {
        const categoryMatch = 
          item.category.toLowerCase() === filters.category.toLowerCase() ||
          item.category.toLowerCase().includes(filters.category.toLowerCase()) ||
          // Handle URL encoded categories like "baby%20%26%20kids" -> "baby-kids"
          item.category.replace(/[-\s&]/g, '').toLowerCase() === filters.category.replace(/[-\s%20%26]/g, '').toLowerCase() ||
          // Handle direct matches for baby-kids vs baby & kids
          (filters.category.includes('baby') && item.category === 'baby-kids') ||
          (filters.category.includes('home') && item.category === 'home-garden') ||
          (filters.category.includes('tool') && item.category === 'tools') ||
          (filters.category.includes('music') && item.category === 'music') ||
          (filters.category.includes('fitness') && item.category === 'fitness');
        return categoryMatch;
      });
    }

    // Filter by price range
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(item => 
        item.price >= min && (max ? item.price <= max : true)
      );
    }

    // Sort results
    if (filters.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [searchData, filters]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality is handled by the filtered listings
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      {/* Search Header */}
      <div className="bg-background border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <form onSubmit={handleSearch} className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
              <SearchInput
                type="what"
                placeholder="What are you looking for?"
                value={searchData.what}
                onChange={(e) => setSearchData({...searchData, what: e.target.value})}
                icon={Search}
              />
              
              <SearchInput
                type="where"
                placeholder="Where?"
                value={searchData.where}
                onChange={(e) => setSearchData({...searchData, where: e.target.value})}
                icon={MapPin}
              />
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-10"
                  value={searchData.dates}
                  onChange={(e) => setSearchData({...searchData, dates: e.target.value})}
                />
              </div>
            </div>
            
            <Button type="submit" className="lg:w-auto btn-animated press-feedback">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-card p-4 rounded-lg border border-border">
              <h3 className="font-semibold text-card-foreground mb-4 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                      <SelectContent>
                       <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="vehicles">Vehicles</SelectItem>
                        <SelectItem value="home-garden">Home & Garden</SelectItem>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="music">Musical Instruments</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="fitness">Sports & Fitness</SelectItem>
                        <SelectItem value="baby-kids">Baby & Kids</SelectItem>
                        <SelectItem value="tools">Tools & Equipment</SelectItem>
                     </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <Select value={filters.priceRange} onValueChange={(value) => setFilters({...filters, priceRange: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="0-1000">₹0 - ₹1,000</SelectItem>
                      <SelectItem value="1000-3000">₹1,000 - ₹3,000</SelectItem>
                      <SelectItem value="3000-5000">₹3,000 - ₹5,000</SelectItem>
                      <SelectItem value="5000">₹5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Sort By</label>
                  <Select value={filters.sortBy} onValueChange={(value) => setFilters({...filters, sortBy: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {filteredListings.length} items found
              </h2>
            </div>

            <AdBanner position="top" className="mb-6" />

            {filteredListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredListings.map((listing, index) => (
                  <div key={listing.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ListingCard {...listing} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;