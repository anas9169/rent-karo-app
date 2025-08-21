import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

const SubscriptionPlans = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for trying out Rent Karo',
      price: { monthly: 0, yearly: 0 },
      icon: Star,
      features: [
        'Up to 3 listings per month',
        'Basic listing visibility',
        'Standard customer support',
        'Basic messaging',
        'Community access'
      ],
      limitations: [
        'Limited to 3 listings/month',
        'Basic search ranking',
        'Standard response time'
      ],
      popular: false,
      color: 'gray'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'For serious renters who want more exposure',
      price: { monthly: 299, yearly: 2999 },
      icon: Zap,
      features: [
        'Unlimited listings',
        'Priority listing placement',
        'Advanced analytics',
        'Priority customer support',
        'Featured listing badges',
        'Enhanced messaging features',
        'Verified seller badge'
      ],
      limitations: [],
      popular: true,
      color: 'blue'
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For rental businesses and power users',
      price: { monthly: 599, yearly: 5999 },
      icon: Crown,
      features: [
        'Everything in Premium',
        'Business verification',
        'Bulk listing tools',
        'Advanced marketing tools',
        'Dedicated account manager',
        'API access',
        'Custom branding options',
        'Advanced reporting'
      ],
      limitations: [],
      popular: false,
      color: 'gold'
    }
  ];

  const calculateSavings = (plan) => {
    const monthlyTotal = plan.price.monthly * 12;
    const yearlyPrice = plan.price.yearly;
    return monthlyTotal - yearlyPrice;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Unlock more features and grow your rental business
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === 'yearly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <Badge variant="secondary" className="ml-2">Save 20%</Badge>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            const price = plan.price[billingPeriod];
            const savings = calculateSavings(plan);
            
            return (
              <Card 
                key={plan.id} 
                className={`relative ${
                  plan.popular 
                    ? 'border-primary shadow-lg' 
                    : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.color === 'blue' ? 'bg-primary/10' :
                    plan.color === 'gold' ? 'bg-accent/10' : 'bg-muted'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      plan.color === 'blue' ? 'text-primary' :
                      plan.color === 'gold' ? 'text-accent' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">₹{price}</span>
                      <span className="text-muted-foreground ml-1">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingPeriod === 'yearly' && savings > 0 && (
                      <p className="text-sm text-green-600 mt-1">
                        Save ₹{savings} per year
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${
                      plan.popular ? 'btn-hero' : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.id === 'free' ? 'Current Plan' : 'Upgrade Now'}
                  </Button>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Features included:</h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need help choosing?</h2>
          <p className="text-muted-foreground mb-6">
            All plans include basic messaging, search functionality, and community access. 
            Upgrade to unlock advanced features and grow your rental business faster.
          </p>
          <Button variant="outline">
            Contact Sales
          </Button>
        </div>

        {/* Ad Space Placeholder */}
        <div className="mt-12 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">
            Advertisement Space
          </h3>
          <p className="text-sm text-muted-foreground">
            This space is reserved for partner advertisements and promotions
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;