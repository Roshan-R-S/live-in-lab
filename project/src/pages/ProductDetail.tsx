import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Phone, Mail, MapPin, Award, Star, Heart, Share2 } from 'lucide-react';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';
import { mockProducts } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  
  const product = mockProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate('/products')}
          className="btn btn-primary"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    toast.success('Added to cart!');
  };

  const handleBuyNow = () => {
    addToCart({ ...product, quantity: 1 });
    navigate('/checkout');
  };

  const handleStartCall = () => {
    navigate(`/call/${product.farmer.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Heart className="h-5 w-5" />
              Save
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Share2 className="h-5 w-5" />
              Share
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl text-green-600 font-bold">₹{product.price}/{product.unit}</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">{product.detailedDescription}</p>
            
            <div>
              <h3 className="font-semibold mb-2">Benefits:</h3>
              <ul className="list-disc list-inside space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-600">{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Nutritional Information:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>Calories: {product.nutritionalInfo.calories}kcal</div>
                <div>Protein: {product.nutritionalInfo.protein}g</div>
                <div>Carbs: {product.nutritionalInfo.carbs}g</div>
                <div>Fat: {product.nutritionalInfo.fat}g</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="btn btn-secondary flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="btn btn-primary flex-1"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Farmer Information */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-bold mb-4">About the Farmer</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={product.farmer.image}
                  alt={product.farmer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{product.farmer.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {product.farmer.experience} years of farming experience
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span>{product.farmer.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-gray-500" />
                  <span>{product.farmer.certifications.join(', ')}</span>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {product.farmer.availableForCall && (
                  <button
                    onClick={handleStartCall}
                    className="w-full btn btn-secondary flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Start Video Call
                  </button>
                )}
                <a
                  href={`mailto:${product.farmer.email}`}
                  className="w-full btn btn-secondary flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}