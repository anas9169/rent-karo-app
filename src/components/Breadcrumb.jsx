import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ customPath = null }) => {
  const location = useLocation();
  const pathnames = customPath || location.pathname.split('/').filter((x) => x);

  // Map of path segments to readable names
  const pathNameMap = {
    'search': 'Search',
    'listing': 'Listing',
    'profile': 'Profile',
    'settings': 'Settings',
    'favorites': 'Favorites',
    'messages': 'Messages',
    'dashboard': 'Dashboard',
    'create-listing': 'Create Listing',
    'about': 'About Us',
    'contact': 'Contact Us',
    'faq': 'FAQ',
    'terms': 'Terms of Service',
    'privacy': 'Privacy Policy',
    'categories': 'Categories',
    'locations': 'Locations',
    'become-host': 'Become a Host',
    'help': 'Help Center',
    'admin': 'Admin',
    'renter-dashboard': 'Renter Dashboard',
    'owner-dashboard': 'Owner Dashboard',
    'account-settings': 'Account Settings',
    'subscription-plans': 'Subscription Plans'
  };

  // Don't show breadcrumb on home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="flex items-center hover:text-primary transition-colors"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = pathNameMap[value] || value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <div key={to} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-foreground font-medium" aria-current="page">
                {displayName}
              </span>
            ) : (
              <Link 
                to={to} 
                className="hover:text-primary transition-colors"
              >
                {displayName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;