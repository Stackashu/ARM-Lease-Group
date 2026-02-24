import { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css';
import heroImage from '../assets/Home1.jpg';

const Hero = () => {
    return (
        <section className={styles.heroSection} style={{ backgroundImage: `url(${heroImage})` }}>
            <div className={styles.heroContent}>
                <div className={styles.yellowBox}>
                    <div className={styles.subTitle}>ARM LEASECORP</div>
                    <h1 className={styles.title}>
                        Your Vision.<br />
                        Our Space.<br />
                        Endless possibilities.
                    </h1>
                    <a href="#project" className={styles.cta}>
                        see project
                        <span className={styles.arrow}>→</span>
                    </a>
                </div>
            </div>

            <div className={styles.statsContainer}>
                <div className={`${styles.statBox} ${styles.statBoxPrimary}`}>
                    <span className={styles.statNumber}><AnimatedCounter end={50} /></span>
                    <span className={styles.statLabel}>Satisfied Customers</span>
                </div>
                <div className={`${styles.statBox} ${styles.statBoxSecondary}`}>
                    <span className={styles.statNumber}><AnimatedCounter end={100} /></span>
                    <span className={styles.statLabel}>Successful Projects</span>
                </div>
            </div>
        </section>
    );
};

const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;

            if (progress < duration) {
                const percentage = progress / duration;
                const easeOut = 1 - Math.pow(1 - percentage, 3);
                setCount(Math.ceil(end * easeOut));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}</span>;
};

export default Hero
