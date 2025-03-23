/* eslint-disable-next-line */
/** @format */
"use strict";

'use client';
import React, { useState, useEffect } from 'react';
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon';

// Mock data for rates calculation
const rateData = {
  air: {
    baseRate: 12.5, // per kg
    fuelSurcharge: 0.18, // 18% of base rate
    minWeight: 1,
    destinations: {
      asia: 1.0,
      europe: 2.2,
      northAmerica: 2.0,
      australia: 1.8,
      africa: 2.5,
      southAmerica: 2.3,
    },
  },
  sea: {
    baseRate: {
      '20ft': 1200, // per container
      '40ft': 2100, // per container
      lcl: 45, // per cbm (cubic meter)
    },
    fuelSurcharge: 0.15, // 15% of base rate
    destinations: {
      asia: 1.0,
      europe: 1.8,
      northAmerica: 1.7,
      australia: 1.5,
      africa: 2.2,
      southAmerica: 2.0,
    },
  },
  land: {
    baseRate: 1.8, // per km per ton
    minWeight: 0.5, // tons
    fuelSurcharge: 0.12, // 12% of base rate
    destinations: {
      domestic: 1.0,
      crossBorder: 1.5,
    },
  },
};

// Safe accessor functions without TypeScript type annotations
function getAirDestinationMultiplier(destination) {
  return rateData.air.destinations[destination] || 1.0;
}

function getSeaDestinationMultiplier(destination) {
  return rateData.sea.destinations[destination] || 1.0;
}

function getLandDestinationMultiplier(destination) {
  return rateData.land.destinations[destination] || 1.0;
}

function getContainerBaseRate(containerType) {
  return rateData.sea.baseRate[containerType] || 1200;
}

