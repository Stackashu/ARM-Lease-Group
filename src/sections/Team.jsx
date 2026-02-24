import React from 'react';
import styles from '../styles/Team.module.css';
import TeamCard from '../components/TeamCard';

const Team = () => {
    const team = [
        {
            name: "Leslie Alexander",
            role: "SR. Construction",
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60"
        },
        {
            name: "Abhishek Sharma",
            role: "SR. Construction",
            image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=500&auto=format&fit=crop&q=60"
        },
        {
            name: "Donovan Ferreira",
            role: "SR. Construction",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60"
        }
    ];

    return (
        <section className={styles.teamSection}>
            <h2 className={styles.title}>Team People</h2> {/* Text hard to read in image, assuming Team People */}
            <div className={styles.grid}>
                {team.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>
        </section>
    );
};

export default Team;
