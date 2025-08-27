import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '../contexts/FavoritesContext';

const ListingCard = ({ 
  id, 
  image, 
  title, 
  city, 
  price, 
  rating, 
  reviewCount,
  category 
}) => {
  const { isFavorite: checkIsFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(checkIsFavorite(id));
  }, [id, checkIsFavorite]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const listingData = { id, image, title, city, price, rating, reviewCount, category };
    
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(listingData);
    }
    
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/listing/${id}`} className="block">
      <div className="card-hover bg-card rounded-lg overflow-hidden border border-border">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-3 right-3 p-2 rounded-full ${
              isFavorite 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-white/80 text-foreground hover:bg-white'
            }`}
            onClick={toggleFavorite}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>
          
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-md">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center text-muted-foreground text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{city}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-sm text-muted-foreground">({reviewCount})</span>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-bold text-primary">₹{price}</div>
              <div className="text-xs text-muted-foreground">per day</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;