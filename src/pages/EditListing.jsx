
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';

const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [listing, setListing] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    location: '',
    images: []
  });

  useEffect(() => {
    // In real app, fetch listing data by ID
    const mockListing = {
      title: 'Canon EOS R5 Professional Camera',
      description: 'Professional camera perfect for photography and videography...',
      price: '2500',
      category: 'cameras',
      location: 'Mumbai, Maharashtra',
      images: ['https://images.unsplash.com/photo-1606983340126-99ab4febbf25']
    };
    setListing(mockListing);
  }, [id]);

  const handleSave = () => {
    // In real app, save the changes
    alert('Listing updated successfully!');
    navigate('/owner-dashboard');
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this listing?')) {
      // In real app, delete the listing
      alert('Listing deleted successfully!');
      navigate('/owner-dashboard');
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/owner-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Edit Listing</h1>
          <p className="text-muted-foreground">Update your listing details</p>
        </div>

        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={listing.title}
                  onChange={(e) => setListing({...listing, title: e.target.value})}
                  placeholder="What are you renting out?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  rows={4}
                  value={listing.description}
                  onChange={(e) => setListing({...listing, description: e.target.value})}
                  placeholder="Describe your item..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Price per Day (₹)</label>
                  <Input
                    type="number"
                    value={listing.price}
                    onChange={(e) => setListing({...listing, price: e.target.value})}
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input
                    value={listing.location}
                    onChange={(e) => setListing({...listing, location: e.target.value})}
                    placeholder="City, State"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between">
            <Button 
              variant="destructive" 
              onClick={handleDelete}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Listing
            </Button>
            
            <div className="space-x-2">
              <Button 
                variant="outline" 
                onClick={() => navigate('/owner-dashboard')}
              >
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
