import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageCircle, Shield, CreditCard, Users, HelpCircle, ExternalLink, ArrowRight, Phone, Mail } from 'lucide-react';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const helpCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of using Rent Karo',
      articles: [
        'How to create an account',
        'Setting up your profile',
        'Understanding our platform',
        'First-time renter guide',
        'First-time host guide'
      ]
    },
    {
      icon: Users,
      title: 'For Renters',
      description: 'Everything about renting items',
      articles: [
        'How to find and rent items',
        'Making rental requests',
        'Payment and booking process',
        'Pickup and return guidelines',
        'Cancellation policies'
      ]
    },
    {
      icon: Shield,
      title: 'For Hosts',
      description: 'Host your items successfully',
      articles: [
        'Creating effective listings',
        'Pricing your items',
        'Managing rental requests',
        'Host protection policies',
        'Tax considerations'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payments & Billing',
      description: 'Payment methods and billing help',
      articles: [
        'Payment methods accepted',
        'Understanding fees',
        'Refund policies',
        'Billing and invoices',
        'Payout schedules'
      ]
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Staying safe on our platform',
      articles: [
        'User verification process',
        'Reporting suspicious activity',
        'Insurance and protection',
        'Privacy and data security',
        'Trust and safety guidelines'
      ]
    },
    {
      icon: HelpCircle,
      title: 'Account & Settings',
      description: 'Manage your account settings',
      articles: [
        'Updating profile information',
        'Notification preferences',
        'Account security',
        'Deactivating your account',
        'Data export requests'
      ]
    }
  ];

  const popularArticles = [
    'How to rent an item for the first time',
    'Setting competitive rental prices',
    'What to do if an item is damaged',
    'Understanding verification badges',
    'How payments work',
    'Cancellation and refund policies',
    'Resolving disputes with renters/hosts',
    'Tips for better listings'
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email',
      availability: 'Response within 24 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call our support line',
      availability: 'Mon-Fri, 9 AM - 6 PM',
      action: 'Call Now'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Help <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link to="/faq" className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
            <HelpCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
              FAQ
            </h3>
            <p className="text-muted-foreground mb-4">
              Quick answers to common questions
            </p>
            <span className="text-primary text-sm font-medium group-hover:underline">
              View FAQ →
            </span>
          </Link>
          
          <Link to="/contact" className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
            <MessageCircle className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
              Contact Support
            </h3>
            <p className="text-muted-foreground mb-4">
              Get in touch with our support team
            </p>
            <span className="text-primary text-sm font-medium group-hover:underline">
              Contact Us →
            </span>
          </Link>
          
          <Link to="/become-host" className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
            <BookOpen className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
              Host Guide
            </h3>
            <p className="text-muted-foreground mb-4">
              Learn how to become a successful host
            </p>
            <span className="text-primary text-sm font-medium group-hover:underline">
              Get Started →
            </span>
          </Link>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to="#"
                className="flex items-center space-x-3 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-300 hover:border-primary/50 group"
              >
                <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-card-foreground group-hover:text-primary transition-colors">
                  {article}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
              </Link>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">{category.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.articles.slice(0, 3).map((article, articleIndex) => (
                    <Link
                      key={articleIndex}
                      to="#"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {article}
                    </Link>
                  ))}
                  <Link
                    to="#"
                    className="block text-sm text-primary font-medium hover:underline"
                  >
                    View all articles ({category.articles.length})
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground">
              Our support team is here to assist you with any questions or issues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{option.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{option.description}</p>
                <p className="text-xs text-muted-foreground mb-4">{option.availability}</p>
                <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;