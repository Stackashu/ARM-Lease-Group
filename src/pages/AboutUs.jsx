import React, { useEffect } from 'react';
import styles from '../styles/FooterPages.module.css';
import HeroImage from '../assets/company_about_hero.png';
import { Award, Target, Heart } from 'lucide-react';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <img src={HeroImage} alt="About Us" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>About ARM Lease Group</h1>
                    <p className={styles.subtitle}>
                        We are a premier real estate consultancy firm committed to delivering excellence in every square foot.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.gridTwo}>
                    <div className={styles.textBlock}>
                        <h2>Our Story</h2>
                        <p>
                            Founded with a vision to professionalize the real estate leasing market, ARM Lease Group has grown into a trusted name in the industry. We combine deep local market knowledge with global best practices to offer unparalleled service to our clients.
                        </p>
                        <p>
                            Our team comprises seasoned professionals from diverse backgrounds—finance, architecture, legal, and sales—uniting to provide holistic real estate solutions.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '12px' }}>
                            <Target size={32} color="var(--primary-color)" />
                            <h4 style={{ margin: '1rem 0 0.5rem', fontSize: '1.2rem' }}>Our Mission</h4>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>To empower businesses with the perfect infrastructure to thrive.</p>
                        </div>
                        <div style={{ padding: '2rem', background: '#f8f9fa', borderRadius: '12px' }}>
                            <Award size={32} color="var(--primary-color)" />
                            <h4 style={{ margin: '1rem 0 0.5rem', fontSize: '1.2rem' }}>Our Vision</h4>
                            <p style={{ fontSize: '0.9rem', color: '#666' }}>To be the most preferred commercial real estate partner in the region.</p>
                        </div>
                    </div>
                </div>

                
            </section>
        </div>
    );
};

export default AboutUs;
