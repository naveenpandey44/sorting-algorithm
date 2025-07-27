import React from 'react';
import {useState} from 'react'

async function quickSort(arr, setArray, low = 0, high = arr.length - 1) {
  if (low < high) {
      let pivotIndex = await partition(arr, low, high, setArray);
      await quickSort(arr, setArray, low, pivotIndex - 1);
      await quickSort(arr, setArray, pivotIndex + 1, high);
  }
  return arr;
}

async function partition(arr, low, high, setArray) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 400));
      }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return i + 1;
}


const Quick = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState();
  const [element, setelement] = useState("");

  const handleSort = async () => {
    let arr = array.map(Number);
    await quickSort(arr, setArray);
    setArray(arr);
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
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">
          Quick Sort Visualization
        </h1>

        <div className="bg-gray-800 rounded-lg p-6 shadow-xl mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300">Array Size</h2>
              <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="Size of Array"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300">Array Elements</h2>
              <input
                value={element}
                onChange={(e) => setelement(e.target.value)}
                placeholder="Enter comma-separated numbers"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleGenerateArray}
              className="px-6 py-2 bg-amber-600 hover:bg-amber-700 rounded-md transition-colors duration-200 font-medium"
            >
              Set Array
            </button>
            <button
              onClick={handleSort}
              className="px-6 py-2 bg-orange-600 hover:bg-orange-700 rounded-md transition-colors duration-200 font-medium"
            >
              Sort
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
          <div className="flex items-end justify-center h-[300px] gap-2">
            {array.map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-12 bg-gradient-to-t from-amber-600 to-orange-400 rounded-t-md transition-all duration-500 ease-in-out"
                  style={{ height: `${value * 3}px` }}
                />
                <span className="mt-2 text-sm text-gray-400">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quick
