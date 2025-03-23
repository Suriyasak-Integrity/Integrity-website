import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Service data
const services = {
  'customs-clearance': {
    title: 'Customs Clearance',
    heroImage: '/images/logistics-hero.jpg',
    summary: 'Expert handling of all customs documentation and procedures for smooth international trade.',
    description: 'Our customs clearance services ensure your goods move swiftly through customs checkpoints with minimal delays. We handle all the complex paperwork, tariff classifications, and compliance requirements so you do not have to.',
    features: [
      'Complete customs documentation preparation',
      'Import/Export permit acquisition',
      'Tariff classification and duty calculation',
      'Customs broker representation',
      'Compliance with local regulations',
      'Real-time status updates',
    ],
    benefits: [
      'Faster clearance times',
      'Reduced risk of delays or penalties',
      'Expert knowledge of Thai customs regulations',
      'Lower administrative burden',
      'Streamlined international shipping',
    ],
  },
  'air-freight': {
    title: 'Air Freight',
    heroImage: '/images/logistics-hero.jpg',
    summary: 'Fast and reliable international air freight services for time-sensitive cargo.',
    description: 'When speed matters, our air freight services provide the fastest way to transport your goods internationally. We partner with leading airlines to ensure your cargo reaches its destination on schedule.',
    features: [
      'Express and standard air freight options',
      'Door-to-door delivery services',
      'Hazardous materials handling',
      'Temperature-controlled shipping',
      'Oversized cargo solutions',
      'Charter services for urgent shipments',
    ],
    benefits: [
      'Fastest transit times for international shipping',
      'Highly reliable scheduling',
      'Excellent for high-value or time-sensitive goods',
      'Reduced inventory costs',
      'Global reach to virtually any destination',
    ],
  },
  'sea-freight': {
    title: 'Sea Freight',
    heroImage: '/images/logistics-hero.jpg',
    summary: 'Cost-effective ocean freight solutions for your international shipping needs.',
    description: 'Our sea freight services offer economical solutions for moving large volumes of goods internationally. We provide both FCL (Full Container Load) and LCL (Less than Container Load) options to match your specific requirements.',
    features: [
      'FCL and LCL shipping options',
      'Special equipment for oversized cargo',
      'Refrigerated container services',
      'Dangerous goods handling',
      'Port-to-port and door-to-door services',
      'Regular sailings on major trade routes',
    ],
    benefits: [
      'Cost-effective for large shipments',
      'Ideal for non-urgent cargo',
      'Environmentally friendly option',
      'Suitable for all types of goods',
      'Reliable scheduling with major shipping lines',
    ],
  },
  'land-transport': {
    title: 'Land Transport',
    heroImage: '/images/logistics-hero.jpg',
    summary: 'Efficient road transportation services across Thailand and neighboring countries.',
    description: 'Our comprehensive land transport network covers all of Thailand and extends to neighboring countries. We offer flexible solutions for both small parcels and full truckload shipments with reliable tracking and delivery.',
    features: [
      'Full and partial truckload services',
      'Express delivery options',
      'Cross-border transportation',
      'Specialized vehicles for different cargo types',
      'GPS tracking of shipments',
      'Flexible pickup and delivery schedules',
    ],
    benefits: [
      'Extensive coverage throughout Thailand',
      'Direct door-to-door service',
      'Flexible scheduling options',
      'Cost-effective for regional distribution',
      'Simplified customs for cross-border routes',
    ],
  },
  'warehousing': {
    title: 'Warehousing',
    heroImage: '/images/logistics-hero.jpg',
    summary: 'Secure storage and inventory management solutions for your goods.',
    description: 'Our modern warehousing facilities offer secure storage with advanced inventory management systems. From short-term storage to complex fulfillment operations, we provide scalable solutions to meet your business needs.',
    features: [
      'Short and long-term storage options',
      'Climate-controlled facilities',
      'Advanced inventory management',
      'Order fulfillment services',
      'Labeling and repackaging',
      '24/7 security monitoring',
    ],
    benefits: [
      'Reduced capital investment in facilities',
      'Scalable space based on your needs',
      'Strategic locations near transport hubs',
      'Integrated with transportation services',
      'Professional handling of your inventory',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((id) => ({
    serviceId: id,
  }));
}

export default function ServiceDetails({ params }) {
  const { serviceId } = params;

  // Get the service data
  const service = services[serviceId];

  // If the service doesn't exist, show 404
  if (!service) {
    notFound();
  }

  // Get related services (all except current)
  const relatedServices = Object.entries(services)
    .filter(([id]) => id !== serviceId)
    .slice(0, 3); // Limit to 3 related services

  return (
    <div className="bg-white dark:bg-gray-900 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex py-4 text-sm text-gray-600 dark:text-gray-400">
          <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-secondary">Home</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/services" className="hover:text-secondary">Services</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 dark:text-gray-300 font-medium">{service.title}</li>
        </ol>
      </nav>

      {/* Hero section */}
      <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl mb-12">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
          <div className="text-white p-8 max-w-lg">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl">{service.summary}</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Service Overview</h2>
            <p>{service.description}</p>

            <h3>Key Features</h3>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3>Benefits</h3>
            <ul>
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mt-8">
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Ready to get started?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Contact our team to discuss your {service.title.toLowerCase()} needs and get a customized solution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-md transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/rates"
                className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-white rounded-md transition-colors"
              >
                Check Rates
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-24">
            <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Our Services</h3>
            <ul className="space-y-4">
              {Object.entries(services).map(([id, { title }]) => (
                <li key={id}>
                  <Link
                    href={`/services/${id}`}
                    className={`block p-2 rounded ${
                      id === serviceId
                        ? 'bg-primary/10 text-primary dark:bg-secondary/20 dark:text-secondary font-medium'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Need Assistance?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our logistics experts are ready to help you with your specific requirements.
              </p>
              <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+66 2 123 4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related services */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary dark:text-white mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map(([id, relatedService]) => (
            <div key={id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{relatedService.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{relatedService.summary}</p>
              <Link
                href={`/services/${id}`}
                className="text-secondary hover:underline font-medium"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
}
