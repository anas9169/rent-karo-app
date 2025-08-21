import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const AdBanner = ({ position = 'top', className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const adContent = {
    top: {
      title: 'Special Offer: Premium Cameras',
      description: 'Get professional photography equipment at 20% off this month',
      cta: 'View Deals',
      bgColor: 'bg-gradient-to-r from-blue-50 to-purple-50'
    },
    sidebar: {
      title: 'Rent Tools Nearby',
      description: 'Find the best tools for your next project',
      cta: 'Browse Tools',
      bgColor: 'bg-gradient-to-r from-green-50 to-blue-50'
    },
    bottom: {
      title: 'List Your Items',
      description: 'Join thousands earning extra income on Rent Karo',
      cta: 'Start Earning',
      bgColor: 'bg-gradient-to-r from-accent/10 to-primary/10'
    }
  };

  const content = adContent[position] || adContent.top;

  return (
    <div className={`${content.bgColor} border border-border rounded-lg p-4 relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 h-6 w-6 p-0"
        onClick={() => setIsVisible(false)}
      >
        <X className="w-4 h-4" />
      </Button>
      
      <div className="pr-8">
        <h3 className="font-semibold text-sm mb-1">{content.title}</h3>
        <p className="text-xs text-muted-foreground mb-3">{content.description}</p>
        <Button size="sm" variant="outline" className="text-xs">
          {content.cta}
        </Button>
      </div>
      
      <div className="absolute bottom-1 right-2 text-xs text-muted-foreground/50">
        Ad
      </div>
    </div>
  );
};

export default AdBanner;