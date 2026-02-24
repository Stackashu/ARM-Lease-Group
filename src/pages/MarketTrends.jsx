import React, { useEffect } from 'react';
import styles from '../styles/MarketTrends.module.css';
import HeroImage from '../assets/market_trends_hero.png';
import { TrendingUp, BarChart2, Globe, ArrowRight, Building2, PieChart } from 'lucide-react';
import Newsletter from '../sections/Newsletter';

const MarketTrends = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <img src={HeroImage} alt="Market Trends" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Market Trends <span className={styles.year}>2026</span></h1>
                    <p className={styles.subtitle}>
                        In-depth analysis and futuristic insights into global real estate and financial markets.
                    </p>
                </div>
            </header>

            {/* Global Outlook Section */}
            <section className={styles.section}>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <div className={styles.iconWrapper}>
                            <Globe size={32} />
                        </div>
                        <h2>Global Market Outlook</h2>
                        <p>
                            The global real estate market is undergoing a calibrated shift towards sustainable and
                            technology-integrated spaces. With the rise of smart cities and green infrastructure,
                            investors are prioritizing long-term value over short-term gains.
                        </p>
                        <p>
                            Key indicators suggest a <strong>12% growth</strong> in commercial leasing demand across
                            Asia-Pacific regions, driven by the resurgence of office hubs and hybrid work models.
                        </p>
                        <button className={styles.readMoreBtn}>
                            Read Analysis <ArrowRight size={16} />
                        </button>
                    </div>
                    <div className={styles.visualContent}>
                        <div className={styles.statCard}>
                            <TrendingUp size={40} className={styles.statIcon} />
                            <h3>+12.5%</h3>
                            <p>YoY Growth</p>
                        </div>
                        <div className={styles.statCard}>
                            <Building2 size={40} className={styles.statIcon} />
                            <h3>85%</h3>
                            <p>Occupancy Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real Estate Trends Section */}
            <section className={`${styles.section} ${styles.darkSection}`}>
                <div className={`${styles.contentWrapper} ${styles.reverse}`}>
                    <div className={styles.textContent}>
                        <div className={styles.iconWrapper}>
                            <BarChart2 size={32} />
                        </div>
                        <h2>Commercial Real Estate</h2>
                        <p>
                            Grade A office spaces are witnessing a premium surge as corporations seek
                            employee-centric work environments. The focus has shifted to wellness certifications
                            (WELL, LEED) as a standard requirement.
                        </p>
                        <ul className={styles.trendList}>
                            <li>Sustainable Architecture</li>
                            <li>IoT Integration</li>
                            <li>Flexible Leasing Models</li>
                        </ul>
                    </div>
                    <div className={styles.visualContent}>
                        <div className={styles.chartPlaceholder}>
                            {/* Abstract Chart Representation */}
                            <div className={styles.bar1}></div>
                            <div className={styles.bar2}></div>
                            <div className={styles.bar3}></div>
                            <div className={styles.bar4}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Opportunities */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Investment Opportunities</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <PieChart size={32} className={styles.cardIcon} />
                        <h3>REITs</h3>
                        <p>Stable returns with diversified portfolio exposure in high-yield commercial assets.</p>
                    </div>
                    <div className={styles.card}>
                        <Building2 size={32} className={styles.cardIcon} />
                        <h3>Co-working Spaces</h3>
                        <p>High-demand flexible workspaces catering to the startup ecosystem.</p>
                    </div>
                    <div className={styles.card}>
                        <TrendingUp size={32} className={styles.cardIcon} />
                        <h3>Warehousing</h3>
                        <p>E-commerce boom driving demand for logistics and last-mile delivery centers.</p>
                    </div>
                </div>
            </section>
            {/* Latest News Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle} style={{ color: 'var(--primary-color)' }}>Latest Market News</h2>
                <div className={styles.newsGrid}>
                    <div className={styles.newsCard}>
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Tech Corridors" className={styles.newsImage} />
                        <div className={styles.newsContent}>
                            <span className={styles.newsDate}>Jan 28, 2026</span>
                            <h3>Tech Corridors Expand in Tier-2 Cities</h3>
                            <p>Major IT giants are exploring expansion into emerging markets, driving up commercial leasing rates in regional hubs.</p>
                            <a href="#" className={styles.readLink}>Read Full Story</a>
                        </div>
                    </div>
                    <div className={styles.newsCard}>
                        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" alt="Green Buildings" className={styles.newsImage} />
                        <div className={styles.newsContent}>
                            <span className={styles.newsDate}>Jan 25, 2026</span>
                            <h3>Green Buildings Become the New Standard</h3>
                            <p>Sustainability certifications are now a primary requirement for top-tier corporate tenants across the globe.</p>
                            <a href="#" className={styles.readLink}>Read Full Story</a>
                        </div>
                    </div>
                    <div className={styles.newsCard}>
                        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" alt="Retail Evolution" className={styles.newsImage} />
                        <div className={styles.newsContent}>
                            <span className={styles.newsDate}>Jan 20, 2026</span>
                            <h3>Retail Spaces Evolve into Experience Hubs</h3>
                            <p>Malls are pivoting towards entertainment and dining experiences to counter the surge in e-commerce growth.</p>
                            <a href="#" className={styles.readLink}>Read Full Story</a>
                        </div>
                    </div>
                </div>
            </section>

           
            {/* Newsletter Section */}
            {/* <section className={styles.section}> */}
                <Newsletter />
            {/* </section> */}
        </div>
    );
};

export default MarketTrends;
    