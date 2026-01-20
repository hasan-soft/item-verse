// components/DashboardSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    PlusCircle,
    LogOut,
    ChevronRight,
    BookOpen
} from "lucide-react";
import { useState } from "react";

const DashboardSidebar = () => {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleLogout = () => {
        document.cookie = "item-verse-auth=; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;";
        window.location.href = "/login";
    };

    const menuItems = [
        {
            name: "Home",
            href: "/",
            icon: Home,
        },
        {
            name: "Add Resource",
            href: "/",
            icon: PlusCircle,
            active: true, // This is the default active page
        },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className={`hidden lg:flex flex-col min-h-screen bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'
                }`}>
                {/* Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-8 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50 transition-colors shadow-sm z-10"
                >
                    <ChevronRight className={`h-4 w-4 text-gray-600 transition-transform ${isCollapsed ? 'rotate-180' : ''
                        }`} />
                </button>



                {/* Menu Items - Main Content Area */}
                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.active || pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center ${isCollapsed ? 'justify-center' : ''} px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? 'bg-gradient-to-r from-purple-800 to-purple-500 text-white'
                                        : 'hover:bg-gray-50 text-gray-700'
                                    }`}
                            >
                                <div className="flex items-center">
                                    <Icon className={`h-5 w-5 ${isCollapsed ? '' : 'mr-3'} ${isActive ? 'text-white' : 'text-gray-500'
                                        }`} />
                                    {!isCollapsed && (
                                        <span className="font-medium">{item.name}</span>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout Button - Bottom */}
                <div className={`mt-auto p-4 border-t border-gray-200 ${isCollapsed ? 'px-4' : ''}`}>
                    <button
                        onClick={handleLogout}
                        className={`flex items-center ${isCollapsed ? 'justify-center' : 'w-full justify-between'} p-2 text-gray-600 hover:text-red-600 transition-colors rounded-lg hover:bg-gray-50`}
                        title="Logout"
                    >
                        <div className="flex items-center">
                            <LogOut className="h-5 w-5" />
                            {!isCollapsed && (
                                <span className="ml-3 text-sm font-medium">Logout</span>
                            )}
                        </div>
                        {!isCollapsed && (
                            <span className="text-xs text-gray-400">Admin</span>
                        )}
                    </button>
                </div>
            </aside>

            {/* Mobile Bottom Navigation */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
                <div className="flex justify-around items-center h-16">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.active || pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex flex-col items-center justify-center flex-1 p-2 ${isActive ? 'text-purple-800' : 'text-gray-600'
                                    }`}
                            >
                                <div className={`relative ${isActive ? 'text-purple-800' : ''}`}>
                                    <Icon className="h-5 w-5" />
                                    {isActive && (
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-800 rounded-full"></div>
                                    )}
                                </div>
                                <span className="text-xs mt-1 font-medium">{item.name}</span>
                            </Link>
                        );
                    })}

                    {/* Mobile Logout */}
                    <button
                        onClick={handleLogout}
                        className="flex flex-col items-center justify-center flex-1 p-2 text-gray-600 hover:text-red-600"
                    >
                        <LogOut className="h-5 w-5" />
                        <span className="text-xs mt-1 font-medium">Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;