import Image from 'next/image';
import Link from 'next/link';
import RatesCalculator from '@/components/RatesCalculator.js';

export default function RatesPage() {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">Shipping Rates & Pricing</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get instant estimates for shipping costs based on your specific requirements.
            Our competitive pricing ensures you get the best value for your logistics needs.
          </p>
        </div>

        <div className="mb-12">
          <RatesCalculator />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="h-16 w-16 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Transparent Pricing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              No hidden fees or surprise charges. We provide clear, upfront pricing for all our services.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="h-16 w-16 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Competitive Rates</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our volume discounts and partnerships with carriers allow us to offer you the best possible rates.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="h-16 w-16 bg-primary/10 text-primary dark:bg-primary/20 dark:text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">Quality Service</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We never compromise on service quality, ensuring your shipments are handled with the utmost care.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Customized Pricing for Your Business</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For businesses with regular shipping needs, we offer tailored pricing packages that can help
                you save on costs while ensuring reliable and efficient services.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our volume-based discounts and flexible payment terms are designed to support businesses
                of all sizes, from small enterprises to multinational corporations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Contact our team to discuss your specific requirements and receive a customized quote
                for your logistics operations.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-secondary hover:bg-secondary-dark text-white rounded-md transition-colors"
              >
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

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">How accurate is the rate calculator?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The calculator provides estimates based on standard rates and common shipment parameters. Actual
                prices may vary depending on specific requirements, special handling needs, and current market conditions.
                For precise quotes, please contact our team.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Do you offer volume discounts?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer tiered pricing based on shipping volume. Businesses with regular shipping needs can
                benefit from our volume discount programs, which can significantly reduce your logistics costs.
                Contact our sales team to discuss your specific volume requirements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">What additional fees might apply?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                While we strive for transparent pricing, certain situations may require additional fees, such as:
                customs duties and taxes, special handling for dangerous goods, storage fees for delayed pickup,
                express processing, and insurance premiums. We will always inform you of any additional charges
                before processing your shipment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">How often do your rates change?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our base rates are reviewed quarterly, but fuel surcharges may fluctuate monthly based on
                global fuel prices. For contract customers, we typically guarantee fixed rates for the
                duration of the contract period, providing stability for your budget planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
