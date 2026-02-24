import React, { useEffect } from 'react';
import styles from '../styles/FooterPages.module.css';
import HeroImage from '../assets/service_interior_hero.png';
import { Layout, PenTool, Ruler, Clock, CheckCircle2 } from 'lucide-react';

const InteriorManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <img src={HeroImage} alt="Interior Management" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Interior Management</h1>
                    <p className={styles.subtitle}>
                        Crafting workspaces that inspire. We deliver turnkey interior solutions that blend aesthetics with functional efficiency.
                    </p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.gridTwo}>
                    <div className={styles.textBlock}>
                        <h2>Design to Delivery</h2>
                        <p>
                            A space comes alive only when it is designed with people in mind. Our Project Management Consultancy (PMC) team oversees the entire lifecycle of your office fit-out—from conceptualization and space planning to vendor management and final handover.
                        </p>
                        <ul className={styles.featureList}>
                            <li>Workspace Strategy & Design</li>
                            <li>Turnkey Fit-out Execution</li>
                            <li>Cost & Timeline Management</li>
                            <li>Wellness & Sustainability Checks</li>
                        </ul>
                    </div>
                    <div className={styles.processCard} style={{ maxHeight: '400px' }}>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                            alt="Office Design"
                            className={styles.cardImage}
                            style={{ height: '100%' }}
                        />
                    </div>
                </div>

                {/* Workflow Timeline */}
                <div style={{ marginTop: '8rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem', color: 'var(--primary-color)' }}>Our Project Lifecycle</h2>
                    <div className={styles.processGrid}>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=800" alt="Concept" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>01</div>
                                <h4>Concept & Budgeting</h4>
                                <p>We translate your brand identity into a tangible design language while establishing a realistic budget.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" alt="Design" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>02</div>
                                <h4>Design Development</h4>
                                <p>Detailed 3D renders, material selection, and MEP (Mechanical, Electrical, Plumbing) planning.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Procurement" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>03</div>
                                <h4>Procurement</h4>
                                <p>Selecting the best vendors and materials at competitive rates through a transparent bidding process.</p>
                            </div>
                        </div>
                        <div className={styles.processCard}>
                            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Execution" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.stepNumber}>04</div>
                                <h4>Execution</h4>
                                <p>On-site supervision ensuring quality control, safety compliance, and on-time delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.highlightBox}>
                <CheckCircle2 size={48} style={{ marginBottom: '1rem' }} />
                <h3>On-Time Delivery</h3>
                <p>Zero delays. Zero cost overruns. 100% satisfaction.</p>
            </div>
        </div>
    );
};

export default InteriorManagement;
