import React from 'react';
import styles from '../styles/Stats.module.css';

const Stats = () => {
    const stats = [
        { value: "10+", label: "Years Experience" },
        { value: "500+", label: "Deals Closed" },
        { value: "1.5M+", label: "Sq. Ft. Leased" },
        { value: "50+", label: "Corporate Clients" }
    ];

    return (
        <section className={styles.statsSection}>
            <div className={styles.container}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                        <h2 className={styles.value}>{stat.value}</h2>
                        <p className={styles.label}>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
