'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  HomeIcon,
  TruckIcon,
  ClipboardDocumentCheckIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const sidebarLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'My Shipments', href: '/dashboard/shipments', icon: TruckIcon },
  { name: 'Track Shipment', href: '/dashboard/track', icon: ClipboardDocumentCheckIcon },
  { name: 'Shipping Rates', href: '/dashboard/rates', icon: CurrencyDollarIcon },
  { name: 'Account Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function DashboardLayout({
  children,
}; {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-primary dark:bg-gray-800 text-white transition-transform duration-300 ease-in-out transform
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-primary-light dark:border-gray-700">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-white font-bold mr-2">
              IL
            </div>
            <span className="font-semibold">Integrity Logistics</span>
          </div>
          <button
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-5 px-2 space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center px-3 py-2 text-base font-medium rounded-md text-white hover:bg-primary-light dark:hover:bg-gray-700"
            >
              <link.icon className="mr-3 h-6 w-6 text-primary-light group-hover:text-white" />
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex justify-between h-16 px-4">
          <button
            className="lg:hidden text-gray-500 dark:text-gray-400 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
            <span className="sr-only">Open sidebar</span>
          </button>

          <div className="flex items-center ml-auto">
            <div className="relative ml-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <UserIcon className="h-5 w-5" />
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">John Doe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
