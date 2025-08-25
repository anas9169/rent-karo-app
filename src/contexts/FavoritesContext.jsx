import { createContext, useContext, useReducer, useEffect } from 'react';

// Create context
const FavoritesContext = createContext();

// Action types
const FAVORITES_ACTIONS = {
  LOAD_FAVORITES: 'LOAD_FAVORITES',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
  CLEAR_FAVORITES: 'CLEAR_FAVORITES'
};

// Reducer function
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case FAVORITES_ACTIONS.LOAD_FAVORITES:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    
    case FAVORITES_ACTIONS.ADD_FAVORITE:
      const newFavorites = [...state.items, action.payload];
      localStorage.setItem('rentkaro_favorites', JSON.stringify(newFavorites));
      return {
        ...state,
        items: newFavorites
      };
    
    case FAVORITES_ACTIONS.REMOVE_FAVORITE:
      const filteredFavorites = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('rentkaro_favorites', JSON.stringify(filteredFavorites));
      return {
        ...state,
        items: filteredFavorites
      };
    
    case FAVORITES_ACTIONS.CLEAR_FAVORITES:
      localStorage.removeItem('rentkaro_favorites');
      return {
        ...state,
        items: []
      };
    
    default:
      return state;
  }
};

// Initial state
const initialState = {
  items: [],
  isLoading: true
};

// Provider component
export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('rentkaro_favorites');
    const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    dispatch({ type: FAVORITES_ACTIONS.LOAD_FAVORITES, payload: favorites });
  }, []);

  // Action creators
  const addToFavorites = (item) => {
    // Check if item is already in favorites
    const isAlreadyFavorite = state.items.some(fav => fav.id === item.id);
    if (!isAlreadyFavorite) {
      dispatch({ type: FAVORITES_ACTIONS.ADD_FAVORITE, payload: item });
      return true; // Successfully added
    }
    return false; // Already exists
  };

  const removeFromFavorites = (itemId) => {
    dispatch({ type: FAVORITES_ACTIONS.REMOVE_FAVORITE, payload: itemId });
  };

  const clearFavorites = () => {
    dispatch({ type: FAVORITES_ACTIONS.CLEAR_FAVORITES });
  };

  const isFavorite = (itemId) => {
    return state.items.some(item => item.id === itemId);
  };

  const getFavoriteCount = () => {
    return state.items.length;
  };

  const value = {
    favorites: state.items,
    isLoading: state.isLoading,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
    isFavorite,
    getFavoriteCount
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use favorites context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export default FavoritesContext;