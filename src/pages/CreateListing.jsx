import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, X, Calendar, IndianRupee, MapPin, Camera, ArrowLeft, ArrowRight, Check } from 'lucide-react';

const CreateListing = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  const [formData, setFormData] = useState({
    // Step 1: Item Details
    title: '',
    category: '',
    description: '',
    location: '',
    
    // Step 2: Photos
    photos: [],
    
    // Step 3: Pricing
    pricePerDay: '',
    deposit: '',
    
    // Step 4: Availability
    availableFrom: '',
    availableTo: '',
    
    // Step 5: Review (no additional fields)
  });

  const [errors, setErrors] = useState({});

  const categories = [
    'Cameras & Photography',
    'Tools & Equipment',
    'Electronics',
    'Vehicles',
    'Party & Events',
    'Sports & Outdoor',
    'Musical Instruments',
    'Home & Garden',
    'Books & Media',
    'Other'
  ];

  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 1:
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.description.trim()) newErrors.description = 'Description is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        break;
      case 2:
        if (formData.photos.length === 0) newErrors.photos = 'At least one photo is required';
        break;
      case 3:
        if (!formData.pricePerDay || formData.pricePerDay <= 0) newErrors.pricePerDay = 'Valid price is required';
        if (!formData.deposit || formData.deposit < 0) newErrors.deposit = 'Valid deposit amount is required';
        break;
      case 4:
        if (!formData.availableFrom) newErrors.availableFrom = 'Start date is required';
        if (!formData.availableTo) newErrors.availableTo = 'End date is required';
        if (formData.availableFrom && formData.availableTo && formData.availableFrom >= formData.availableTo) {
          newErrors.availableTo = 'End date must be after start date';
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file)
    }));
    
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...newPhotos].slice(0, 10) // Max 10 photos
    }));
  };

  const removePhoto = (photoId) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter(photo => photo.id !== photoId)
    }));
  };

  const handleSubmit = () => {
    // In real app, this would submit to backend
    alert('Listing created successfully! It will be reviewed and published within 24 hours.');
    navigate('/owner-dashboard');
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                Item Details
              </CardTitle>
              <CardDescription>
                Tell us about the item you want to rent out
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Item Title *</label>
                <Input
                  placeholder="e.g., Canon EOS R5 Professional Camera"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className={errors.title ? 'border-red-500' : ''}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category *</label>
                <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                  <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description *</label>
                <Textarea
                  placeholder="Describe your item, its condition, what's included, and any special instructions..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={4}
                  className={errors.description ? 'border-red-500' : ''}
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="e.g., Bandra West, Mumbai"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className={`pl-10 ${errors.location ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Add Photos</CardTitle>
              <CardDescription>
                Upload high-quality photos of your item (maximum 10 photos)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                    <span className="text-lg font-medium">Click to upload photos</span>
                    <span className="text-muted-foreground">or drag and drop</span>
                  </label>
                </div>

                {/* Photo Grid */}
                {formData.photos.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formData.photos.map((photo, index) => (
                      <div key={photo.id} className="relative group">
                        <img
                          src={photo.url}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removePhoto(photo.id)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        {index === 0 && (
                          <div className="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                            Main Photo
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {errors.photos && <p className="text-red-500 text-sm">{errors.photos}</p>}
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <IndianRupee className="w-5 h-5 mr-2" />
                Set Your Price
              </CardTitle>
              <CardDescription>
                Set competitive pricing for your item
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Price per day (₹) *</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="number"
                    placeholder="2500"
                    value={formData.pricePerDay}
                    onChange={(e) => setFormData({...formData, pricePerDay: e.target.value})}
                    className={`pl-10 ${errors.pricePerDay ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.pricePerDay && <p className="text-red-500 text-sm mt-1">{errors.pricePerDay}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Security Deposit (₹) *</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="number"
                    placeholder="5000"
                    value={formData.deposit}
                    onChange={(e) => setFormData({...formData, deposit: e.target.value})}
                    className={`pl-10 ${errors.deposit ? 'border-red-500' : ''}`}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  This amount will be refunded when the item is returned in good condition
                </p>
                {errors.deposit && <p className="text-red-500 text-sm mt-1">{errors.deposit}</p>}
              </div>

              {formData.pricePerDay && (
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Pricing Summary</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Daily rate:</span>
                      <span>₹{formData.pricePerDay}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekly rate (10% discount):</span>
                      <span>₹{Math.round(formData.pricePerDay * 7 * 0.9)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly rate (20% discount):</span>
                      <span>₹{Math.round(formData.pricePerDay * 30 * 0.8)}</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Availability
              </CardTitle>
              <CardDescription>
                When is your item available for rent?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Available from *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={formData.availableFrom}
                    onChange={(e) => setFormData({...formData, availableFrom: e.target.value})}
                    className={`pl-10 ${errors.availableFrom ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.availableFrom && <p className="text-red-500 text-sm mt-1">{errors.availableFrom}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Available until *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="date"
                    value={formData.availableTo}
                    onChange={(e) => setFormData({...formData, availableTo: e.target.value})}
                    className={`pl-10 ${errors.availableTo ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.availableTo && <p className="text-red-500 text-sm mt-1">{errors.availableTo}</p>}
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Rental Guidelines</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• You can update availability dates anytime</li>
                  <li>• Block specific dates when your item is not available</li>
                  <li>• Set minimum and maximum rental periods</li>
                  <li>• Enable instant booking for verified renters</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                Review & Publish
              </CardTitle>
              <CardDescription>
                Review your listing before publishing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preview */}
                <div>
                  <h4 className="font-medium mb-3">Preview</h4>
                  <div className="border border-border rounded-lg overflow-hidden">
                    {formData.photos[0] && (
                      <img src={formData.photos[0].url} alt="Preview" className="w-full h-48 object-cover" />
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{formData.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{formData.location}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-primary">₹{formData.pricePerDay}/day</span>
                        <span className="text-sm text-muted-foreground">{formData.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h4 className="font-medium mb-3">Summary</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Title:</span> {formData.title}
                    </div>
                    <div>
                      <span className="font-medium">Category:</span> {formData.category}
                    </div>
                    <div>
                      <span className="font-medium">Location:</span> {formData.location}
                    </div>
                    <div>
                      <span className="font-medium">Price:</span> ₹{formData.pricePerDay}/day
                    </div>
                    <div>
                      <span className="font-medium">Deposit:</span> ₹{formData.deposit}
                    </div>
                    <div>
                      <span className="font-medium">Available:</span> {formData.availableFrom} to {formData.availableTo}
                    </div>
                    <div>
                      <span className="font-medium">Photos:</span> {formData.photos.length} uploaded
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Ready to publish!</h4>
                <p className="text-green-700 text-sm">
                  Your listing will be reviewed and published within 24 hours. You'll receive an email confirmation once it's live.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/owner-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-foreground mb-2">Create New Listing</h1>
          <p className="text-muted-foreground">Share your item with the rent-karo community</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}% complete</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          
          {currentStep === totalSteps ? (
            <Button onClick={handleSubmit} className="btn-hero">
              <Check className="w-4 h-4 mr-2" />
              Publish Listing
            </Button>
          ) : (
            <Button onClick={nextStep}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateListing;