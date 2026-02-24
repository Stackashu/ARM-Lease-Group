import React from 'react';
import styles from '../styles/InfoBlock.module.css';
import home2 from '../assets/Home2.jpg';

const InfoBlock = () => {
    return (
        <section className={styles.infoSection}>
            <div className={styles.leftText}>
                <img src={home2} alt="Real Estate" className={styles.fullHeightImage} />
                <div className={styles.imageOverlay}>
                    <h3 className={styles.overlayTitle}>Luxurious Office Space</h3>
                    <p className={styles.overlayText}>Experience luxury living in the heart of the city.</p>
                </div>
            </div>

            <div className={styles.contentBox}>
                <h2 className={styles.questionTitle}>Do you still have a<br />question?</h2>
                <p className={styles.questionText}>
                    Learn more about our expert agents. What specific information are you looking for?
                </p>
                <button className={styles.contactBtn}>Contact Us</button>
            </div>
        </section>
    );
};

export default InfoBlock;
