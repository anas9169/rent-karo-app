import { additionalListings } from './additionalListings';

// Sample listing data for demonstration
export const sampleListings = {
  1: {
    id: 1,
    title: 'Canon EOS R5 Professional Camera',
    images: [
      'https://images.unsplash.com/photo-1606983340126-99ab4febbf25?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1587614387466-0a72ca909e16?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609592552607-f0ee30e0e6db?w=800&h=600&fit=crop'
    ],
    price: 2500,
    rating: 4.9,
    reviewCount: 127,
    category: 'photography',
    city: 'Mumbai',
    description: 'Professional-grade Canon EOS R5 camera perfect for photography and videography. Includes 24-105mm lens, extra batteries, memory cards, and a professional camera bag. Ideal for weddings, events, travel photography, and content creation.',
    features: [
      '45MP Full-Frame Sensor',
      '8K Video Recording',
      'In-Body Image Stabilization',
      '24-105mm RF Lens Included',
      'Extra Batteries & Memory Cards',
      'Professional Camera Bag'
    ],
    owner: {
      name: 'Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 4.8,
      reviewCount: 156,
      joinedDate: 'March 2022',
      verified: true
    },
    availability: ['2024-01-15', '2024-01-16', '2024-01-17'],
    deposit: 5000,
    location: 'Bandra West, Mumbai',
    pickupOptions: ['Owner delivery', 'Self pickup']
  },
  2: {
    id: 2,
    title: 'DJI Air 2S Professional Drone',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&h=600&fit=crop'
    ],
    price: 1800,
    rating: 4.8,
    reviewCount: 89,
    category: 'electronics',
    city: 'Delhi',
    description: 'High-quality DJI Air 2S drone with 4K video recording capabilities. Perfect for aerial photography, real estate shoots, and content creation. Includes multiple batteries, carrying case, and memory cards.',
    features: [
      '4K 60fps Video Recording',
      '20MP Camera',
      '31-minute Flight Time',
      'Obstacle Avoidance',
      'Multiple Batteries Included',
      'Professional Carrying Case'
    ],
    owner: {
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 4.9,
      reviewCount: 142,
      joinedDate: 'January 2023',
      verified: true
    },
    availability: ['2024-01-15', '2024-01-16', '2024-01-17'],
    deposit: 3000,
    location: 'Connaught Place, Delhi',
    pickupOptions: ['Owner delivery', 'Self pickup']
  },
  3: {
    id: 3,
    title: 'MacBook Pro 16" M2 Max',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&h=600&fit=crop'
    ],
    price: 3200,
    rating: 4.7,
    reviewCount: 234,
    category: 'electronics',
    city: 'Bangalore',
    description: 'Latest MacBook Pro 16" with M2 Max chip, perfect for video editing, software development, and creative work. Includes charger, carrying case, and all necessary accessories.',
    features: [
      'M2 Max Chip',
      '32GB Unified Memory',
      '1TB SSD Storage',
      '16.2" Liquid Retina XDR Display',
      'Up to 22 hours battery life',
      'Professional Carrying Case'
    ],
    owner: {
      name: 'Arjun Patel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 4.6,
      reviewCount: 98,
      joinedDate: 'June 2022',
      verified: true
    },
    availability: ['2024-01-15', '2024-01-16', '2024-01-17'],
    deposit: 8000,
    location: 'Koramangala, Bangalore',
    pickupOptions: ['Owner delivery', 'Self pickup']
  },
  4: {
    id: 4,
    title: 'Sony A7 III Mirrorless Camera',
    images: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606983340077-e6d8b5c2f5f0?w=800&h=600&fit=crop'
    ],
    price: 2200,
    rating: 4.8,
    reviewCount: 156,
    category: 'photography',
    city: 'Pune',
    description: 'Versatile Sony A7 III camera perfect for both photography and videography. Great for travel, portraits, and professional shoots. Includes 28-70mm kit lens and essential accessories.',
    features: [
      '24.2MP Full-Frame Sensor',
      '4K Video Recording',
      '693-point AF System',
      'In-Body Stabilization',
      '28-70mm Kit Lens',
      'Extra Batteries & Memory Cards'
    ],
    owner: {
      name: 'Sneha Gupta',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 4.9,
      reviewCount: 87,
      joinedDate: 'September 2022',
      verified: true
    },
    availability: ['2024-01-15', '2024-01-16', '2024-01-17'],
    deposit: 4500,
    location: 'Baner, Pune',
    pickupOptions: ['Owner delivery', 'Self pickup']
  },
  5: {
    id: 5,
    title: 'PlayStation 5 Console',
    images: [
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609883874737-4f216e9f6650?w=800&h=600&fit=crop'
    ],
    price: 1500,
    rating: 4.9,
    reviewCount: 312,
    category: 'gaming',
    city: 'Chennai',
    description: 'Latest PlayStation 5 console with 2 wireless controllers and popular games included. Perfect for gaming enthusiasts and parties. All accessories and cables included.',
    features: [
      'Latest PS5 Console',
      '2 DualSense Controllers',
      '5 Popular Games Included',
      '4K Gaming Support',
      'Ray Tracing Technology',
      'All Cables & Accessories'
    ],
    owner: {
      name: 'Vikram Singh',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 4.8,
      reviewCount: 203,
      joinedDate: 'April 2023',
      verified: true
    },
    availability: ['2024-01-15', '2024-01-16', '2024-01-17'],
    deposit: 3500,
    location: 'Anna Nagar, Chennai',
    pickupOptions: ['Owner delivery', 'Self pickup']
  },
  6: {
    id: 6,
    title: 'GoPro Hero 11 Black Action Camera',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=600&fit=crop'
    ],
    price: 800,
    rating: 4.7,
    reviewCount: 164,
    category: 'photography',
    city: 'Goa',
    description: 'Compact and rugged GoPro Hero 11 Black perfect for adventure sports, travel, and underwater photography. Includes mounting accessories and waterproof case.',
    features: [
      '5.3K Video Recording',
      'HyperSmooth 5.0 Stabilization',
      'Waterproof to 10m',
      'Multiple Mounting Accessories',
      'Extra Batteries',
      'Protective Case'
    ],
    owner: {
      name: 'Rahul Costa',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face',
      rating: 4.8,
      reviewCount: 76,
      joinedDate: 'July 2023',
      verified: true
    },
    availability: ['2024-01-15', '2024-01-16', '2024-01-17'],
    deposit: 2000,
    location: 'Calangute, Goa',
    pickupOptions: ['Owner delivery', 'Self pickup']
  }
};

// Helper function to get listing by ID
export const getListingById = (id) => {
  return sampleListings[parseInt(id)] || null;
};

// Helper function to get all listings
export const getAllListings = () => {
  return [...Object.values(sampleListings), ...Object.values(additionalListings)];
};