'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-primary font-bold mr-2">
                IL
              </div>
              <span className="text-xl font-bold">
                Integrity Logistics
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Beyond the average Freight Forwarder. We provide comprehensive logistics solutions tailored to your needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/customs-clearance" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Customs Clearance
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services/sea-freight" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Sea Freight
                </Link>
              </li>
              <li>
                <Link href="/services/land-transport" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Land Transport
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tracking" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Tracking
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/rates" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Check Rates
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Contact</h3>
            <address className="not-italic text-gray-300 dark:text-gray-400">
              <p className="mb-2">123 Sukhumvit Road</p>
              <p className="mb-2">Bangkok, Thailand 10110</p>
              <p className="mb-2">
                <span className="font-medium">Phone:</span> +66 2 123 4567
              </p>
              <p className="mb-2">
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:info@integritylogistics.th" className="hover:text-white">
                  info@integritylogistics.th
                </a>
              </p>
            </address>
            <div className="flex space-x-4 mt-4">
              {/* Facebook icon */}
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* LinkedIn icon */}
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Integrity Logistics Thailand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
