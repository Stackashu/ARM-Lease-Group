import React from 'react';
import styles from '../styles/TeamCard.module.css';

const TeamCard = ({ image, name, role }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.image} />
                <div className={styles.socials}>
                    <div className={styles.socialIcon}>fb</div>
                    <div className={styles.socialIcon}>tw</div>
                    <div className={styles.socialIcon}>in</div>
                </div>
            </div>
            <span className={styles.role}>{role}</span>
            <h4 className={styles.name}>{name}</h4>
        </div>
    );
};

export default TeamCard;
