import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ListingCard from '@/components/ListingCard';
import SearchInput from '@/components/SearchInput';
import { Search, Calendar, MapPin, Camera, Wrench, PartyPopper, Smartphone, Car, Shield, CreditCard, Headphones } from 'lucide-react';
import AdBanner from '@/components/AdBanner';

const Home = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    what: '',
    where: '',
    dates: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search', { state: searchData });
  };

  const categories = [
    { name: 'Cameras', icon: Camera, count: '2.5k+' },
    { name: 'Tools', icon: Wrench, count: '1.8k+' },
    { name: 'Party', icon: PartyPopper, count: '950+' },
    { name: 'Electronics', icon: Smartphone, count: '3.2k+' },
    { name: 'Vehicles', icon: Car, count: '680+' }
  ];

  const trustBadges = [
    { icon: Shield, title: 'Wide Range of Listings', desc: 'Find exactly what you need from our diverse collection' },
    { icon: Headphones, title: 'Easy Communication', desc: 'Direct chat between renters and owners' },
    { icon: Search, title: 'Smart Discovery', desc: 'Find exactly what you need nearby' }
  ];

  // Sample featured listings
  const featuredListings = [
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
    }
  ];

  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Rent anything,
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> anywhere</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From cameras to cars, tools to tech - discover thousands of items available for rent in your city
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">What</label>
                  <SearchInput
                    type="what"
                    placeholder="Camera, car, tools..."
                    className="search-input"
                    value={searchData.what}
                    onChange={(e) => setSearchData({...searchData, what: e.target.value})}
                    icon={Search}
                  />
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">Where</label>
                  <SearchInput
                    type="where"
                    placeholder="Mumbai, Delhi, Bangalore..."
                    className="search-input"
                    value={searchData.where}
                    onChange={(e) => setSearchData({...searchData, where: e.target.value})}
                    icon={MapPin}
                  />
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-foreground mb-2">Dates</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="date"
                      className="search-input pl-10"
                      value={searchData.dates}
                      onChange={(e) => setSearchData({...searchData, dates: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="flex items-end">
                  <Button type="submit" className="btn-hero w-full press-feedback">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{badge.title}</h3>
                <p className="text-muted-foreground">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Categories</h2>
            <p className="text-muted-foreground">Discover what's available near you</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/search?category=${encodeURIComponent(category.name.toLowerCase())}`}
                className="card-hover bg-card p-6 rounded-lg text-center border border-border cursor-pointer interactive-hover group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Listings</h2>
            <p className="text-muted-foreground">Handpicked items from trusted owners</p>
          </div>
          
          {/* Ad Banner */}
          <AdBanner position="top" className="mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Got something to rent out?
          </h2>
            <p className="text-xl text-white/90 mb-8">
              Connect with people who need your items - Rent Karo makes it easy!
            </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold btn-animated press-feedback"
            onClick={() => navigate('/create-listing')}
          >
            List your item
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;