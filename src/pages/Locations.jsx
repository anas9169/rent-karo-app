import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, TrendingUp } from 'lucide-react';

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const locations = [
    {
      id: 'mumbai',
      name: 'Mumbai',
      state: 'Maharashtra',
      itemCount: 1245,
      popular: true,
      image: '/placeholder.svg'
    },
    {
      id: 'delhi',
      name: 'Delhi',
      state: 'Delhi',
      itemCount: 987,
      popular: true,
      image: '/placeholder.svg'
    },
    {
      id: 'bangalore',
      name: 'Bangalore',
      state: 'Karnataka',
      itemCount: 856,
      popular: true,
      image: '/placeholder.svg'
    },
    {
      id: 'pune',
      name: 'Pune',
      state: 'Maharashtra',
      itemCount: 543,
      popular: true,
      image: '/placeholder.svg'
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad',
      state: 'Telangana',
      itemCount: 432,
      popular: true,
      image: '/placeholder.svg'
    },
    {
      id: 'chennai',
      name: 'Chennai',
      state: 'Tamil Nadu',
      itemCount: 398,
      popular: true,
      image: '/placeholder.svg'
    },
    {
      id: 'kolkata',
      name: 'Kolkata',
      state: 'West Bengal',
      itemCount: 234,
      popular: false,
      image: '/placeholder.svg'
    },
    {
      id: 'ahmedabad',
      name: 'Ahmedabad',
      state: 'Gujarat',
      itemCount: 187,
      popular: false,
      image: '/placeholder.svg'
    },
    {
      id: 'jaipur',
      name: 'Jaipur',
      state: 'Rajasthan',
      itemCount: 156,
      popular: false,
      image: '/placeholder.svg'
    },
    {
      id: 'surat',
      name: 'Surat',
      state: 'Gujarat',
      itemCount: 134,
      popular: false,
      image: '/placeholder.svg'
    },
    {
      id: 'lucknow',
      name: 'Lucknow',
      state: 'Uttar Pradesh',
      itemCount: 98,
      popular: false,
      image: '/placeholder.svg'
    },
    {
      id: 'kanpur',
      name: 'Kanpur',
      state: 'Uttar Pradesh',
      itemCount: 76,
      popular: false,
      image: '/placeholder.svg'
    }
  ];

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularLocations = locations.filter(loc => loc.popular);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Browse by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Location</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find rental items in your city or explore what's available nearby
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search cities or states..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>
        </div>

        {/* Popular Locations */}
        {!searchTerm && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <TrendingUp className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Popular Cities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularLocations.map((location) => (
                <Link
                  key={location.id}
                  to={`/search?location=${location.id}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <img 
                      src={location.image} 
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {location.name}
                      </h3>
                      <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {location.state}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {location.itemCount.toLocaleString()} items
                      </span>
                      <span className="text-sm text-primary font-medium group-hover:underline">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Locations */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {searchTerm ? `Search Results (${filteredLocations.length})` : 'All Cities'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredLocations.map((location) => (
              <Link
                key={location.id}
                to={`/search?location=${location.id}`}
                className="group bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-card-foreground group-hover:text-primary transition-colors truncate">
                      {location.name}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {location.state}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {location.itemCount} items
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {filteredLocations.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No locations found matching "{searchTerm}"
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Expanding Nationwide</h3>
            <p className="text-muted-foreground mb-6">
              We're constantly growing our network of cities to serve you better
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">28</div>
                <div className="text-sm text-muted-foreground">States</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;