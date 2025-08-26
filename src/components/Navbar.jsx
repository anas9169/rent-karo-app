import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Menu, X, User, Heart, MessageCircle, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getFavoriteCount } = useFavorites();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-accent w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RK</span>
            </div>
            <span className="text-xl font-bold text-foreground">Rent Karo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-foreground hover:text-primary transition-colors">
              Browse
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/create-listing" className="text-foreground hover:text-primary transition-colors">
              List your item
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/favorites">
                <Button variant="ghost" size="sm" className="relative">
                  <Heart className="w-4 h-4 mr-2" />
                  Favorites
                  {getFavoriteCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getFavoriteCount()}
                    </span>
                  )}
                </Button>
              </Link>
              <Link to="/messages">
                <Button variant="ghost" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messages
                </Button>
              </Link>
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={toggleUserMenu}
                  className="flex items-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  Account
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <Link
                        to="/signin"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Sign Up
                      </Link>
                      <div className="border-t border-border my-1"></div>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Settings
                      </Link>
                      <Link
                        to="/renter-dashboard"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Renter Dashboard
                      </Link>
                      <Link
                        to="/owner-dashboard"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Owner Dashboard
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/search"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Browse
              </Link>
              <Link
                to="/categories"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Categories
              </Link>
              <Link
                to="/create-listing"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={toggleMenu}
              >
                List your item
              </Link>
              <Link
                to="/favorites"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Favorites ({getFavoriteCount()})
              </Link>
              <Link
                to="/messages"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Messages
              </Link>
              <Link
                to="/signin"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;