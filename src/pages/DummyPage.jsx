import React from 'react';

const DummyPage = ({ title }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10rem 2rem',
                textAlign: 'center',
                background: '#f9f9f9'
            }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>{title}</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>This page is coming soon.</p>
            </div>
        </div>
    );
};

export default DummyPage;
