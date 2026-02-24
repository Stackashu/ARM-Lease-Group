import React from 'react';
import styles from '../styles/WhyChooseUs.module.css';
import { ShieldCheck, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <ShieldCheck size={32} />,
            title: "Trusted Reliability",
            description: "With years of experience, we guarantee secure and transparent transactions for all your needs."
        },
        {
            icon: <Clock size={32} />,
            title: "Timely Delivery",
            description: "We value your time. Our dedicated team ensures projects and services are delivered strictly on schedule."
        },
        {
            icon: <Users size={32} />,
            title: "Client-Centric Approach",
            description: "Your satisfaction is our priority. We tailor our services to meet your specific goals and requirements."
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Why Choose Us</h2>
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            {feature.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.description}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
