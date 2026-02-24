import React from 'react';
import styles from '../styles/Newsletter.module.css';

const Newsletter = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h2 className={styles.title}>Subscribe to Market Intelligence</h2>
                <p className={styles.subtitle}>Get exclusive insights into Indian commercial real estate trends, off-market opportunities, and policy changes delivered monthly.</p>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Enter your work email" className={styles.input} required />
                    <button type="submit" className={styles.button}>Subscribe Now</button>
                </form>
                <p className={styles.privacyNote}>We respect your privacy. No spam, just pure intelligence.</p>
            </div>
        </section>
    );
};

export default Newsletter;
