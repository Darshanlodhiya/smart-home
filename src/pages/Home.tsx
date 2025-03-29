import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon, ThermometerSun } from 'lucide-react';

const rooms = {
  "living-room": {
    name: "Living Room",
    temperature: 72,
    lights: true,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
  },
  "kitchen": {
    name: "Kitchen",
    temperature: 70,
    lights: false,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1000"
  },
  "bedroom": {
    name: "Bedroom",
    temperature: 68,
    lights: false,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1000"
  }
};

function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome Home</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(rooms).map(([id, room]) => (
          <div
            key={id}
            onClick={() => navigate(`/room/${id}`)}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
          >
            <div className="h-48 relative">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <h3 className="text-white text-xl font-semibold">{room.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {room.lights ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-500" />
                  )}
                  <span>{room.lights ? 'On' : 'Off'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThermometerSun className="h-5 w-5 text-red-500" />
                  <span>{room.temperature}°F</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;