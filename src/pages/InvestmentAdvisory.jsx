import React, { useEffect } from 'react';
import styles from '../styles/FooterPages.module.css';
import HeroImage from '../assets/service_advisory_hero.png';
import { LineChart, Briefcase, ShieldCheck } from 'lucide-react';

const InvestmentAdvisory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <img src={HeroImage} alt="Investment Advisory" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Investment Advisory</h1>
                    <p className={styles.subtitle}>
                        Maximizing returns through data-driven real estate investment strategies. We guide wealth towards stability and high yields.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.gridTwo}>
                    <div className={styles.textBlock}>
                        <h2>Wealth Creation through Real Estate</h2>
                        <p>
                            Real estate remains one of the most robust asset classes for long-term wealth preservation. Our advisory team assists HNIs, family offices, and institutional investors in identifying pre-leased assets with strong covenants and high appreciation potential.
                        </p>
                        <p>
                            We conduct rigorous due diligence, financial modeling, and risk assessment to ensure that every investment aligns with your portfolio objectives.
                        </p>
                        <div style={{ background: 'rgba(25, 42, 34, 0.05)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--primary-color)', marginTop: '2.5rem' }}>
                            <h4 style={{ margin: '0 0 1rem', color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: '700' }}>Why Commercial Real Estate?</h4>
                            <p style={{ margin: 0, fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
                                Unlike residential, commercial assets offer higher rental yields (6-9%), longer lease tenures, and professional tenant management, making them ideal for stable wealth growth.
                            </p>
                        </div>
                    </div>
                    <div className={styles.textBlock} style={{ background: '#fcfdfc', padding: '3rem', borderRadius: '16px', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Our Advisory Services</h3>
                        <ul className={styles.featureList}>
                            <li>Pre-leased Commercial Assets</li>
                            <li>Land Acquisition & Joint Ventures</li>
                            <li>REIT Consultation & Portfolio Strategy</li>
                            <li>Risk-Adjusted Portfolio Rebalancing</li>
                        </ul>
                    </div>
                </div>

                {/* Investment Approach */}
                <div style={{ marginTop: '7rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Our Investment Philosophy</h2>
                    <div className={styles.processGrid}>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" alt="Risk Mitigation" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>01</div>
                                <h4>Risk Mitigation</h4>
                                <p>We prioritize assets with strong legal titles and Grade-A tenants to minimize vacancy risks and ensure capital safety.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" alt="Data Driven" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>02</div>
                                <h4>Data-Driven Entry</h4>
                                <p>Precision analysis of micro-market trends and entry yields to ensure you invest at the right valuation.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Management" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>03</div>
                                <h4>Active Management</h4>
                                <p>Continuous monitoring of asset performance and market cycles to identify optimal exit opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.highlightBox}>
                <LineChart size={48} style={{ marginBottom: '1rem' }} />
                <h3>22% Average IRR</h3>
                <p>Delivering superior risk-adjusted returns for our investors.</p>
            </div>
        </div>
    );
};

export default InvestmentAdvisory;
