import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white relative overflow-hidden flex flex-col">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Main Container - Perfectly Centered */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 w-full">
          <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 drop-shadow-2xl">
            Visual Sort
          </h1>
          <p className="text-2xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto mb-6">
          </p>

          {/* Decorative Line */}
          <div className="flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-12 text-gray-100 tracking-wide">
            Choose Your Algorithm
          </h3>
          
          {/* Cards Grid - Perfect Center */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
              {[
                { path: "/bubble", name: "Bubble Sort", icon: "🫧", color: "from-red-500 to-pink-600" },
                { path: "/selection", name: "Selection Sort", icon: "🎯", color: "from-orange-500 to-yellow-600" },
                { path: "/merge", name: "Merge Sort", icon: "🔀", color: "from-green-500 to-emerald-600" },
                { path: "/quick", name: "Quick Sort", icon: "⚡", color: "from-blue-500 to-cyan-600" },
                { path: "/insertion", name: "Insertion Sort", icon: "📝", color: "from-purple-500 to-violet-600" },
                { path: "/heap", name: "Heap Sort", icon: "🏔️", color: "from-indigo-500 to-purple-600" }
              ].map((algorithm) => (
                <div className="my-6" key={algorithm.path}>
                  <NavLink
                    to={algorithm.path}
                    className={({ isActive }) =>
                      `group block p-8 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 mx-auto w-full max-w-sm ${
                        isActive
                          ? `bg-gradient-to-r ${algorithm.color} shadow-2xl scale-105 border-2 border-white/30`
                          : "bg-gray-800/70 backdrop-blur-sm border border-gray-600/50 hover:bg-gray-700/80 hover:shadow-2xl hover:border-gray-500/70"
                      }`
                    }
                  >
                    <div className="text-center space-y-4">
                      <div className="text-4xl mb-3">{algorithm.icon}</div>
                      <h4 className="text-2xl font-bold group-hover:text-blue-300 transition-colors duration-300">
                        {algorithm.name}
                      </h4>
                      <div className="w-0 group-hover:w-20 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transition-all duration-300"></div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-12">
          <div className="inline-flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Header;
