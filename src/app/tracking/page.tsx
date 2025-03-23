import { TrackingForm } from '@/components/TrackingForm';

export default function TrackingPage() {
  return (
    <div className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">Track Your Shipment</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Enter your tracking number to get real-time updates on your shipment&apos;s status and location.
          </p>
        </div>

        <div className="mb-12">
          <TrackingForm />
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">How Tracking Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">Enter Tracking Number</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enter your tracking number in the form above to begin tracking your shipment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">Get Real-Time Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                View detailed information about your shipment&apos;s current status and location.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">Track Delivery Progress</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Follow your shipment&apos;s journey until it reaches its final destination.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-primary dark:text-white mb-4">Frequently Asked Questions</h2>

          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Where can I find my tracking number?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your tracking number is provided in the confirmation email sent to you after booking our services. You can also contact your account manager or our customer service team to retrieve your tracking number.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">How often is tracking information updated?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our tracking system updates information in real-time as your shipment progresses through various checkpoints. Depending on the service type, updates typically occur several times per day.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">What should I do if my tracking information isn&apos;t available?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                If your tracking information isn&apos;t showing up, please verify you&apos;re using the correct tracking number. There might also be a delay in the system updating. If the issue persists, please contact our customer service team at +66 2 123 4567.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Can I track multiple shipments at once?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                For tracking multiple shipments, we recommend using our customer portal where you can view all your active shipments in one place. Contact your account manager to set up portal access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
