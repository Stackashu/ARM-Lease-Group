import React from 'react';
import styles from '../styles/ServiceCard.module.css';

const ServiceCard = ({ title, description, image }) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <div className={styles.imageContainer}>
                <img src={image || "https://placehold.co/400x300"} alt={title} className={styles.image} />
            </div>

            <div className={styles.iconButton}>
                →
            </div>
        </div>
    );
};

export default ServiceCard;
