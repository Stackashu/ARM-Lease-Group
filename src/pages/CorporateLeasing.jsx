import React, { useEffect } from 'react';
import styles from '../styles/FooterPages.module.css';
import HeroImage from '../assets/service_corporate_hero.png';
import { Building2, CheckCircle, Users } from 'lucide-react';

const CorporateLeasing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <img src={HeroImage} alt="Corporate Leasing" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Corporate Leasing Solutions</h1>
                    <p className={styles.subtitle}>
                        Strategic workspace solutions tailored for global enterprises. We bridge the gap between business ambition and physical infrastructure.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.gridTwo}>
                    <div className={styles.textBlock}>
                        <h2>Redefining Workspaces</h2>
                        <p>
                            At ARM Lease Group, we understand that an office is more than just four walls—it's a catalyst for culture and productivity. Our corporate leasing division specializes in identifying, acquiring, and managing premium commercial assets that align with your strategic goals.
                        </p>
                        <p>
                            Whether you are a Fortune 500 company looking for a headquarters or a dynamic startup seeking a flexible hub, our deep market intelligence ensures you get the best terms in the most coveted locations.
                        </p>
                    </div>
                    <div>
                        <ul className={styles.featureList}>
                            <li>End-to-end Transaction Management</li>
                            <li>Cost-Benefit Analysis & Validation</li>
                            <li>Lease Restructuring & Renewal</li>
                            <li>Built-to-Suit (BTS) Solutions</li>
                        </ul>
                    </div>
                </div>

                {/* New Process Section */}
                <div style={{ marginTop: '6rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Our Leasing Process</h2>
                    <div className={styles.processGrid}>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Strategy" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>01</div>
                                <h4>Strategy Definition</h4>
                                <p>We begin by analyzing your headcount growth, location preferences, and budget to craft a bespoke real estate strategy.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://www.shutterstock.com/image-photo/businesswomen-use-magnifier-glass-find-260nw-2527748201.jpg" alt="Market Scan" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>02</div>
                                <h4>Market Scan</h4>
                                <p>Leveraging proprietary data, we identify off-market and listed properties that match your stringent criteria.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" alt="Negotiation" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>03</div>
                                <h4>Negotiation</h4>
                                <p>Our experts negotiate aggressive commercial terms, ensuring flexibility and cost savings for your business.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Execution" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>04</div>
                                <h4>Execution</h4>
                                <p>From legal documentation to fit-out coordination, we manage the entire transition until move-in day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.altSection} style={{ padding: '6rem 10%' }}>
                <div className={styles.gridTwo}>
                    <div style={{ background: 'var(--primary-color)', padding: '3rem', borderRadius: '12px', color: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'white' }}>Case Study: Global Tech Giant</h3>
                        <p style={{ opacity: '0.9', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Consolidated 3 fragmented offices into a single 150,000 sq. ft. campus in Gurugram, achieving 25% operational savings.
                        </p>
                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <div>
                                <h4 style={{ fontSize: '1.8rem', color: 'var(--tertiary-color)', marginBottom: '0.5rem' }}>25%</h4>
                                <span style={{ fontSize: '0.9rem', opacity: '0.8', textTransform: 'uppercase', letterSpacing: '1px' }}>Cost Savings</span>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.8rem', color: 'var(--tertiary-color)', marginBottom: '0.5rem' }}>6 Mo</h4>
                                <span style={{ fontSize: '0.9rem', opacity: '0.8', textTransform: 'uppercase', letterSpacing: '1px' }}>Completion Time</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textBlock}>
                        <h2>Why Choose Us?</h2>
                        <p>We don't just find you an office; we engineer a workplace solution that supports your business continuity and employee wellbeing. Our track record speaks for itself.</p>
                    </div>
                </div>
            </section>

            <div className={styles.highlightBox}>
                <Building2 size={48} style={{ marginBottom: '1rem' }} />
                <h3>5M+ Sq. Ft. Leased</h3>
                <p>Facilitating growth for over 200+ clients pan-India.</p>
            </div>
        </div>
    );
};

export default CorporateLeasing;
