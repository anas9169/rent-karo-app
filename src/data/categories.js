import { Camera, Car, Home, Laptop, Music, Gamepad2, Dumbbell, Baby, Wrench } from 'lucide-react';

export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Laptop,
    description: 'Cameras, laptops, gaming consoles, phones',
    itemCount: 156,
    popular: true
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    icon: Car,
    description: 'Cars, bikes, scooters, trucks',
    itemCount: 89,
    popular: true
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    icon: Home,
    description: 'Furniture, appliances, tools, decor',
    itemCount: 234,
    popular: true
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: Camera,
    description: 'DSLR cameras, lenses, lighting equipment',
    itemCount: 67,
    popular: false
  },
  {
    id: 'music',
    name: 'Musical Instruments',
    icon: Music,
    description: 'Guitars, keyboards, drums, speakers',
    itemCount: 45,
    popular: false
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: Gamepad2,
    description: 'Consoles, games, VR headsets, accessories',
    itemCount: 78,
    popular: false
  },
  {
    id: 'fitness',
    name: 'Sports & Fitness',
    icon: Dumbbell,
    description: 'Exercise equipment, bikes, outdoor gear',
    itemCount: 123,
    popular: false
  },
  {
    id: 'baby-kids',
    name: 'Baby & Kids',
    icon: Baby,
    description: 'Strollers, toys, cribs, car seats',
    itemCount: 92,
    popular: false
  },
  {
    id: 'tools',
    name: 'Tools & Equipment',
    icon: Wrench,
    description: 'Power tools, hand tools, machinery',
    itemCount: 145,
    popular: false
  }
];