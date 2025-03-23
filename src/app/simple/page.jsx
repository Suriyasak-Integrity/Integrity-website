export default function SimplePage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Simple Test Page</h1>
      <p className="mb-4">This is a simple page without complex hydration requirements.</p>
      <div className="p-4 bg-blue-100 rounded">
        <h2 className="text-xl font-medium mb-2">Server Component</h2>
        <p>This page is rendered as a server component.</p>
      </div>
    </div>
  );
}
