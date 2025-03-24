'use client';
import React, { useState } from 'react';

export default function RatesCalculator() {
  const [weight, setWeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const [cost, setCost] = useState(0);

  const calculate = () => {
    const baseRate = 5; // ✅ Rate ต่อกิโลกรัมต่อกิโลเมตร
    setCost(weight * distance * baseRate);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Rates Calculator</h2>

      {/* น้ำหนัก */}
      <div className="mb-4">
        <label className="block mb-1">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* ระยะทาง */}
      <div className="mb-4">
        <label className="block mb-1">Distance (km)</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(parseFloat(e.target.value) || 0)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* ปุ่มคำนวณ */}
      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>

      {/* แสดงผล */}
      <div className="mt-4 text-lg font-semibold">
        Estimated Cost: ${cost.toFixed(2)}
      </div>
    </div>
  );
}
