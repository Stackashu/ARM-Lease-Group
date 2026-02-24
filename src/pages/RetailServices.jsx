import React, { useEffect } from 'react';
import styles from '../styles/FooterPages.module.css';
import HeroImage from '../assets/service_retail_hero.png';
import { ShoppingBag, MapPin, TrendingUp } from 'lucide-react';

const RetailServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <img src={HeroImage} alt="Retail Services" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Retail Services</h1>
                    <p className={styles.subtitle}>
                        Curating diverse retail experiences. From high-street boutiques to sprawling malls, we position brands for maximum visibility and footfall.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.gridTwo}>
                    <div>
                        {/* Placeholder for a secondary image or graphic if needed, reusing text structure for now */}
                        <div style={{ background: '#f8f9fa', padding: '3rem', borderRadius: '12px', border: '1px solid #eee' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>The Location Advantage</h3>
                            <p style={{ color: '#666' }}>
                                Using heat maps and demographic analysis, we verify catchment potency before you even visit the site.
                            </p>
                            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <span style={{ background: '#e3f2fd', color: '#1976d2', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>Footfall Analysis</span>
                                <span style={{ background: '#e8f5e9', color: '#388e3c', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>Spending Power</span>
                                <span style={{ background: '#fff3e0', color: '#f57c00', padding: '5px 10px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>Success Rate</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textBlock}>
                        <h2>The Art of Retail Positioning</h2>
                        <p>
                            In the fast-evolving retail landscape, location is the single most critical factor for success. Our retail team leverages demographic data, footfall analytics, and consumer behavior trends to recommend spaces that drive revenue.
                        </p>
                        <ul className={styles.featureList}>
                            <li>High Street & Mall Leasing</li>
                            <li>Revenue Share Models</li>
                            <li>Franchise Expansion Strategy</li>
                            <li>Tenant Mix Planning</li>
                        </ul>
                    </div>
                </div>

                {/* Retail Categories */}
                <div style={{ marginTop: '6rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Retail Sectors We Cover</h2>
                    <div className={styles.processGrid}>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" alt="Luxury Fashion" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h4>Luxury Fashion</h4>
                                <p>Prime high-street locations for premium apparel and accessories brands that demand maximum brand exposure.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800" alt="Food & Beverage" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h4>Food & Beverage</h4>
                                <p>Strategic spots for QSRs, fine dining, and cafes with high visibility and necessary utility infrastructure.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800" alt="Electronics" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h4>Consumer Electronics</h4>
                                <p>Large format showrooms in high-density commercial zones with excellent accessibility and signage.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800" alt="Entertainment" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h4>Entertainment</h4>
                                <p>Multiplexes and gaming zones that serve as mall anchors and drive consistent weekend footfall.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.highlightBox}>
                <ShoppingBag size={48} style={{ marginBottom: '1rem' }} />
                <h3>Brand Partners</h3>
                <p>Trusted by leading fashion, F&B, and lifestyle brands.</p>
            </div>
        </div>
    );
};

export default RetailServices;
