import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

const FilterModal = ({ isOpen, onClose, onApplyFilter }) => {
  const [filters, setFilters] = useState({
    messageType: 'all',
    timeframe: 'all',
    unreadOnly: false,
    ownerChats: false
  });

  const handleApplyFilter = () => {
    onApplyFilter(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      messageType: 'all',
      timeframe: 'all',
      unreadOnly: false,
      ownerChats: false
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Filter Messages</DialogTitle>
          <DialogDescription>
            Filter your conversations by type, time, and status
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Message Type */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Message Type</Label>
            <RadioGroup 
              value={filters.messageType} 
              onValueChange={(value) => setFilters({...filters, messageType: value})}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All Messages</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="inquiries" id="inquiries" />
                <Label htmlFor="inquiries">Rental Inquiries</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ongoing" id="ongoing" />
                <Label htmlFor="ongoing">Ongoing Rentals</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Timeframe */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Timeframe</Label>
            <RadioGroup 
              value={filters.timeframe} 
              onValueChange={(value) => setFilters({...filters, timeframe: value})}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="time-all" />
                <Label htmlFor="time-all">All Time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="today" id="today" />
                <Label htmlFor="today">Today</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="week" id="week" />
                <Label htmlFor="week">This Week</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="month" id="month" />
                <Label htmlFor="month">This Month</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="unread" 
                checked={filters.unreadOnly}
                onCheckedChange={(checked) => setFilters({...filters, unreadOnly: checked})}
              />
              <Label htmlFor="unread">Show unread messages only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="owner" 
                checked={filters.ownerChats}
                onCheckedChange={(checked) => setFilters({...filters, ownerChats: checked})}
              />
              <Label htmlFor="owner">Show owner conversations only</Label>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-3 pt-4">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleApplyFilter}>
              Apply Filters
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;