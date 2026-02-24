import React, { useEffect } from 'react';
import styles from '../styles/ContactUs.module.css';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.description}>
                    Have a question or requirement? Our team is ready to assist you.
                </p>

                <div className={styles.mainGrid}>
                    {/* Contact Info */}
                    <div className={styles.infoSection}>
                        <div className={styles.headquarters}>
                            <h3 className={styles.sectionTitle}>Headquarters</h3>
                            <div className={styles.infoItem}>
                                <div className={styles.icon}>📍</div>
                                <p className={styles.text}>
                                    MAGNUM TOWER, 8th FLOOR<br />
                                    GOLF COURSE EXT ROAD, SECTOR-58<br />
                                    GURUGRAM, 122011
                                </p>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.icon}>📧</div>
                                <p className={styles.text}>ashutoshmallick240990@gmail.com</p>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.icon}>📞</div>
                                <p className={styles.text}>+91 9999 841 481</p>
                            </div>
                        </div>

                        <div className={styles.globalPresence}>
                            <h4 className={styles.globalTitle}>Global Presence</h4>
                            <p className={styles.globalText}>
                                We also have partner offices in Dubai, Singapore, and London to serve our international clientele.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formCard}>
                        <h3 className={styles.formTitle}>Send us a Message</h3>
                        <form className={styles.form}>
                            <div className={styles.nameRow}>
                                <input type="text" placeholder="First Name" className={styles.input} />
                                <input type="text" placeholder="Last Name" className={styles.input} />
                            </div>
                            <input type="email" placeholder="Email Address" className={styles.input} />
                            <input type="tel" placeholder="Phone Number" className={styles.input} />
                            <textarea placeholder="How can we help you?" className={styles.textarea}></textarea>
                            <button type="submit" className={styles.submitButton}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
