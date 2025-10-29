export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl md:text-5xl font-semibold text-red-950">404</h1>
        <h1 className="text-2xl md:text-3xl font-semibold mt-6 text-red-800">This page has not been generated</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600">Tell me what you would like on this page</p>
      </div>
    );
  }