import React, { useState, useEffect } from 'react';
import styles from '../styles/UserFeedback.module.css';
import { Star } from 'lucide-react';

const UserFeedback = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Your Voice Matters</h1>
                <p className={styles.subtitle}>
                    At ARM Lease Group, we strive for excellence in every transaction. Your feedback helps us refine our services and better support your business goals.
                </p>
            </div>

            <div className={styles.formCard}>
                <form>
                    <div className={styles.ratingSection}>
                        <label className={styles.ratingLabel}>How would you rate your experience with us?</label>
                        <div className={styles.stars}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={40}
                                    className={`${styles.star} ${(hover || rating) >= star ? styles.starActive : ''}`}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    fill={(hover || rating) >= star ? "currentColor" : "none"}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.formGrid}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Full Name</label>
                            <input type="text" className={styles.input} placeholder="e.g. Alexander Pierce" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Corporate Email</label>
                            <input type="email" className={styles.input} placeholder="alex@company.com" />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label className={styles.label}>Your Feedback</label>
                            <textarea
                                className={`${styles.input} ${styles.textarea}`}
                                placeholder="Please share your thoughts on our service, market intelligence, or any areas where we can improve..."
                            ></textarea>
                        </div>
                    </div>

                    <button type="button" className={styles.submitBtn}>Submit Case Briefing</button>

                    <p className={styles.privacyNote}>
                        Formal submissions are reviewed by our Quality Assurance team. Your details remain strictly confidential under our corporate privacy policy.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default UserFeedback;
