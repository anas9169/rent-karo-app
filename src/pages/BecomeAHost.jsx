import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Calendar, Shield, Users, Camera, Star, CheckCircle, ArrowRight } from 'lucide-react';

const BecomeAHost = () => {
  const [activeStep, setActiveStep] = useState(1);

  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn Extra Income',
      description: 'Turn your unused items into a steady income stream. Average hosts earn ₹5,000+ per month.'
    },
    {
      icon: Calendar,
      title: 'Flexible Schedule',
      description: 'You control when your items are available. Set your own rental periods and availability.'
    },
    {
      icon: Shield,
      title: 'Secure & Insured',
      description: 'Our verification system and insurance partnerships protect your valuable items.'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Connect with your neighbors and help build a sharing economy in your area.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Create Your Listing',
      description: 'Take great photos and write a detailed description of your item.',
      icon: Camera
    },
    {
      number: 2,
      title: 'Set Your Price',
      description: 'Use our pricing tool to set competitive rates for your items.',
      icon: DollarSign
    },
    {
      number: 3,
      title: 'Connect with Renters',
      description: 'Receive requests and communicate with potential renters.',
      icon: Users
    },
    {
      number: 4,
      title: 'Earn Money',
      description: 'Get paid securely after each successful rental.',
      icon: Star
    }
  ];

  const requirements = [
    'Be 18 years or older',
    'Have valid government ID',
    'Own the items you want to rent',
    'Provide accurate item descriptions',
    'Respond to inquiries within 24 hours',
    'Maintain items in good condition'
  ];

  const faqs = [
    {
      question: 'How much can I earn as a host?',
      answer: 'Earnings vary based on your items and location. Popular items like cameras and power tools can earn ₹500-2000 per day. Many hosts earn ₹5,000-15,000 per month.'
    },
    {
      question: 'What if my item gets damaged?',
      answer: 'We have insurance partnerships and a resolution center to handle damages. Renters are responsible for returning items in the same condition.'
    },
    {
      question: 'How do I get paid?',
      answer: 'Payments are processed securely through our platform. You receive payment within 24 hours after the rental period ends.'
    },
    {
      question: 'Can I reject rental requests?',
      answer: 'Yes, you have full control over who rents your items. You can review renter profiles and approve or decline requests.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Become a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Host</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Turn your unused items into income. Join thousands of hosts earning money by sharing what they own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/create-listing"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Start Hosting <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Host with Rent Karo?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community and start earning from items you already own
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Host Requirements
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple requirements to ensure a safe and trustworthy platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of hosts already earning money from their unused items
          </p>
          <Link 
            to="/create-listing"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-semibold"
          >
            List Your First Item <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BecomeAHost;