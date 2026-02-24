import React from 'react';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
    const reviews = [
        {
            text: "Exceptional service! The team went above and beyond to find us the perfect office space. Highly recommended for their professionalism.",
            name: "Sarah Johnson",
            role: "CEO, TechFlow",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
        },
        {
            text: "Professional, reliable, and incredibly efficient. They managed our interior renovation seamlessly. A truly premium experience.",
            name: "Michael Chen",
            role: "Director, Urban Architects",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
        },
        {
            text: "Their investment advisory gave us clear insights and solid returns. I trust their market knowledge implicitly.",
            name: "Emily Davis",
            role: "Investor",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60"
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Client Stories</h2>
            <div className={styles.grid}>
                {reviews.map((review, index) => (
                    <div key={index} className={styles.card}>
                        <p className={styles.quote}>"{review.text}"</p>
                        <div className={styles.client}>
                            <img src={review.image} alt={review.name} className={styles.avatar} />
                            <div className={styles.info}>
                                <h4>{review.name}</h4>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
