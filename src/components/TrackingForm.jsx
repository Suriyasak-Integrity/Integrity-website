'use client';

import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    // In a real app, this would submit to a tracking API
    // For demo purposes, we'll just show success
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setTrackingNumber('');
    }, 3000);
  };

  // Render tracking form or success message
  const renderContent = () => {
    if (submitted) {
      return (
        <div className="text-green-600 dark:text-green-400 py-4 text-center">
          <p>Tracking request submitted for number: <strong>{trackingNumber}</strong></p>
          <p className="text-sm mt-2">This is a demo. In a real application, you would be redirected to tracking results.</p>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <div className="flex-grow">
          <label htmlFor="tracking-number" className="sr-only">
            Tracking Number
          </label>
          <input
            id="tracking-number"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Enter your tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-secondary hover:bg-secondary-dark text-white rounded-md transition-colors flex items-center justify-center md:justify-start"
        >
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Track
        </button>
      </form>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
        Track Your Shipment
      </h3>

      {renderContent()}

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>Need help? <a href="/contact" className="text-secondary hover:underline">Contact our customer service</a></p>
      </div>
    </div>
  );
}