export default function RatesCalculator() {
  const [shipmentType, setShipmentType] = useState('air');
  const [destination, setDestination] = useState('asia');
  const [weight, setWeight] = useState(10);
  const [dimensions, setDimensions] = useState({ length: 100, width: 100, height: 100 });
  const [containerType, setContainerType] = useState('20ft');
  const [distance, setDistance] = useState(500);
  const [estimatedRate, setEstimatedRate] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get available destinations based on shipment type
  const getDestinations = () => {
    if (shipmentType === 'land') {
      return Object.keys(rateData.land.destinations);
    }
    return Object.keys(rateData.air.destinations);
  };

  // Calculate volumetric weight (for air freight)
  const calculateVolumetricWeight = () => {
    const volumeCbm = (dimensions.length * dimensions.width * dimensions.height) / 1000000; // Convert to CBM
    // Air freight standard: 1 CBM = 167 kg volumetric weight
    return volumeCbm * 167;
  };

  // Calculate actual rates
  const calculateRates = () => {
    setLoading(true);
    setShowResult(false);

    // Simulate API call delay
    setTimeout(() => {
      let rate = 0;
      let cost = 0;

      if (shipmentType === 'air') {
        const volumetricWeight = calculateVolumetricWeight();
        const chargeableWeight = Math.max(weight, volumetricWeight, rateData.air.minWeight);
        const destMultiplier = getAirDestinationMultiplier(destination);
        rate = rateData.air.baseRate * destMultiplier;
        const fuelCharge = rate * rateData.air.fuelSurcharge;
        cost = (rate + fuelCharge) * chargeableWeight;
      } else if (shipmentType === 'sea') {
        if (containerType === 'lcl') {
          // LCL: Calculate volume in CBM
          const volumeCbm = (dimensions.length * dimensions.width * dimensions.height) / 1000000;
          const baseRate = rateData.sea.baseRate.lcl;
          const destMultiplier = getSeaDestinationMultiplier(destination);
          rate = baseRate * destMultiplier;
          cost = rate * volumeCbm * (1 + rateData.sea.fuelSurcharge);
        } else {
          // FCL: Fixed rate per container
          const baseRate = getContainerBaseRate(containerType);
          const destMultiplier = getSeaDestinationMultiplier(destination);
          rate = baseRate * destMultiplier;
          cost = rate * (1 + rateData.sea.fuelSurcharge);
        }
      } else if (shipmentType === 'land') {
        const actualWeight = Math.max(weight, rateData.land.minWeight);
        const destMultiplier = getLandDestinationMultiplier(destination);
        rate = rateData.land.baseRate * destMultiplier;
        cost = rate * distance * actualWeight * (1 + rateData.land.fuelSurcharge);
      }

      setEstimatedRate(parseFloat(rate.toFixed(2)));
      setTotalCost(parseFloat(cost.toFixed(2)));
      setShowResult(true);
      setLoading(false);
    }, 1000);
  };

  // Reset form when shipment type changes
  useEffect(() => {
    setShowResult(false);
    // Set default destination based on shipment type
    if (shipmentType === 'land') {
      setDestination('domestic');
    } else {
      setDestination('asia');
    }
  }, [shipmentType]);

  // Helper function to get rate unit
  const getRateUnit = () => {
    if (shipmentType === 'air') {
      return 'per kg';
    } else if (shipmentType === 'sea') {
      return containerType === 'lcl' ? 'per CBM' : 'per container';
    } else if (shipmentType === 'land') {
      return 'per km per ton';
    }
    return '';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary dark:text-white mb-6 flex items-center">
        <CurrencyDollarIcon className="h-6 w-6 mr-2 text-secondary" />
        Shipping Rates Calculator
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shipment Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Shipment Type
            </label>
            <select
              value={shipmentType}
              onChange={(e) => setShipmentType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
            >
              <option value="air">Air Freight</option>
              <option value="sea">Sea Freight</option>
              <option value="land">Land Transport</option>
            </select>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Destination
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
            >
              {getDestinations().map((dest) => (
                <option key={dest} value={dest}>
                  {dest.charAt(0).toUpperCase() + dest.slice(1).replace(/([A-Z])/g, ' $1')}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Shipment Details (conditional based on shipment type) */}
        {shipmentType === 'air' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Dimensions (cm)
              </label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <input
                    type="number"
                    min="1"
                    placeholder="Length"
                    value={dimensions.length}
                    onChange={(e) => setDimensions({...dimensions, length: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    placeholder="Width"
                    value={dimensions.width}
                    onChange={(e) => setDimensions({...dimensions, width: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    placeholder="Height"
                    value={dimensions.height}
                    onChange={(e) => setDimensions({...dimensions, height: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {`Volume: ${((dimensions.length * dimensions.width * dimensions.height) / 1000000).toFixed(2)} CBM / Volumetric weight: ${calculateVolumetricWeight().toFixed(2)} kg`}
              </p>
            </div>
          </div>
        )}

        {shipmentType === 'sea' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Container Type
                </label>
                <select
                  value={containerType}
                  onChange={(e) => setContainerType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                >
                  <option value="20ft">20ft Container (FCL)</option>
                  <option value="40ft">40ft Container (FCL)</option>
                  <option value="lcl">Less than Container Load (LCL)</option>
                </select>
              </div>
            </div>

            {containerType === 'lcl' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Dimensions (cm)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <input
                      type="number"
                      min="1"
                      placeholder="Length"
                      value={dimensions.length}
                      onChange={(e) => setDimensions({...dimensions, length: parseInt(e.target.value) || 0})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      min="1"
                      placeholder="Width"
                      value={dimensions.width}
                      onChange={(e) => setDimensions({...dimensions, width: parseInt(e.target.value) || 0})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      min="1"
                      placeholder="Height"
                      value={dimensions.height}
                      onChange={(e) => setDimensions({...dimensions, height: parseInt(e.target.value) || 0})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {`Volume: ${((dimensions.length * dimensions.width * dimensions.height) / 1000000).toFixed(2)} CBM`}
                </p>
              </div>
            )}
          </div>
        )}

        {shipmentType === 'land' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Weight (tons)
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Distance (km)
                </label>
                <input
                  type="number"
                  min="1"
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        <div className="mt-4">
          <button
            type="button"
            onClick={calculateRates}
            disabled={loading}
            className="w-full md:w-auto px-6 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-md transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Calculating...
              </>
            ) : (
              'Calculate Estimate'
            )}
          </button>
        </div>
      </form>

      {showResult && (
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Estimated Shipping Costs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Base Rate:</p>
              <p className="text-lg font-semibold">${estimatedRate} {getRateUnit()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Estimated Cost:</p>
              <p className="text-2xl font-bold text-secondary">${totalCost}</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <p className="mb-1">
              * This is only an estimate. Actual shipping costs may vary based on specific requirements,
              current fuel prices, and other factors.
            </p>
            <p>
              * For a detailed quote, please <a href="/contact" className="text-secondary hover:underline">contact our team</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
