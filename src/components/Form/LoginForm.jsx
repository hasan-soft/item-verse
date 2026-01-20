"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Lock, Mail, Eye, EyeOff, LogIn, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Swal from 'sweetalert2';

const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Mock authentication
        const validEmail = 'admin@itemverse.com';
        const validPassword = '123456';

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (email === validEmail && password === validPassword) {
            // Set auth cookie
            document.cookie = "item-verse-auth=true; path=/; max-age=86400"; // 1 day
            Swal.fire({
                title: "Login Successfully!",
                icon: "success",
                draggable: true
            });
            // Redirect to resources page
            router.push('/resources');
        } else {
            setError('Invalid email or password. Try: admin@itemverse.com / 123456');
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white to-gray-50 p-4">
            <div className="w-full max-w-4xl">
                <div className="w-lg mx-auto gap-8">
                    {/* Left Column - Illustration & Info */}


                    {/* Right Column - Login Form */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                        {/* Mobile Logo */}
                        <div className="lg:hidden flex justify-center mb-8">
                            <div className="flex items-center space-x-2">
                                <Link href="/" className="flex items-center space-x-2">
                                    <img src="/logo.png" alt="ItemVerse Logo" className="h-28 w-auto" />
                                </Link>
                            </div>
                        </div>

                        {/* Form Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Welcome Back
                            </h2>
                            <p className="text-gray-600">
                                Sign in to access admin features
                            </p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}

                                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent transition-all"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-purple-800 focus:ring-purple-800 border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                                <button
                                    type="button"
                                    className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                    <p className="text-red-700 text-sm">{error}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex items-center justify-center bg-purple-600 text-white py-3 cursor-pointer px-6 hover:bg-purple-800 transition-all duration-300 hover:shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {loading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Logging in...
                                    </>
                                ) : (
                                    <>
                                        <LogIn className="h-5 w-5 mr-2" />
                                        Log In
                                    </>
                                )}
                            </button>

                            {/* Demo Note */}
                            <div className="text-center">
                                <p className="text-sm text-purple-500">
                                    Use demo credentials to login
                                </p>
                            </div>
                        </form>

                        {/* Divider */}
                        <div className="my-8 flex items-center">
                            <div className="flex-1 border-t border-gray-200"></div>
                            <span className="px-4 text-base text-gray-600">or continue as</span>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>

                        {/* Guest Access Button */}
                        <div className="space-y-4">
                            <Link
                                href="/resources"
                                className="block w-full border-2 border-gray-300 text-black py-3 px-6 hover:border-gray-400 hover:text-gray-900 transition-all duration-300 text-center font-medium"
                            >
                                Browse Resources as Guest
                            </Link>

                            <div className="text-center text-sm text-gray-500">
                                Don&apos;t have admin access?{' '}
                                <Link href="/" className="text-purple-600 hover:text-purple-800 font-medium">
                                    Go to Homepage
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;