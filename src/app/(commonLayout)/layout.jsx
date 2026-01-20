import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[90vh]">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default layout;