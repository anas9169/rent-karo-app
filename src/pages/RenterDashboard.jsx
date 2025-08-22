import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, MessageCircle, Star, Clock, CheckCircle, Heart, Search } from 'lucide-react';
import { useChatModal } from '@/contexts/ChatContext';

const RenterDashboard = () => {
  const { openChat } = useChatModal();

  // Sample data - in real app, this would come from API
  const dashboardStats = {
    activeRentals: 2,
    completedRentals: 8,
    favorites: 15,
    pendingRequests: 1
  };

  const rentalRequests = [
    {
      id: 1,
      listing: {
        title: 'Canon EOS R5 Professional Camera',
        image: 'https://images.unsplash.com/photo-1606983340126-99ab4febbf25?w=200&h=150&fit=crop',
        owner: 'Rajesh Kumar'
      },
      dates: { from: '2024-01-15', to: '2024-01-17' },
      amount: 7500,
      status: 'pending',
      requestedAt: '2024-01-10'
    }
  ];

  const upcomingRentals = [
    {
      id: 1,
      listing: {
        title: 'MacBook Pro 16" M2',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=150&fit=crop',
        owner: 'Priya Sharma'
      },
      dates: { from: '2024-01-12', to: '2024-01-15' },
      amount: 4500,
      status: 'confirmed',
      pickupLocation: 'Bandra West, Mumbai'
    },
    {
      id: 2,
      listing: {
        title: 'Professional DJ Equipment Set',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200&h=150&fit=crop',
        owner: 'Amit Patel'
      },
      dates: { from: '2024-01-20', to: '2024-01-22' },
      amount: 7000,
      status: 'confirmed',
      pickupLocation: 'Koramangala, Bangalore'
    }
  ];

  const pastRentals = [
    {
      id: 1,
      listing: {
        title: 'GoPro Hero 11 Action Camera',
        image: 'https://images.unsplash.com/photo-1585467902456-0c8d6b49f91e?w=200&h=150&fit=crop',
        owner: 'Sneha Reddy'
      },
      dates: { from: '2024-01-01', to: '2024-01-03' },
      amount: 1800,
      status: 'completed',
      rating: 5,
      review: 'Excellent camera, perfect for my Goa trip!'
    },
    {
      id: 2,
      listing: {
        title: 'Power Drill Set with Bits',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=200&h=150&fit=crop',
        owner: 'Rahul Singh'
      },
      dates: { from: '2023-12-28', to: '2023-12-30' },
      amount: 1200,
      status: 'completed',
      rating: 4,
      review: 'Good quality tools, helped with my home renovation.'
    }
  ];

  const favoriteItems = [
    {
      id: 1,
      title: 'BMW 3 Series for Weekend Getaways',
      image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110?w=200&h=150&fit=crop',
      price: 4200,
      city: 'Bangalore',
      rating: 4.8,
      available: true
    },
    {
      id: 2,
      title: 'Professional Wedding Camera Setup',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4febbf25?w=200&h=150&fit=crop',
      price: 3500,
      city: 'Mumbai',
      rating: 4.9,
      available: false
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { label: 'Pending', variant: 'secondary' },
      confirmed: { label: 'Confirmed', variant: 'default' },
      active: { label: 'Active', variant: 'destructive' },
      completed: { label: 'Completed', variant: 'outline' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Renter Dashboard</h1>
            <p className="text-muted-foreground">Manage your rentals and discover new items</p>
          </div>
          <Link to="/search">
            <Button className="btn-hero mt-4 md:mt-0">
              <Search className="w-4 h-4 mr-2" />
              Browse Items
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Active Rentals */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Rentals</p>
                  <p className="text-2xl font-bold">{dashboardStats.activeRentals}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed Rentals */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Completed</p>
                  <p className="text-2xl font-bold">{dashboardStats.completedRentals}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Favorites */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Favorites</p>
                  <p className="text-2xl font-bold">{dashboardStats.favorites}</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pending Requests */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Pending Requests</p>
                  <p className="text-2xl font-bold">{dashboardStats.pendingRequests}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Rentals</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>

          {/* Rental Requests */}
          <TabsContent value="requests">
            <Card>
              <CardHeader>
                <CardTitle>Rental Requests</CardTitle>
                <CardDescription>Track your booking requests and their status</CardDescription>
              </CardHeader>
              <CardContent>
                {rentalRequests.length > 0 ? (
                  <div className="space-y-4">
                    {rentalRequests.map(request => (
                      <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={request.listing.image} 
                            alt={request.listing.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-semibold">{request.listing.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Owner: {request.listing.owner}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {request.dates.from} to {request.dates.to} • ₹{request.amount}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(request.status)}
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => openChat(
                              { name: request.listing.owner },
                              request.listing
                            )}
                          >
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Clock className="w-12 h-12 mx-auto mb-4 opacity-50 text-muted-foreground" />
                    <p className="text-muted-foreground">No pending requests</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upcoming Rentals */}
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Rentals</CardTitle>
                <CardDescription>Your confirmed rentals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingRentals.map(rental => (
                    <div key={rental.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={rental.listing.image} 
                            alt={rental.listing.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-semibold">{rental.listing.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Owner: {rental.listing.owner}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(rental.status)}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Rental Period</p>
                          <p className="font-medium">{rental.dates.from} to {rental.dates.to}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Pickup Location</p>
                          <p className="font-medium">{rental.pickupLocation}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Total Amount</p>
                          <p className="font-medium">₹{rental.amount}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 mt-4">
                        <Button 
                          size="sm"
                          onClick={() => openChat(
                            { name: rental.listing.owner },
                            rental.listing
                          )}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat with Owner
                        </Button>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Past Rentals */}
          <TabsContent value="past">
            <Card>
              <CardHeader>
                <CardTitle>Past Rentals</CardTitle>
                <CardDescription>Your rental history and reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pastRentals.map(rental => (
                    <div key={rental.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={rental.listing.image} 
                            alt={rental.listing.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-semibold">{rental.listing.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Owner: {rental.listing.owner}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {rental.dates.from} to {rental.dates.to} • ₹{rental.amount}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(rental.status)}
                      </div>
                      
                      {rental.rating && (
                        <div className="bg-muted p-3 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-medium">Your rating:</span>
                            <div className="flex">
                              {renderStars(rental.rating)}
                            </div>
                          </div>
                          <p className="text-sm">"{rental.review}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Favorite Items</CardTitle>
                <CardDescription>Items you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {favoriteItems.map(item => (
                    <div key={item.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-20 h-15 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.city}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{item.rating}</span>
                            </div>
                            <span className="font-semibold">₹{item.price}/day</span>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <Badge variant={item.available ? 'default' : 'secondary'}>
                              {item.available ? 'Available' : 'Not Available'}
                            </Badge>
                            <Button size="sm" disabled={!item.available}>
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

    </div>
  );
};

export default RenterDashboard;
