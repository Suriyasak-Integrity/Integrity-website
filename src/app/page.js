import Image from 'next/image';
import Link from 'next/link';
import { TrackingForm } from '@/components/TrackingForm';
import { ArrowRightIcon, ArrowsRightLeftIcon, TruckIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Trusted Logistics Partner in Thailand
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Comprehensive freight forwarding, customs clearance, and logistics
              solutions that go beyond expectations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/tracking"
                className="btn bg-secondary hover:bg-secondary-dark text-white"
              >
                Track Shipment
              </Link>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Request a Quote
              </Link>
            </div>

            {/* Tracking Form */}
            <TrackingForm />
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/logistics-hero.jpg"
                alt="Logistics operations"
                className="object-cover"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <h2 className="section-title dark:text-white">Our Services</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          We offer a wide range of logistics and freight forwarding services to meet your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="service-card dark:bg-gray-800 dark:border-secondary">
            <div className="mb-4 text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Customs Clearance</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Expert handling of all customs documentation and procedures.
            </p>
            <Link href="/services/customs-clearance" className="text-secondary font-medium hover:underline">
              Learn More &rarr;
            </Link>
          </div>

          <div className="service-card dark:bg-gray-800 dark:border-secondary">
            <div className="mb-4 text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Air Freight</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Fast and reliable international air freight services.
            </p>
            <Link href="/services/air-freight" className="text-secondary font-medium hover:underline">
              Learn More &rarr;
            </Link>
          </div>

          <div className="service-card dark:bg-gray-800 dark:border-secondary">
            <div className="mb-4 text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Sea Freight</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Cost-effective sea freight solutions for your cargo.
            </p>
            <Link href="/services/sea-freight" className="text-secondary font-medium hover:underline">
              Learn More &rarr;
            </Link>
          </div>

          <div className="service-card dark:bg-gray-800 dark:border-secondary">
            <div className="mb-4 text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Land Transport</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Efficient land transportation across Thailand and beyond.
            </p>
            <Link href="/services/land-transport" className="text-secondary font-medium hover:underline">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title dark:text-white">Shipping Rates</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get quick estimates for your shipping needs with our comprehensive rates calculator.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <GlobeAltIcon className="h-8 w-8 text-primary dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Global Coverage</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Shipping rates to destinations worldwide with competitive pricing for all service levels.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <ArrowsRightLeftIcon className="h-8 w-8 text-primary dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Multiple Options</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Compare rates across air, sea, and land transport to find the best option for your shipment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <TruckIcon className="h-8 w-8 text-primary dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Special Cargo</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Custom pricing available for oversized, high-value, or specialized cargo requirements.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/rates"
              className="inline-flex items-center px-6 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-md transition-colors"
            >
              Calculate Shipping Rates <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title dark:text-white">Why Choose Integrity Logistics</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Beyond the average Freight Forwarder
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <div className="feature-number">1</div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team has extensive knowledge and experience in the logistics industry, providing expert guidance for your shipping needs.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <div className="feature-number">2</div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We understand the importance of timely deliveries and ensure your cargo arrives safely and on schedule.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <div className="feature-number">3</div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Customer Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our dedicated customer service team is available to assist you at every step of the shipping process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with Integrity?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your logistics needs and get a customized solution.
          </p>
          <Link
            href="/contact"
            className="btn bg-white text-secondary hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 font-bold text-lg px-8 py-3"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
