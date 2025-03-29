import React from 'react';
import { User, Mail, Phone, Home, Bell, Shield, LogOut } from 'lucide-react';

function Profile() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Smart Home Ave, Tech City, TC 12345',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-4">
          <img
            src={user.image}
            alt={user.name}
            className="h-20 w-20 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">Smart Home Owner</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3 text-gray-700">
            <Mail className="h-5 w-5" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <Phone className="h-5 w-5" />
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <Home className="h-5 w-5" />
            <span>{user.address}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg divide-y">
        <button className="w-full p-4 flex items-center space-x-3 text-gray-700 hover:bg-gray-50">
          <Bell className="h-5 w-5" />
          <span>Notification Preferences</span>
        </button>
        <button className="w-full p-4 flex items-center space-x-3 text-gray-700 hover:bg-gray-50">
          <Shield className="h-5 w-5" />
          <span>Privacy Settings</span>
        </button>
        <button className="w-full p-4 flex items-center space-x-3 text-red-600 hover:bg-gray-50">
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;