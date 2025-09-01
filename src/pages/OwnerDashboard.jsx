import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Calendar, IndianRupee, MessageCircle, Eye, Edit, Star, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useChatModal } from '@/contexts/ChatContext';

const OwnerDashboard = () => {
  const { openChat } = useChatModal();
  const navigate = useNavigate();
  
  // Sample data - in real app, this would come from API
  const dashboardStats = {
    totalListings: 5,
    activeListings: 3,
    messageCount: 8,
    pendingRequests: 2
  };

  const myListings = [
    {
      id: 1,
      title: 'Canon EOS R5 Professional Camera',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4febbf25?w=200&h=150&fit=crop',
      price: 2500,
      status: 'active',
      views: 156,
      bookings: 8,
      rating: 4.9
    },
    {
      id: 2,
      title: 'MacBook Pro 16" M2',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=150&fit=crop',
      price: 1500,
      status: 'rented',
      views: 89,
      bookings: 5,
      rating: 4.7
    },
    {
      id: 3,
      title: 'DJ Equipment Set',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200&h=150&fit=crop',
      price: 3500,
      status: 'draft',
      views: 12,
      bookings: 0,
      rating: 0
    }
  ];

  const bookingRequests = [
    {
      id: 1,
      listing: 'Canon EOS R5 Professional Camera',
      renter: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b14b9c73?w=50&h=50&fit=crop&crop=face',
        rating: 4.8
      },
      dates: { from: '2024-01-15', to: '2024-01-17' },
      amount: 7500,
      status: 'pending',
      message: 'Hi! I need this camera for a wedding shoot. I have experience with professional cameras.'
    },
    {
      id: 2,
      listing: 'MacBook Pro 16" M2',
      renter: {
        name: 'Rahul Kumar',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
        rating: 4.6
      },
      dates: { from: '2024-01-20', to: '2024-01-25' },
      amount: 9000,
      status: 'pending',
      message: 'Need for a client presentation and video editing work.'
    }
  ];

  const upcomingRentals = [
    {
      id: 1,
      listing: 'Canon EOS R5 Professional Camera',
      renter: 'Amit Patel',
      dates: { from: '2024-01-12', to: '2024-01-14' },
      amount: 7500,
      status: 'confirmed'
    }
  ];

  const handleRequestAction = (requestId, action) => {
    // In real app, this would make API call
    alert(`Request ${action}ed successfully!`);
  };

  const handleEditListing = (listingId) => {
    // Navigate to edit listing page with the listing ID
    navigate(`/edit-listing/${listingId}`);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { label: 'Active', variant: 'default' },
      rented: { label: 'Currently Rented', variant: 'secondary' },
      draft: { label: 'Draft', variant: 'outline' }
    };
    
    const config = statusConfig[status] || statusConfig.active;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Owner Dashboard</h1>
            <p className="text-muted-foreground">Manage your listings and track your earnings</p>
          </div>
          <Button onClick={() => navigate('/create-listing')} className="btn-hero mt-4 md:mt-0 btn-animated press-feedback">
            <Plus className="w-4 h-4 mr-2" />
            Add New Listing
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Listings</p>
                  <p className="text-2xl font-bold">{dashboardStats.totalListings}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Listings</p>
                  <p className="text-2xl font-bold">{dashboardStats.activeListings}</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Messages</p>
                  <p className="text-2xl font-bold">{dashboardStats.messageCount}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

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
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="requests">Messages ({dashboardStats.pendingRequests})</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>

          {/* My Listings */}
          <TabsContent value="listings">
            <Card>
              <CardHeader>
                <CardTitle>My Listings</CardTitle>
                <CardDescription>Manage your rental items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myListings.map(listing => (
                    <div key={listing.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={listing.image} 
                          alt={listing.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-semibold">{listing.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span>₹{listing.price}/day</span>
                            <span>{listing.views} views</span>
                            <span>{listing.bookings} bookings</span>
                            {listing.rating > 0 && (
                              <div className="flex items-center">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span>{listing.rating}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {getStatusBadge(listing.status)}
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEditListing(listing.id)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Booking Requests */}
          <TabsContent value="requests">
            <Card>
              <CardHeader>
                <CardTitle>Booking Requests</CardTitle>
                <CardDescription>Review and respond to rental requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {bookingRequests.map(request => (
                    <div key={request.id} className="border border-border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{request.listing}</h3>
                          <p className="text-muted-foreground">
                            {request.dates.from} to {request.dates.to} • ₹{request.amount}
                          </p>
                        </div>
                        <Badge variant="outline">Pending</Badge>
                      </div>

                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar>
                          <AvatarImage src={request.renter.avatar} />
                          <AvatarFallback>{request.renter.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{request.renter.name}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                            <span>{request.renter.rating} rating</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted p-3 rounded-lg mb-4">
                        <p className="text-sm">"{request.message}"</p>
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => handleRequestAction(request.id, 'accept')}
                          className="flex-1"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Accept
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => handleRequestAction(request.id, 'decline')}
                          className="flex-1"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Decline
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => openChat(
                            { name: request.renter.name, avatar: request.renter.avatar },
                            { title: request.listing }
                          )}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calendar */}
          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Rental Calendar</CardTitle>
                <CardDescription>View your upcoming rentals and availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingRentals.map(rental => (
                    <div key={rental.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h3 className="font-semibold">{rental.listing}</h3>
                        <p className="text-muted-foreground">
                          Rented by {rental.renter} • {rental.dates.from} to {rental.dates.to}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{rental.amount}</p>
                        <Badge variant="default">Confirmed</Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center text-muted-foreground">
                  <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Full calendar view coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscription */}
          <TabsContent value="subscription">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>Manage your Rent Karo subscription</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h3 className="font-semibold">Free Plan</h3>
                      <p className="text-muted-foreground text-sm">3 listings per month • Basic features</p>
                      <p className="text-xs text-muted-foreground mt-1">2 of 3 listings used this month</p>
                    </div>
                    <Badge variant="outline">Current Plan</Badge>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Upgrade to Premium</h3>
                    <p className="text-muted-foreground mb-4">
                      Get unlimited listings, priority placement, and advanced features
                    </p>
                    <Button onClick={() => navigate('/subscription-plans')} className="btn-hero">
                      View Plans
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OwnerDashboard;
