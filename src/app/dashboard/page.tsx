import Link from 'next/link';
import {
  TruckIcon,
  ClipboardDocumentIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

// Mock data for dashboard
const stats = [
  { name: 'Active Shipments', value: '12', icon: TruckIcon, href: '/dashboard/shipments', color: 'bg-blue-500' },
  { name: 'Pending Approvals', value: '3', icon: ClipboardDocumentIcon, href: '/dashboard/shipments?status=pending', color: 'bg-yellow-500' },
  { name: 'Delivered (This Month)', value: '8', icon: CheckCircleIcon, href: '/dashboard/shipments?status=delivered', color: 'bg-green-500' },
  { name: 'Delayed Shipments', value: '1', icon: ExclamationTriangleIcon, href: '/dashboard/shipments?status=delayed', color: 'bg-red-500' },
];

// Mock recent shipments data
const recentShipments = [
  {
    id: 'IL-2023056789',
    origin: 'Bangkok, Thailand',
    destination: 'Singapore',
    status: 'In Transit',
    type: 'Sea Freight',
    eta: '2025-03-28',
    lastUpdate: '2025-03-23'
  },
  {
    id: 'IL-2023056788',
    origin: 'Hong Kong',
    destination: 'Bangkok, Thailand',
    status: 'Customs Clearance',
    type: 'Air Freight',
    eta: '2025-03-25',
    lastUpdate: '2025-03-23'
  },
  {
    id: 'IL-2023056787',
    origin: 'Bangkok, Thailand',
    destination: 'Chiang Mai, Thailand',
    status: 'Out for Delivery',
    type: 'Land Transport',
    eta: '2025-03-24',
    lastUpdate: '2025-03-23'
  },
  {
    id: 'IL-2023056786',
    origin: 'Shanghai, China',
    destination: 'Bangkok, Thailand',
    status: 'Arrived at Port',
    type: 'Sea Freight',
    eta: '2025-03-24',
    lastUpdate: '2025-03-22'
  }
];

// Status badge component
function StatusBadge({ status }; { status: string }) {
  let color;
  switch (status) {
    case 'In Transit':
      color = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      break;
    case 'Customs Clearance':
      color = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      break;
    case 'Out for Delivery':
      color = 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      break;
    case 'Arrived at Port':
      color = 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      break;
    case 'Delivered':
      color = 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      break;
    default:
      color = 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }

  return (
    <span className={`${color} px-2 py-1 rounded-full text-xs font-medium`}>
      {status}
    </span>
  );
}

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back, John! Here's what's happening with your shipments.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg mb-8 p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/dashboard/track"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <ClipboardDocumentIcon className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Track Shipment</span>
          </Link>
          <Link
            href="/dashboard/shipments/new"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <TruckIcon className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">New Shipment</span>
          </Link>
          <Link
            href="/dashboard/rates"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <ArrowTrendingUpIcon className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Get Quotes</span>
          </Link>
          <Link
            href="/dashboard/schedule"
            className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <ClockIcon className="h-8 w-8 text-primary mb-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Schedule Pickup</span>
          </Link>
        </div>
      </div>

      {/* Recent Shipments */}
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Shipments</h2>
            <Link href="/dashboard/shipments" className="text-secondary hover:text-secondary-dark font-medium text-sm">
              View all
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Tracking ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Route
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  ETA
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Last Update
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentShipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      href={`/dashboard/shipments/${shipment.id}`}
                      className="text-primary hover:text-secondary"
                    >
                      {shipment.id}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{shipment.origin}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">to {shipment.destination}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {shipment.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={shipment.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {shipment.eta}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {shipment.lastUpdate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
