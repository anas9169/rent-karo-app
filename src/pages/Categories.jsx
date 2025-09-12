import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { categories } from '../data/categories';
import { useScrollReveal, useScrollRevealStagger } from '@/hooks/useScrollReveal';

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Scroll animations
  const [headerRef, headerVisible] = useScrollReveal(0.2);
  const [popularRef, popularVisible] = useScrollReveal(0.1);
  const [categoriesRef, categoriesVisible] = useScrollReveal(0.1);
  const [setPopularRef, isPopularVisible] = useScrollRevealStagger(categories.filter(cat => cat.popular).length, 150);
  const [setCategoryRef, isCategoryVisible] = useScrollRevealStagger(categories.length, 100);

  const filteredCategories = searchTerm 
    ? categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : categories;

  const popularCategories = categories.filter(cat => cat.popular);

  return (
    <div className="min-h-screen py-12 page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Browse by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Category</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find exactly what you need in our organized categories
          </p>
          
          {/* Search */}
          <div className={`max-w-md mx-auto scroll-reveal-scale ${headerVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground press-feedback"
            />
          </div>
        </div>

        {/* Popular Categories */}
        {!searchTerm && (
          <div 
            ref={popularRef}
            className={`mb-16 scroll-reveal ${popularVisible ? 'visible' : ''}`}
          >
            <div className={`flex items-center mb-8 scroll-reveal-left ${popularVisible ? 'visible' : ''}`}>
              <Star className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-foreground">Popular Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCategories.map((category, index) => (
              <Link
                key={category.id}
                ref={setPopularRef(index)}
                to={`/search?category=${encodeURIComponent(category.id)}`}
                className={`group enhanced-card p-6 micro-bounce-scale scroll-reveal-scale ${isPopularVisible(index) ? 'visible' : ''}`}
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
        <div 
          ref={categoriesRef}
          className={`scroll-reveal ${categoriesVisible ? 'visible' : ''}`}
        >
          <h2 className={`text-2xl font-bold text-foreground mb-8 scroll-reveal-left ${categoriesVisible ? 'visible' : ''}`}>
            {searchTerm ? `Search Results (${filteredCategories.length})` : 'All Categories'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <Link
                key={category.id}
                ref={setCategoryRef(index)}
                to={`/search?category=${encodeURIComponent(category.id)}`}
                className={`group enhanced-card p-6 micro-bounce-scale scroll-reveal-scale ${isCategoryVisible(index) ? 'visible' : ''}`}
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