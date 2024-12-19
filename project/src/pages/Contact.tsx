import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">
                        123 Organic Valley,<br />
                        Green Street, Eco City,<br />
                        Chennai - 600007
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">
                        +91 94897 14682<br />
                        +91 98412 63009
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">
                        info@FC-Choice.com<br />
                        support@FC-Choice.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 9:00 AM - 8:00 PM<br />
                        Sunday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="input"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.152082195716!2d80.2524973751814!3d13.089546387236792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e77a8ecab7%3A0x2d5a43a53faa9871!2s14%2F27%2C%20Murugappa%20St%2C%20Perumalpet%2C%20Purasaiwakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600007!5e0!3m2!1sen!2sin!4v1732456506278!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}