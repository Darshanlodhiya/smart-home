import React from 'react';
import { Bell, Shield, Wifi, Thermometer, Clock, Globe, Moon, Volume2, ChevronRight } from 'lucide-react';

const settings = [
  {
    id: 'notifications',
    name: 'Notifications',
    icon: Bell,
    description: 'Manage your notification preferences'
  },
  {
    id: 'security',
    name: 'Security',
    icon: Shield,
    description: 'Security settings and device access'
  },
  {
    id: 'network',
    name: 'Network',
    icon: Wifi,
    description: 'Wi-Fi and network configuration'
  },
  {
    id: 'climate',
    name: 'Climate Control',
    icon: Thermometer,
    description: 'Temperature and humidity settings'
  },
  {
    id: 'schedule',
    name: 'Schedules',
    icon: Clock,
    description: 'Automated routines and timers'
  },
  {
    id: 'location',
    name: 'Location',
    icon: Globe,
    description: 'Location-based automation'
  },
  {
    id: 'night-mode',
    name: 'Night Mode',
    icon: Moon,
    description: 'Night time settings and quiet hours'
  },
  {
    id: 'sound',
    name: 'Sound',
    icon: Volume2,
    description: 'System sounds and notifications'
  }
];

function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      
      <div className="bg-white rounded-xl shadow-lg divide-y">
        {settings.map((setting) => {
          const Icon = setting.icon;
          return (
            <div
              key={setting.id}
              className="p-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-50"
            >
              <div className="p-2 rounded-full bg-gray-100">
                <Icon className="h-6 w-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">{setting.name}</h3>
                <p className="text-sm text-gray-600">{setting.description}</p>
              </div>
              <div className="text-gray-400">
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Settings;