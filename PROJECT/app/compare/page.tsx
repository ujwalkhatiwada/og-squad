'use client'

import { useState } from 'react'

const mockData = {
  'MRI Scan': [
    { hospital: 'City Hospital', price: 5000 },
    { hospital: 'Metro Clinic', price: 4500 },
    { hospital: 'Health Center', price: 4800 },
  ],
  'Blood Test': [
    { hospital: 'City Hospital', price: 200 },
    { hospital: 'Metro Clinic', price: 180 },
    { hospital: 'Health Center', price: 220 },
  ],
}

export default function ComparePage() {
  const [procedure, setProcedure] = useState('')
  const [results, setResults] = useState<any[]>([])

  const handleCompare = () => {
    if (mockData[procedure as keyof typeof mockData]) {
      setResults(mockData[procedure as keyof typeof mockData])
    } else {
      setResults([])
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">🔍 Compare Medical Prices</h1>
      <input
        type="text"
        placeholder="Enter procedure (e.g., MRI Scan)"
        value={procedure}
        onChange={(e) => setProcedure(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button onClick={handleCompare} className="bg-blue-500 text-white px-4 py-2 rounded">Compare</button>
      {results.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Price Comparison</h2>
          <ul>
            {results.map((item, index) => (
              <li key={index} className="mb-2">
                {item.hospital}: ${item.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-green-600">Cheapest option: {results.reduce((min, item) => item.price < min.price ? item : min).hospital} at ${results.reduce((min, item) => item.price < min.price ? item : min).price}</p>
        </div>
      )}
    </div>
  )
}