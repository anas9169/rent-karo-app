import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Menu, X, User, Heart, MessageCircle, ChevronDown } from 'lucide-react';
import logo from '@/assets/RentKaro_Final_Logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getFavoriteCount } = useFavorites();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Rent Karo Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="nav-link">
              Browse
            </Link>
            <Link to="/categories" className="nav-link">
              Categories
            </Link>
            <Link to="/create-listing" className="nav-link">
              List your item
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/favorites">
                <Button variant="ghost" size="sm" className="relative btn-animated">
                  <Heart className="w-4 h-4 mr-2" />
                  Favorites
                  {getFavoriteCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce-subtle">
                      {getFavoriteCount()}
                    </span>
                  )}
                </Button>
              </Link>
              <Link to="/messages">
                <Button variant="ghost" size="sm" className="btn-animated">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messages
                </Button>
              </Link>
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={toggleUserMenu}
                  className="flex items-center btn-animated"
                >
                  <User className="w-4 h-4 mr-2" />
                  Account
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50 dropdown-enter">
                    <div className="py-1">
                      <Link
                        to="/signin"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors press-feedback"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors press-feedback"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Sign Up
                      </Link>
                      <div className="border-t border-border my-1"></div>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors press-feedback"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors press-feedback"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Settings
                      </Link>
                      <Link
                        to="/renter-dashboard"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors press-feedback"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Renter Dashboard
                      </Link>
                      <Link
                        to="/owner-dashboard"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors press-feedback"
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
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
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