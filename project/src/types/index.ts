export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  unit: string;
  farmer: Farmer;
  detailedDescription: string;
  benefits: string[];
  nutritionalInfo: NutritionalInfo;
  origin: string;
  harvestDate: string;
  organic: boolean;
}

export interface Farmer {
  id: string;
  name: string;
  image: string;
  location: string;
  experience: number;
  phone: string;
  email: string;
  availableForCall: boolean;
  certifications: string[];
}

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  vitamins: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'farmer';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AdminConfig {
  apiUrl: string;
  serverStatus: 'online' | 'offline';
}