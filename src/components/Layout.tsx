import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, Lightbulb, Settings, User, Menu } from 'lucide-react';

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Top Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">Smart Home</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
              }
            >
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </NavLink>
            <NavLink
              to="/scenes"
              className={({ isActive }) =>
                `flex flex-col items-center ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
              }
            >
              <Lightbulb className="h-6 w-6" />
              <span className="text-xs mt-1">Scenes</span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex flex-col items-center ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
              }
            >
              <Settings className="h-6 w-6" />
              <span className="text-xs mt-1">Settings</span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex flex-col items-center ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
              }
            >
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Profile</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Layout