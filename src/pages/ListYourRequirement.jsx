import React, { useEffect } from 'react';
import styles from '../styles/ListYourRequirement.module.css';

const ListYourRequirement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>List Your Requirement</h1>
                <p className={styles.description}>
                    Looking for the perfect office, retail space, or warehouse? Fill out the form below, and our experts will curate a list of properties that match your specific needs.
                </p>

                <div className={styles.mainGrid}>
                    <form className={styles.formContainer}>
                        <div className={styles.fullWidth}>
                            <h3 className={styles.sectionHeader}>Personal Details</h3>
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Full Name</label>
                            <input type="text" className={styles.input} placeholder="John Doe" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input type="email" className={styles.input} placeholder="john@example.com" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Phone Number</label>
                            <input type="tel" className={styles.input} placeholder="+91..." />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Company Name</label>
                            <input type="text" className={styles.input} placeholder="Company Ltd" />
                        </div>

                        <div className={`${styles.fullWidth}`} style={{ marginTop: '1rem' }}>
                            <h3 className={styles.sectionHeader}>Property Requirements</h3>
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Property Type</label>
                            <select className={styles.select}>
                                <option>Office Space</option>
                                <option>Retail</option>
                                <option>Warehouse</option>
                                <option>Industrial</option>
                                <option>Co-working</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Preferred Location</label>
                            <input type="text" className={styles.input} placeholder="e.g. Gurugram" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Area Size (sq. ft.)</label>
                            <input type="text" className={styles.input} placeholder="e.g. 5000" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Budget Range</label>
                            <input type="text" className={styles.input} placeholder="e.g. ₹100-150/sq ft" />
                        </div>

                        <div className={styles.fullWidth}>
                            <label className={styles.label}>Specific Requirements</label>
                            <textarea className={styles.textarea} placeholder="Any other details (e.g., parking, furnishing, ready-to-move)..."></textarea>
                        </div>

                        <div className={styles.fullWidth} style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <button type="button" className={styles.submitButton}>Submit Requirement</button>
                        </div>
                    </form>

                    {/* Sidebar */}
                    <div className={styles.sidebar}>
                        <div className={styles.infoCard}>
                            <h3>Why List With Us?</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    <span className={styles.checkIcon}>✓</span> Access to 500+ Grade A Properties
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.checkIcon}>✓</span> Verified Listings Only
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.checkIcon}>✓</span> 24 Hour Response Time
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.checkIcon}>✓</span> Free Consultation
                                </li>
                            </ul>
                        </div>
                        <div className={styles.helpCard}>
                            <h4>Need Urgent Assistance?</h4>
                            <p>Call our leasing hotline directly.</p>
                            <a href="tel:+919999841481" className={styles.callButton}>+91 9999 841 481</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListYourRequirement;
