import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      id: 'customs-clearance',
      title: 'Customs Clearance',
      description: 'Expert handling of all customs documentation and procedures. We ensure smooth clearance of your goods through Thai customs and other international borders.',
      image: '/images/logistics-hero.jpg',
    },
    {
      id: 'air-freight',
      title: 'Air Freight',
      description: 'Fast and reliable international air freight services. Ideal for time-sensitive shipments and high-value goods that need to reach their destination quickly.',
      image: '/images/logistics-hero.jpg',
    },
    {
      id: 'sea-freight',
      title: 'Sea Freight',
      description: 'Cost-effective sea freight solutions for your cargo. Whether FCL or LCL shipments, we offer comprehensive ocean freight services worldwide.',
      image: '/images/logistics-hero.jpg',
    },
    {
      id: 'land-transport',
      title: 'Land Transport',
      description: 'Efficient land transportation across Thailand and beyond. Our trucking network covers all major cities and industrial areas in Southeast Asia.',
      image: '/images/logistics-hero.jpg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          We offer comprehensive logistics solutions tailored to your specific needs.
          Choose from our wide range of services below.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
            <div className="relative h-48 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary dark:text-white mb-3">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center px-4 py-2 bg-secondary hover:bg-secondary-dark text-white rounded-md"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
