import React from 'react';
import { useState } from 'react';

async function insertionSort(arr, setArray) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    arr[j + 1] = key;
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return arr;
}

const Insertion = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState();
  const [element, setelement] = useState("");

  const handleSort = async () => {
    let arr = array.map(Number);
    await insertionSort(arr, setArray);
  };

  const handleGenerateArray = () => {
    const newArray = element.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
    if (newArray.length == size) {
      setArray(newArray);
    } else {
      alert(`Please enter exactly ${size} numbers.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center py-8 px-4">
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-red-600">
          Insertion Sort Visualization
        </h1>

        <div className="bg-gray-800 rounded-lg p-8 shadow-xl mb-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300 text-center">Array Size</h2>
              <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="Size of Array"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 text-white text-center"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300 text-center">Array Elements</h2>
              <input
                value={element}
                onChange={(e) => setelement(e.target.value)}
                placeholder="Enter comma-separated numbers"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 text-white text-center"
              />
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={handleGenerateArray}
              className="px-8 py-3 bg-rose-600 hover:bg-rose-700 rounded-md transition-colors duration-200 font-medium text-lg"
            >
              Set Array
            </button>
            <button
              onClick={handleSort}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 font-medium text-lg"
            >
              Sort
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
          <div className="flex items-end justify-center h-[350px] gap-3">
            {array.map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-16 bg-gradient-to-t from-rose-600 to-red-400 rounded-t-md transition-all duration-500 ease-in-out"
                  style={{ height: `${value * 4}px` }}
                />
                <span className="mt-3 text-sm text-gray-400 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insertion;
