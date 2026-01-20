// app/not-found.tsx
import Link from "next/link";
import {Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-gray-50 px-4">
      <div className="text-center max-w-2xl">
        {/* Animated 404 */}
        <div className="relative mb-12">
          <div className="text-9xl font-bold text-gray-900 opacity-5 select-none">
            404
          </div>
          
          {/* Book icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <BookOpen className="h-32 w-32 text-gray-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-purple-800">404</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Oops! The ItemVerse or page you are looking for seems to have been doesn`t exist.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center bg-gradient-to-r from-purple-800 to-purple-500 text-white px-8 py-4 transition-all duration-300 hover:shadow-lg"
          >
            <Home className="h-5 w-5 mr-2" />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}