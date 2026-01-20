// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = () => {
    const loggedIn = document.cookie.includes('item-verse-auth=true');
    setIsLoggedIn(loggedIn);
  };

  useEffect(() => {
    // Check auth on mount
    checkAuth();
    
    // 🔥 ADD THIS - Listen for auth changes
    window.addEventListener('authChange', checkAuth);
    
    // Also check on route changes
    checkAuth();
    
    return () => {
      window.removeEventListener('authChange', checkAuth);
    };
  }, [pathname]); // 🔥 Add pathname as dependency

  const handleLogout = () => {
    document.cookie = "item-verse-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    
    // 🔥 Trigger auth change event
    window.dispatchEvent(new Event('authChange'));
    
    Swal.fire({
      title: "Logged out!",
      text: "You have been successfully logged out.",
      icon: "success",
      confirmButtonColor: "#0A5C36",
    });
    
    window.location.href = "/";
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Lessons", href: "/resources" },
    { name: "Add Lesson", href: "/dashboard/add-resources" }, // 🔥 Fixed: should be singular
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="ItemVerse Logo" className="h-28 w-auto" />
          </Link>

          {/* Navigation Links - Middle */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={isLoggedIn || link.href !== "/dashboard/add-resource" ? link.href : "/login"}
                className={`relative font-bold text-gray-600 hover:text-gray-900 transition-colors duration-300 ${
                  pathname === link.href ? "text-[#0A5C36]" : ""
                }`}
              >
                <span className="relative px-2 py-1">
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A5C36] transform origin-left transition-transform duration-300 ${
                      pathname === link.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* Login/Logout Button - Right */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 cursor-pointer bg-gradient-to-r from-purple-800 to-purple-500 text-white px-6 py-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span>Logout</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-800 to-purple-500 text-white px-6 py-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;