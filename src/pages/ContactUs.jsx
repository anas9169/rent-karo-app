import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@rentkaro.com',
      action: 'mailto:support@rentkaro.com'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+91 9876543210',
      action: 'tel:+919876543210'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Real-time help during business hours',
      contact: 'Available 9 AM - 9 PM',
      action: '#'
    },
    {
      icon: Headphones,
      title: 'Help Center',
      description: 'Browse FAQs and guides',
      contact: 'Self-service support',
      action: '/help'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 6:00 PM' }
  ];

  const emergencyContacts = [
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Report unsafe situations or security concerns',
      contact: 'safety@rentkaro.com',
      available: '24/7'
    },
    {
      icon: Phone,
      title: 'Emergency Hotline',
      description: 'Immediate assistance for urgent issues',
      contact: '+91 9999888777',
      available: '24/7'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Get in touch with our team for any questions, support, or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your question or concern..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Get in Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                      <p className="text-sm font-medium text-primary">{method.contact}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Office Hours
              </h3>
              <div className="space-y-2">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium text-card-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Response times may be longer during holidays and weekends.
                </p>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Our Office
              </h3>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-card-foreground">Rent Karo Headquarters</p>
                <p className="text-muted-foreground">
                  123 Tech Park, Bandra Kurla Complex<br />
                  Mumbai, Maharashtra 400051<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Emergency & Safety</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-800 mb-2">{contact.title}</h4>
                    <p className="text-red-700 mb-2">{contact.description}</p>
                    <p className="font-medium text-red-800">{contact.contact}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-red-200 text-red-800 text-xs rounded-full">
                      {contact.available}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ CTA */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Looking for Quick Answers?</h3>
          <p className="text-muted-foreground mb-6">
            Check our FAQ section for instant answers to common questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/faq" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Browse FAQs
            </a>
            <a 
              href="/help" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;