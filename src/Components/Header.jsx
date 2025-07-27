import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Visual Sort
          </h1>
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-gray-200">VISUALIZE SORT</h2>
            <p className="text-gray-400 text-lg">Experience Sorting Algorithms in Action</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-200">
            Sorting Algorithms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { path: "/bubble", name: "Bubble Sort" },
              { path: "/selection", name: "Selection Sort" },
              { path: "/merge", name: "Merge Sort" },
              { path: "/quick", name: "Quick Sort" },
              { path: "/insertion", name: "Insertion Sort" },
              { path: "/heap", name: "Heap Sort" }
            ].map((algorithm) => (
              <NavLink
                key={algorithm.path}
                to={algorithm.path}
                className={({ isActive }) =>
                  `block p-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 shadow-lg transform scale-105"
                      : "bg-gray-700 hover:bg-gray-600 hover:shadow-md"
                  }`
                }
              >
                <button className="w-full text-lg font-medium">
                  {algorithm.name}
                </button>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header