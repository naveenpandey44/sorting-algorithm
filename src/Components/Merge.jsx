import React from 'react';
import {useState} from 'react'

async function mergeSort(arr, setArray) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = await mergeSort(arr.slice(0, middle), setArray);
  const right = await mergeSort(arr.slice(middle), setArray);

  return await merge(left, right, setArray);
}

async function merge(left, right, setArray) {
  let result = [], lIndex = 0, rIndex = 0;

  while (lIndex < left.length && rIndex < right.length) {
      if (left[lIndex] < right[rIndex]) {
          result.push(left[lIndex++]);
      } else {
          result.push(right[rIndex++]);
      }
      setArray([...result, ...left.slice(lIndex), ...right.slice(rIndex)]);
      await new Promise(resolve => setTimeout(resolve, 1000));
  }

  return [...result, ...left.slice(lIndex), ...right.slice(rIndex)];
}

const Merge = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState();
  const [element, setelement] = useState("");

  const handleSort = async () => {
    let arr = array.map(Number);
    const sortedArr = await mergeSort(arr, setArray);
    setArray(sortedArr);
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
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Merge Sort Visualization
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
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300">Array Elements</h2>
              <input
                value={element}
                onChange={(e) => setelement(e.target.value)}
                placeholder="Enter comma-separated numbers"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleGenerateArray}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors duration-200 font-medium"
            >
              Set Array
            </button>
            <button
              onClick={handleSort}
              className="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-md transition-colors duration-200 font-medium"
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
                  className="w-12 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-md transition-all duration-500 ease-in-out"
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

export default Merge
