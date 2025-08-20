import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Settings, Users, FileText, BarChart3, Shield } from 'lucide-react';

const Admin = () => {
  const navigate = useNavigate();

  const adminFeatures = [
    {
      icon: Users,
      title: 'User Management',
      description: 'Manage users, verify accounts, and handle support requests',
      status: 'Coming Soon'
    },
    {
      icon: FileText,
      title: 'Listing Moderation',
      description: 'Review and approve new listings, handle reports',
      status: 'Coming Soon'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Platform metrics, revenue tracking, and performance data',
      status: 'Coming Soon'
    },
    {
      icon: Settings,
      title: 'Platform Settings',
      description: 'Configure system settings, fees, and policies',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <div className="mx-auto bg-gradient-to-r from-primary to-accent w-16 h-16 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
            <p className="text-muted-foreground">Platform administration and management tools</p>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <Card className="mb-8 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
          <CardContent className="text-center py-8">
            <div className="text-4xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Admin Panel - Coming Soon</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building powerful administrative tools to help manage the rent-karo platform effectively. 
              The admin panel will include user management, content moderation, analytics, and system configuration features.
            </p>
          </CardContent>
        </Card>

        {/* Feature Preview */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center">Planned Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adminFeatures.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          {feature.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
                
                {/* Overlay to indicate coming soon */}
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Need Admin Access?</CardTitle>
            <CardDescription className="text-center">
              If you're part of the rent-karo team and need admin access, please contact the development team.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Admin features will include:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 max-w-md mx-auto">
                <li>• User verification and account management</li>
                <li>• Listing approval and content moderation</li>
                <li>• Transaction monitoring and dispute resolution</li>
                <li>• Platform analytics and reporting</li>
                <li>• System configuration and policy management</li>
              </ul>
              <Button variant="outline" className="mt-6">
                Contact Development Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;