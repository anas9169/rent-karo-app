
import { useState, useRef } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, X, Camera, Shield, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const UserProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Raj Kumar',
    email: 'raj.kumar@email.com',
    phone: '+91 9876543210',
    location: 'Mumbai, Maharashtra',
    bio: 'Photography enthusiast and tech lover. Happy to share my camera equipment and gadgets with fellow creators.',
    joinDate: '2023-03-15',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  });

  const stats = [
    { label: 'Items Listed', value: '12', color: 'text-blue-600' },
    { label: 'Items Rented', value: '28', color: 'text-green-600' },
    { label: 'Reviews Given', value: '15', color: 'text-purple-600' },
    { label: 'Member Since', value: '2023', color: 'text-orange-600' }
  ];

  const badges = [
    { icon: Shield, label: 'Verified User', color: 'bg-green-100 text-green-800' },
    { icon: Award, label: 'Top Renter', color: 'bg-blue-100 text-blue-800' },
    { icon: User, label: 'Trusted Member', color: 'bg-purple-100 text-purple-800' }
  ];

  const recentActivity = [
    { action: 'Listed', item: 'Canon EOS R5 Camera', date: '2 days ago', type: 'list' },
    { action: 'Rented', item: 'Professional Drill Set', date: '1 week ago', type: 'rent' },
    { action: 'Reviewed', item: 'BMW 3 Series Weekend Rental', date: '2 weeks ago', type: 'review' },
    { action: 'Listed', item: 'MacBook Pro 16" for Creative Work', date: '3 weeks ago', type: 'list' }
  ];

  const handleSave = () => {
    // Handle save logic
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value
    });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData({
          ...profileData,
          avatar: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerPhotoUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="relative">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-24 h-24 rounded-full border-4 border-white/20 object-cover"
              />
              <button 
                onClick={triggerPhotoUpload}
                className="absolute bottom-0 right-0 p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors"
              >
                <Camera className="w-4 h-4" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{profileData.name}</h1>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-white/90">
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Member since {new Date(profileData.joinDate).getFullYear()}</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div>
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex space-x-2">
                  <Button
                    onClick={handleSave}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="outline"
                    className="bg-white text-primary border-white hover:bg-gray-100"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Details */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Profile Information</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Full Name</label>
                    {isEditing ? (
                      <Input
                        value={profileData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                    ) : (
                      <p className="text-muted-foreground">{profileData.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                    {isEditing ? (
                      <Input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    ) : (
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{profileData.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Phone</label>
                    {isEditing ? (
                      <Input
                        value={profileData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    ) : (
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{profileData.phone}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Location</label>
                    {isEditing ? (
                      <Input
                        value={profileData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                      />
                    ) : (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{profileData.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Bio</label>
                  {isEditing ? (
                    <Textarea
                      rows={3}
                      value={profileData.bio}
                      onChange={(e) => handleChange('bio', e.target.value)}
                      placeholder="Tell others about yourself..."
                    />
                  ) : (
                    <p className="text-muted-foreground">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-card-foreground mb-4">Recent Activity</h2>
              
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'list' ? 'bg-blue-500' :
                        activity.type === 'rent' ? 'bg-green-500' : 'bg-purple-500'
                      }`} />
                      <div>
                        <p className="text-card-foreground">
                          <span className="font-medium">{activity.action}</span> {activity.item}
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Your Stats</h3>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className={`font-bold text-lg ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Badges & Achievements</h3>
              <div className="space-y-3">
                {badges.map((badge, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${badge.color}`}>
                    <badge.icon className="w-5 h-5" />
                    <span className="font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  onClick={() => navigate('/account-settings')}
                  className="w-full justify-start" 
                  variant="outline"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Account Settings
                </Button>
                <Button 
                  onClick={() => navigate('/privacy-settings')}
                  className="w-full justify-start" 
                  variant="outline"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Settings
                </Button>
                <Button 
                  onClick={() => navigate('/verification')}
                  className="w-full justify-start" 
                  variant="outline"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Verification
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
