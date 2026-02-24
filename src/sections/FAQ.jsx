import React, { useState } from 'react';
import styles from '../styles/FAQ.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            q: "What types of commercial properties do you handle?",
            a: "We specialize in Grade-A office spaces, retail outlets in high-street locations, and industrial warehouses across major Indian metro cities."
        },
        {
            q: "How does ARM Lease support corporate relocation?",
            a: "We provide end-to-end support including market research, technical due diligence, commercial negotiation, and fit-out coordination to ensure a seamless transition."
        },
        {
            q: "Do you assist with legal documentation and compliance?",
            a: "Yes, our legal desk ensures all lease agreements are compliant with local laws and protect our clients' interests throughout the tenure."
        },
        {
            q: "What is your consultation fee for investment advisory?",
            a: "Our fees are performance-based and transparent. Contact us for a custom proposal based on your investment portfolio objectives."
        }
    ];

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                    {questions.map((item, index) => (
                        <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
                            <button className={styles.question} onClick={() => toggle(index)}>
                                <span>{item.q}</span>
                                <ChevronDown className={styles.chevron} size={20} />
                            </button>
                            <div className={styles.answer}>
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
