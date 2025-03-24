'use client';
import Image from 'next/image';
import Link from 'next/link';
import RatesCalculator from '@/components/RatesCalculator';

export default function RatesPage() {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* หัวข้อหลัก */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">Shipping Rates & Pricing</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get instant estimates for shipping costs based on your specific requirements.
            Our competitive pricing ensures you get the best value for your logistics needs.
          </p>
        </div>

        {/* Calculator */}
        <div className="mb-12">
          <RatesCalculator />
        </div>

        {/* 3 จุดขาย */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="h-16 w-16 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white rounded-full flex items-center justify-center mx-auto mb-4">
              {/* icon */}
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Transparent Pricing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              No hidden fees or surprise charges. We provide clear, upfront pricing for all our services.
            </p>
          </div>
          {/* Card 2 */}
          {/* Card 3 */}
        </div>

        {/* Customized Pricing */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Customized Pricing for Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For businesses with regular shipping needs, we offer tailored pricing packages.
              </p>
              <Link href="/contact" className="inline-block px-6 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-md transition-colors">
                Get a Custom Quote
              </Link>
            </div>
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/logistics-hero.jpg"
                alt="Logistics Container Shipment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Frequently Asked Questions</h2>
          {/* FAQ Content */}
        </div>
      </div>
    </div>
  );
}
