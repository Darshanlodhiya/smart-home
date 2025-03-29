import React from 'react';
import { useParams } from 'react-router-dom';
import { Sun, Moon, ThermometerSun, ChevronUp, ChevronDown, Coffee, Power } from 'lucide-react';

const roomData = {
  "living-room": {
    name: "Living Room",
    temperature: 72,
    lights: true,
    blinds: true,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
  },
  "kitchen": {
    name: "Kitchen",
    temperature: 70,
    lights: false,
    appliances: {
      coffee_maker: false,
      dishwasher: false
    },
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1000"
  },
  "bedroom": {
    name: "Bedroom",
    temperature: 68,
    lights: false,
    blinds: false,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1000"
  }
};

function RoomDetail() {
  const { roomId } = useParams<{ roomId: string }>();
  const room = roomId ? roomData[roomId as keyof typeof roomData] : null;

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="h-48 relative rounded-xl overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
          <h1 className="text-2xl font-bold text-white">{room.name}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Lights Control */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Lights</h2>
          <button
            className={`w-full flex items-center justify-center gap-2 p-4 rounded-lg transition-colors ${
              room.lights ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {room.lights ? <Sun size={24} /> : <Moon size={24} />}
            <span>Lights: {room.lights ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        {/* Temperature Control */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Temperature</h2>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ThermometerSun size={24} />
              <span className="text-2xl">{room.temperature}°F</span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-500 text-white rounded p-3 hover:bg-blue-600">
                <ChevronDown size={24} className="mx-auto" />
              </button>
              <button className="flex-1 bg-red-500 text-white rounded p-3 hover:bg-red-600">
                <ChevronUp size={24} className="mx-auto" />
              </button>
            </div>
          </div>
        </div>

        {/* Blinds Control */}
        {'blinds' in room && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Blinds</h2>
            <button
              className={`w-full flex items-center justify-center gap-2 p-4 rounded-lg transition-colors ${
                room.blinds ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Sun size={24} />
              <span>Blinds: {room.blinds ? 'OPEN' : 'CLOSED'}</span>
            </button>
          </div>
        )}

        {/* Kitchen Appliances */}
        {'appliances' in room && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Appliances</h2>
            <div className="space-y-4">
              <button
                className={`w-full flex items-center justify-center gap-2 p-4 rounded-lg transition-colors ${
                  room.appliances.coffee_maker ? 'bg-brown-100 text-brown-700' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Coffee size={24} />
                <span>Coffee Maker: {room.appliances.coffee_maker ? 'ON' : 'OFF'}</span>
              </button>
              <button
                className={`w-full flex items-center justify-center gap-2 p-4 rounded-lg transition-colors ${
                  room.appliances.dishwasher ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Power size={24} />
                <span>Dishwasher: {room.appliances.dishwasher ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomDetail;