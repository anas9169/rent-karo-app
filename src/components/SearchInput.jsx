import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { categories } from '../data/categories';

const SearchInput = ({ 
  type = 'what', // 'what' or 'where'
  placeholder, 
  value, 
  onChange, 
  className,
  icon: Icon,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Location suggestions for Lucknow and other cities
  const locationSuggestions = [
    'Aliganj, Lucknow',
    'Indira Nagar, Lucknow', 
    'Gomti Nagar, Lucknow',
    'Hazratganj, Lucknow',
    'Aminabad, Lucknow',
    'Chowk, Lucknow',
    'Mahanagar, Lucknow',
    'Rajajipuram, Lucknow',
    'Nirala Nagar, Lucknow',
    'Jankipuram, Lucknow',
    'Connaught Place, Delhi',
    'Karol Bagh, Delhi',
    'Lajpat Nagar, Delhi',
    'Saket, Delhi',
    'Gurgaon, Delhi NCR',
    'Koramangala, Bangalore',
    'Indiranagar, Bangalore',
    'Whitefield, Bangalore',
    'Electronic City, Bangalore',
    'Jayanagar, Bangalore',
    'Bandra, Mumbai',
    'Andheri, Mumbai',
    'Powai, Mumbai',
    'Worli, Mumbai',
    'Juhu, Mumbai'
  ];

  // Generate category suggestions from shared data
  const getCategorySuggestions = () => {
    const categoryNames = categories.map(cat => cat.name);
    const categoryDescriptions = categories.flatMap(cat => 
      cat.description.split(', ').map(item => 
        item.charAt(0).toUpperCase() + item.slice(1)
      )
    );
    return [...categoryNames, ...categoryDescriptions];
  };

  // Location API integration for dynamic suggestions
  const fetchLocationSuggestions = async (query) => {
    if (query.length < 1) return [];
    
    try {
      // Using a free location API service for India
      // Note: In production, you might want to use Google Places API or similar
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${query}*`
      );
      const data = await response.json();
      
      if (data && data[0] && data[0].PostOffice) {
        return data[0].PostOffice.map(office => 
          `${office.Name}, ${office.District}, ${office.State}`
        ).slice(0, 8);
      }
      return [];
    } catch (error) {
      console.error('Error fetching locations:', error);
      // Fallback to static suggestions if API fails
      return locationSuggestions.filter(location =>
        location.toLowerCase().includes(query.toLowerCase())
      );
    }
  };

  const getSuggestions = async (query = '') => {
    if (type === 'where') {
      // Try to fetch dynamic locations first, fallback to static
      if (query.length > 0) {
        const dynamicSuggestions = await fetchLocationSuggestions(query);
        if (dynamicSuggestions.length > 0) {
          return dynamicSuggestions;
        }
      }
      return locationSuggestions;
    } else {
      // Use dynamic category suggestions
      return getCategorySuggestions();
    }
  };

  const handleInputChange = async (e) => {
    const newValue = e.target.value;
    onChange(e);
    
    if (newValue.length > 0) {
      const suggestions = await getSuggestions(newValue);
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(newValue.toLowerCase())
      ).slice(0, 8); // Limit to 8 suggestions
      
      setFilteredSuggestions(filtered);
      setIsOpen(true);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleInputFocus = async () => {
    if (value === '') {
      // Show popular suggestions when input is empty and focused
      const suggestions = await getSuggestions();
      const popularSuggestions = type === 'where' 
        ? suggestions.filter(s => s.includes('Lucknow')).slice(0, 5)
        : suggestions.slice(0, 8);
      
      setFilteredSuggestions(popularSuggestions);
      setIsOpen(true);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const event = {
      target: {
        value: suggestion
      }
    };
    onChange(event);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current && 
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        )}
        <Input
          ref={inputRef}
          placeholder={placeholder}
          className={cn(Icon ? "pl-10" : "", className)}
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          {...props}
        />
      </div>
      
      {isOpen && filteredSuggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 z-[100] mt-1 bg-white dark:bg-gray-800 border border-border rounded-md shadow-xl max-h-60 overflow-y-auto"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-3 hover:bg-muted focus:bg-muted focus:outline-none transition-colors border-b border-border last:border-b-0"
              onClick={() => handleSuggestionClick(suggestion)}
              type="button"
            >
              <div className="flex items-center">
                {Icon && (
                  <Icon className="w-4 h-4 text-muted-foreground mr-3 flex-shrink-0" />
                )}
                <span className="text-sm text-foreground">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;