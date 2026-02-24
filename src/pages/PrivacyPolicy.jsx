const PrivacyPolicy = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '8rem 10% 4rem', flex: 1 }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '3rem' }}>Privacy Policy</h1>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
                    <p style={{ lineHeight: '1.7', color: '#555' }}>
                        We collect information you provide directly to us when you fill out a contact form, request information, or communicate with us via third-party platforms. This information may include your name, email address, phone number, and any other information you choose to provide.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
                    <p style={{ lineHeight: '1.7', color: '#555' }}>
                        We use the information we collect to operate, maintain, and improve our services; to respond to your comments and questions; and to send you related information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Sharing of Information</h2>
                    <p style={{ lineHeight: '1.7', color: '#555' }}>
                        We do not share your personal information with third parties except as described in this privacy policy. We may share your information with third-party service providers who perform services on our behalf, such as web hosting and data analysis.
                    </p>
                </section>

                <section style={{ marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Security</h2>
                    <p style={{ lineHeight: '1.7', color: '#555' }}>
                        We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Contact Us</h2>
                    <p style={{ lineHeight: '1.7', color: '#555' }}>
                        If you have any questions about this Privacy Policy, please contact us at: ashutoshmallick240990@gmail.com
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
