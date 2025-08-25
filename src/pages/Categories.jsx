import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Car, Home, Laptop, Music, Gamepad2, Dumbbell, Baby, Wrench, Star } from 'lucide-react';

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: Laptop,
      description: 'Cameras, laptops, gaming consoles, phones',
      itemCount: 156,
      popular: true
    },
    {
      id: 'vehicles',
      name: 'Vehicles',
      icon: Car,
      description: 'Cars, bikes, scooters, trucks',
      itemCount: 89,
      popular: true
    },
    {
      id: 'home-garden',
      name: 'Home & Garden',
      icon: Home,
      description: 'Furniture, appliances, tools, decor',
      itemCount: 234,
      popular: true
    },
    {
      id: 'photography',
      name: 'Photography',
      icon: Camera,
      description: 'DSLR cameras, lenses, lighting equipment',
      itemCount: 67,
      popular: false
    },
    {
      id: 'music',
      name: 'Musical Instruments',
      icon: Music,
      description: 'Guitars, keyboards, drums, speakers',
      itemCount: 45,
      popular: false
    },
    {
      id: 'gaming',
      name: 'Gaming',
      icon: Gamepad2,
      description: 'Consoles, games, VR headsets, accessories',
      itemCount: 78,
      popular: false
    },
    {
      id: 'fitness',
      name: 'Sports & Fitness',
      icon: Dumbbell,
      description: 'Exercise equipment, bikes, outdoor gear',
      itemCount: 123,
      popular: false
    },
    {
      id: 'baby-kids',
      name: 'Baby & Kids',
      icon: Baby,
      description: 'Strollers, toys, cribs, car seats',
      itemCount: 92,
      popular: false
    },
    {
      id: 'tools',
      name: 'Tools & Equipment',
      icon: Wrench,
      description: 'Power tools, hand tools, machinery',
      itemCount: 145,
      popular: false
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularCategories = categories.filter(cat => cat.popular);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Browse by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Category</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find exactly what you need in our organized categories
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>
        </div>

        {/* Popular Categories */}
        {!searchTerm && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Star className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Popular Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/search?category=${category.id}`}
                  className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {category.itemCount} items
                        </span>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Popular
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Categories */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {searchTerm ? `Search Results (${filteredCategories.length})` : 'All Categories'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/search?category=${category.id}`}
                className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {category.description}
                    </p>
                    <span className="text-sm text-muted-foreground">
                      {category.itemCount} items available
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {filteredCategories.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No categories found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;