import React from 'react';
import { Leaf, ShieldCheck, Heart } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    name: "David Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Priya Patel",
    role: "Quality Assurance Manager",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80"
          alt="Organic farming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">About FC Choice</h1>
            <p className="text-xl">Bringing nature's goodness to your doorstep</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At FC Choice, we believe in making organic, sustainable living accessible to everyone.
            Our journey began in 2020 with a simple idea: to connect local organic farmers directly
            with conscious consumers, ensuring fair prices for producers and quality products for customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We work with farmers who practice sustainable agriculture, protecting our environment for future generations.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              Supporting local farmers and building a community of health-conscious individuals.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <ShieldCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              Every product undergoes strict quality checks to ensure you receive only the best.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Founded in 2020, FC Choice began with a simple idea: to make organic products more accessible while supporting local farmers.
          We believe that everyone deserves access to fresh, chemical-free produce that's good for both their health and the environment.
        </p>
        <p className="text-gray-600">
          Today, we work with over 100 certified organic farmers across the country, bringing you the freshest seasonal produce, dairy
          products, and pantry essentials. Our commitment to sustainability extends beyond our products to our packaging and delivery methods.
        </p>
      </div>

      {/* Values Section */}
      <div className="bg-green-50 rounded-lg p-8 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We're committed to environmentally friendly farming practices and packaging.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-gray-600">
              We believe in complete transparency about our products and their sources.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fair Trade</h3>
            <p className="text-gray-600">
              Supporting farmers with fair prices and sustainable partnerships.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              Maintaining the highest standards in organic certification and quality.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals working to bring fresh, organic produce to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-green-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}