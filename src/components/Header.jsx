'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-2">
                IL
              </div>
              <span className="text-xl font-bold text-primary dark:text-white">
                INTEGRITY <span className="text-secondary">LOGISTICS</span>{" "}
                <span className="text-sm font-normal hidden sm:inline dark:text-gray-300">(THAILAND)</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="nav-link text-primary dark:text-white font-medium">
              Home
            </Link>
            <Link href="/services" className="nav-link text-gray-600 dark:text-gray-300">
              Services
            </Link>
            <Link href="/tracking" className="nav-link text-gray-600 dark:text-gray-300">
              Tracking
            </Link>
            <Link href="/schedule" className="nav-link text-gray-600 dark:text-gray-300">
              Schedule
            </Link>
            <Link href="/rates" className="nav-link text-gray-600 dark:text-gray-300">
              Rates
            </Link>
            <Link href="/contact" className="nav-link text-gray-600 dark:text-gray-300">
              Contact
            </Link>
          </nav>

          {/* Login/Register Buttons with Theme Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Link
              href="/login"
              className="px-3 py-2 text-sm text-primary dark:text-gray-300 hover:text-primary-dark dark:hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary-dark"
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1 border-t dark:border-gray-700">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-primary dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/tracking"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tracking
              </Link>
              <Link
                href="/schedule"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                href="/rates"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rates
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-2 mt-4 px-3">
                <Link
                  href="/login"
                  className="flex-1 px-3 py-2 text-center text-primary dark:text-gray-300 border border-primary dark:border-gray-600 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="flex-1 px-3 py-2 text-center bg-primary text-white rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Banner */}
      <div className="bg-primary text-white text-center text-sm py-1">
        Beyond the average Freight Forwarder
      </div>
    </header>
  );
};

export default Header;
