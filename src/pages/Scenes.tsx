import React from 'react';
import { Sun, Moon, Coffee, Tv, Book, Bed } from 'lucide-react';

const scenes = [
  {
    id: 'morning',
    name: 'Good Morning',
    icon: Coffee,
    description: 'Opens blinds, turns on lights, starts coffee maker',
    active: false
  },
  {
    id: 'day',
    name: 'Daytime',
    icon: Sun,
    description: 'Optimal lighting and temperature for productivity',
    active: true
  },
  {
    id: 'evening',
    name: 'Evening',
    icon: Moon,
    description: 'Dim lights and comfortable temperature',
    active: false
  },
  {
    id: 'movie',
    name: 'Movie Time',
    icon: Tv,
    description: 'Dark room with accent lighting',
    active: false
  },
  {
    id: 'reading',
    name: 'Reading',
    icon: Book,
    description: 'Warm lighting and peaceful atmosphere',
    active: false
  },
  {
    id: 'sleep',
    name: 'Sleep',
    icon: Bed,
    description: 'All lights off, optimal sleeping temperature',
    active: false
  }
];

function Scenes() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Scenes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scenes.map((scene) => {
          const Icon = scene.icon;
          return (
            <div
              key={scene.id}
              className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition hover:scale-105 ${
                scene.active ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${
                  scene.active ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{scene.name}</h3>
                  <p className="text-sm text-gray-600">{scene.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Scenes;