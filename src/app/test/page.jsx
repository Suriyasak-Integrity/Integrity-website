export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-primary dark:text-white mb-4">
          Test Page
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This is a test page to check if the application is working properly.
        </p>
        <div className="flex space-x-4">
          <div className="h-8 w-8 rounded-full bg-green-500"></div>
          <div className="h-8 w-8 rounded-full bg-blue-500"></div>
          <div className="h-8 w-8 rounded-full bg-purple-500"></div>
        </div>
      </div>
    </div>
  );
}
