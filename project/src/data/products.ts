import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    description: 'Fresh, locally grown organic tomatoes',
    detailedDescription: 'Our organic tomatoes are grown with care in nutrient-rich soil without the use of synthetic pesticides or fertilizers. Each tomato is hand-picked at peak ripeness to ensure the best flavor and nutritional value.',
    price: 40,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1546470427-0d4db154cde7?auto=format&fit=crop&q=80',
    stock: 50,
    unit: 'kg',
    benefits: [
      'Rich in lycopene and antioxidants',
      'Supports heart health',
      'Promotes healthy skin',
      'Boosts immune system'
    ],
    nutritionalInfo: {
      calories: 22,
      protein: 1.1,
      carbs: 4.8,
      fat: 0.2,
      fiber: 1.5,
      vitamins: ['Vitamin C', 'Vitamin K', 'Potassium', 'Folate']
    },
    origin: 'Karnataka, India',
    harvestDate: '2024-03-15',
    organic: true,
    farmer: {
      id: 'f1',
      name: 'Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1555582874-cb3064e5be06?auto=format&fit=crop&q=80',
      location: 'Bangalore Rural',
      experience: 15,
      phone: '+91 98765 43210',
      email: 'rajesh@fcfarmers.com',
      availableForCall: true,
      certifications: ['Organic Certification', 'Good Agricultural Practices']
    }
  },
  {
    id: '2',
    name: 'Organic Spinach',
    description: 'Fresh, locally grown organic spinach',
    detailedDescription: 'Our organic spinach is carefully cultivated in nutrient-rich soil, without the use of synthetic pesticides or fertilizers. Each leaf is hand-picked at the peak of freshness, ensuring optimal flavor and nutritional benefits.',
    price: 40,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80',
    stock: 50,
    unit: 'kg',
    benefits: [
      'Rich in lycopene and antioxidants',
      'Supports heart health',
      'Promotes healthy skin',
      'Boosts immune system'
    ],
    nutritionalInfo: {
      calories: 22,
      protein: 1.1,
      carbs: 4.8,
      fat: 0.2,
      fiber: 1.5,
      vitamins: ['Vitamin C', 'Vitamin K', 'Potassium', 'Folate']
    },
    origin: 'Karnataka, India',
    harvestDate: '2024-03-15',
    organic: true,
    farmer: {
      id: 'f1',
      name: 'Kumaran',
      image: 'https://images.unsplash.com/photo-1555582874-cb3064e5be06?auto=format&fit=crop&q=80',
      location: 'Bangalore Rural',
      experience: 15,
      phone: '+91 98765 43210',
      email: 'rajesh@fcfarmers.com',
      availableForCall: true,
      certifications: ['Organic Certification', 'Good Agricultural Practices']
    }
  },
   {
    id: '3',
    name: 'Organic Apples',
    description: 'Sweet and crispy organic apples',
    detailedDescription: 'Our organic apples are cultivated with meticulous care in nutrient-rich soil, free from synthetic pesticides and fertilizers. Each apple is hand-picked at the peak of ripeness, guaranteeing exceptional flavor and nutritional value.',
    price: 40,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80',
    stock: 50,
    unit: 'kg',
    benefits: [
      'Rich in lycopene and antioxidants',
      'Supports heart health',
      'Promotes healthy skin',
      'Boosts immune system'
    ],
    nutritionalInfo: {
      calories: 22,
      protein: 1.1,
      carbs: 4.8,
      fat: 0.2,
      fiber: 1.5,
      vitamins: ['Vitamin C', 'Vitamin K', 'Potassium', 'Folate']
    },
    origin: 'Karnataka, India',
    harvestDate: '2024-03-15',
    organic: true,
    farmer: {
      id: 'f1',
      name: 'Kumaran',
      image: 'https://images.unsplash.com/photo-1555582874-cb3064e5be06?auto=format&fit=crop&q=80',
      location: 'Bangalore Rural',
      experience: 15,
      phone: '+91 98765 43210',
      email: 'rajesh@fcfarmers.com',
      availableForCall: true,
      certifications: ['Organic Certification', 'Good Agricultural Practices']
    }
  },
  {
    id: '4',
    name: 'Organic Milk',
    description: 'Fresh organic cow milk',
    detailedDescription: 'Our organic milk is produced with utmost care from cows raised on nutrient-rich, chemical-free pastures. Each drop is harvested and processed naturally to preserve its wholesome flavor and nutritional integrity.',
    price: 40,
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80',
    stock: 50,
    unit: 'kg',
    benefits: [
      'Rich in lycopene and antioxidants',
      'Supports heart health',
      'Promotes healthy skin',
      'Boosts immune system'
    ],
    nutritionalInfo: {
      calories: 22,
      protein: 1.1,
      carbs: 4.8,
      fat: 0.2,
      fiber: 1.5,
      vitamins: ['Vitamin C', 'Vitamin K', 'Potassium', 'Folate']
    },
    origin: 'Karnataka, India',
    harvestDate: '2024-03-15',
    organic: true,
    farmer: {
      id: 'f1',
      name: 'Kumaran',
      image: 'https://images.unsplash.com/photo-1555582874-cb3064e5be06?auto=format&fit=crop&q=80',
      location: 'Bangalore Rural',
      experience: 15,
      phone: '+91 98765 43210',
      email: 'rajesh@fcfarmers.com',
      availableForCall: true,
      certifications: ['Organic Certification', 'Good Agricultural Practices']
    }
  },
];