import React from 'react';
import styles from '../styles/Services.module.css';
import ServiceCard from '../components/ServiceCard';

// Importing assets for demo or using placeholders if not available
// User said "i also provide the images in assets for hero section" - implies only hero?
// I'll check if there are others later or use placeholders.
// Strategy: Use placeholders from web for now unless I find more in assets.

const Services = () => {
    const services = [
        {
            title: "OFFICE SPACE",
            description: "There are many variations of passages of Lorem Ipsum available.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "WAREHOUSE",
            description: "There are many variations of passages of Lorem Ipsum available.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "OFFICE DESIGN",
            description: "There are many variations of passages of Lorem Ipsum available.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section className={styles.servicesSection}>
            {/* The overlap from hero handles the space, but we might needs a spacer if hero stats cover content */}
            <div className={styles.grid}>
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default Services;
