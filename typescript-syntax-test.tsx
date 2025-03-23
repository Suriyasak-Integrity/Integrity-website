'use client';

import { useState } from 'react';

const rateData = {
  air: {
    destinations: {
      asia: 1.0,
      europe: 2.2
    }
  }
};

export default function Test() {
  const [destination, setDestination] = useState('asia');

  // Test the syntax that might have issues
  const testFunction = () => {
    const destMultiplier = rateData.air.destinations[destination as keyof typeof rateData.air.destinations];
    console.log(destMultiplier);
  };

  return (
    <div>
      <button onClick={testFunction}>Test</button>
    </div>
  );
}
