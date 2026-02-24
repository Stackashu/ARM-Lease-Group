import React, { useEffect } from 'react';
import styles from '../styles/FooterPages.module.css';
import HeroImage from '../assets/insight_clients_hero.png';
import { Users, Handshake, Globe } from 'lucide-react';

const OurClients = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <img src={HeroImage} alt="Our Clients" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Our Trusted Partners</h1>
                    <p className={styles.subtitle}>
                        Building lasting relationships with industry leaders. Our reputation is built on the trust and success of our clients.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.textBlock} style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 5rem' }}>
                    <h2 style={{ color: 'var(--primary-color)', fontSize: '2.8rem' }}>A Legacy of Trust</h2>
                    <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>
                        We have had the privilege of serving a diverse spectrum of clients, ranging from multinational corporations to high-growth startups. Our client-centric approach ensures that we act not just as service providers, but as strategic partners in their growth journey.
                    </p>
                </div>

                {/* Developer Partners */}
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '2rem', fontWeight: '700' }}>Our Developer Partners</h3>
                <div className={styles.partnerGrid}>
                    {['DLF India', 'Vatika Group', 'Emaar India', 'JMD', 'Bestech', 'M3M', 'Capital', 'Good Earth', 'Magnum'].map((name) => (
                        <div key={name} className={styles.partnerLogo}>
                            {name}
                        </div>
                    ))}
                </div>

                {/* Valued Clients */}
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '2rem', fontWeight: '700', marginTop: '4rem' }}>Our Valued Clients</h3>
                <div className={styles.partnerGrid} style={{ marginBottom: '5rem' }}>
                    {['One Step Global', 'Swagelok India', 'Samsung', 'Seiren India', 'Hanwa India', 'Pax POS Solution', 'Spire Research Ind Pvt Ltd', 'Barcode India'].map((name) => (
                        <div key={name} className={styles.partnerLogo}>
                            {name}
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem', color: 'var(--primary-color)' }}>What Our Partners Say</h2>
                <div className={styles.testimonialGrid}>
                    <div className={styles.testimonialBox}>
                        "ARM Lease Group transformed our workspace strategy. They found us an office that not only met our technical requirements but effectively communicates our brand culture to every visitor. Their market speed is simply unmatched."
                        <div className={styles.clientInfo}>
                            <div className={styles.clientAvatar} style={{ background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>RK</div>
                            <div>
                                <div style={{ fontWeight: '700', color: 'var(--primary-color)', fontSize: '1.1rem' }}>Rajesh Kumar</div>
                                <div style={{ fontSize: '0.9rem', color: '#777', textTransform: 'uppercase', letterSpacing: '1px' }}>CEO, TechFlow India</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonialBox}>
                        "Their retail team's understanding of high-street dynamics is unmatched. They helped us secure a prime location that has become our highest-performing outlet within six months. Extremely professional approach."
                        <div className={styles.clientInfo}>
                            <div className={styles.clientAvatar} style={{ background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>SJ</div>
                            <div>
                                <div style={{ fontWeight: '700', color: 'var(--primary-color)', fontSize: '1.1rem' }}>Sarah Jenkins</div>
                                <div style={{ fontSize: '0.9rem', color: '#777', textTransform: 'uppercase', letterSpacing: '1px' }}>Expansion Head, Luxe Retail</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.highlightBox}>
                <Handshake size={48} style={{ marginBottom: '1rem' }} />
                <h3>Long-term Relationships</h3>
                <p>90% of our business comes from repeat clients and referrals.</p>
            </div>
        </div>
    );
};

export default OurClients;
