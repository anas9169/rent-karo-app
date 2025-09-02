import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ListingCard from '@/components/ListingCard';
import SearchInput from '@/components/SearchInput';
import { Search, Filter, MapPin, Calendar } from 'lucide-react';
import AdBanner from '@/components/AdBanner';

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

  // Sample listings data
  const allListings = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4febbf25?w=400&h=300&fit=crop',
      title: 'Canon EOS R5 Professional Camera',
      city: 'Mumbai',
      price: 2500,
      rating: 4.9,
      reviewCount: 127,
      category: 'Camera'
    },
    {
      id: 2, 
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
      title: 'Professional Drill Set with Accessories',
      city: 'Delhi',
      price: 800,
      rating: 4.7,
      reviewCount: 89,
      category: 'Tools'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110?w=400&h=300&fit=crop',
      title: 'BMW 3 Series for Weekend Getaways',
      city: 'Bangalore',
      price: 4200,
      rating: 4.8,
      reviewCount: 156,
      category: 'Vehicle'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
      title: 'MacBook Pro 16" for Creative Work',
      city: 'Mumbai',
      price: 1500,
      rating: 4.6,
      reviewCount: 73,
      category: 'Electronics'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
      title: 'DJ Equipment Set with Speakers',
      city: 'Delhi',
      price: 3500,
      rating: 4.8,
      reviewCount: 92,
      category: 'Party'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop',
      title: 'Honda City - Perfect for City Rides',
      city: 'Pune',
      price: 2800,
      rating: 4.5,
      reviewCount: 134,
      category: 'Vehicle'
    }
  ];

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

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(item => 
        item.category.toLowerCase() === filters.category.toLowerCase()
      );
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
      <div className="bg-white border-b border-border sticky top-16 z-40">
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
                       <SelectItem value="camera">Camera</SelectItem>
                       <SelectItem value="tools">Tools</SelectItem>
                       <SelectItem value="electronics">Electronics</SelectItem>
                       <SelectItem value="vehicle">Vehicle</SelectItem>
                       <SelectItem value="party">Party</SelectItem>
                       <SelectItem value="home & garden">Home & Garden</SelectItem>
                       <SelectItem value="photography">Photography</SelectItem>
                       <SelectItem value="musical instruments">Musical Instruments</SelectItem>
                       <SelectItem value="gaming">Gaming</SelectItem>
                       <SelectItem value="sports & fitness">Sports & Fitness</SelectItem>
                       <SelectItem value="baby & kids">Baby & Kids</SelectItem>
                       <SelectItem value="tools & equipment">Tools & Equipment</SelectItem>
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