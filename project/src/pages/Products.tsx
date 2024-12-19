import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Filter, ArrowUpDown } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Product } from '../types';

// Mock data with additional products
const mockProducts = [
  // Vegetables
  {
    id: '1',
    name: 'Organic Tomatoes',
    description: 'Fresh, locally grown organic tomatoes',
    price: 40,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1546470427-0d4db154cde7?auto=format&fit=crop&q=80',
    stock: 50,
    unit: 'kg'
  },
  {
    id: '2',
    name: 'Organic Spinach',
    description: 'Fresh and nutritious organic spinach',
    price: 30,
    category: 'vegetables',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80',
    stock: 40,
    unit: 'bunch'
  },
  // Fruits
  {
    id: '3',
    name: 'Organic Apples',
    description: 'Sweet and crispy organic apples',
    price: 120,
    category: 'fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80',
    stock: 40,
    unit: 'kg'
  },
  // Dairy Products
  {
    id: '4',
    name: 'Organic Milk',
    description: 'Fresh organic cow milk',
    price: 62,
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80',
    stock: 30,
    unit: 'liter'
  },
  {
    id: '5',
    name: 'Organic Yogurt',
    description: 'Creamy natural yogurt',
    price: 45,
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80',
    stock: 25,
    unit: '400g'
  },
  {
    id: '6',
    name: 'Organic Cheese',
    description: 'Artisanal organic cheese',
    price: 180,
    category: 'dairy',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80',
    stock: 20,
    unit: '200g'
  },
  // Millets
  {
    id: '7',
    name: 'Organic Foxtail Millet',
    description: 'Nutritious foxtail millet',
    price: 85,
    category: 'millets',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80',
    stock: 35,
    unit: 'kg'
  },
  {
    id: '8',
    name: 'Organic Pearl Millet',
    description: 'High-protein pearl millet',
    price: 75,
    category: 'millets',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80',
    stock: 30,
    unit: 'kg'
  },
  // Pulses
  {
    id: '9',
    name: 'Organic Green Moong Dal',
    description: 'Premium quality green moong dal',
    price: 120,
    category: 'pulses',
    image: 'https://images.unsplash.com/photo-1515543904379-b0a0102c8c77?auto=format&fit=crop&q=80',
    stock: 45,
    unit: 'kg'
  },
  {
    id: '10',
    name: 'Organic Masoor Dal',
    description: 'Red lentils rich in protein',
    price: 110,
    category: 'pulses',
    image: 'https://images.unsplash.com/photo-1585996950364-1f0b83d1b2b7?auto=format&fit=crop&q=80',
    stock: 40,
    unit: 'kg'
  }
];

const categories = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Millets', 'Pulses'];

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const currentCategory = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';

  const sortProducts = (products: Product[], sort: SortOption) => {
    return [...products].sort((a, b) => {
      switch (sort) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  };
  
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;
    
    // Apply category filter
    if (currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    return sortProducts(filtered, sortBy);
  }, [currentCategory, searchQuery, sortBy]);

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('category', category.toLowerCase());
    setSearchParams(params);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full md:w-48 pl-4 pr-8 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn btn-secondary flex items-center gap-2"
          >
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    currentCategory === category.toLowerCase()
                      ? 'bg-green-100 text-green-800'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}