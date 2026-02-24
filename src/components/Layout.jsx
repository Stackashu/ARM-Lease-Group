import React from 'react';
import Navbar from './Navbar';
import Footer from '../sections/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1, width: '100%' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
