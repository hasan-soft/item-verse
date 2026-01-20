import DashboardNavbar from '@/components/Dashboard/DashboardNavbar';
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardNavbar />
            <div className="flex">
                <DashboardSidebar />
                <main className="flex-1 p-4 lg:p-6">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;