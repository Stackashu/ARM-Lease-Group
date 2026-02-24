import React from 'react';
import styles from '../styles/Partners.module.css';

const companies = [
    { name: "DLF India", domain: "dlf.in" },
    { name: "Vatika Group", domain: "vatikagroup.com" },
    { name: "Emaar India", domain: "in.emaar.com/en/" },
    { name: "M3M India", domain: "m3mindia.com" },
    { name: "Samsung", domain: "samsung.com" },
    { name: "Tata", domain: "tata.com" },
    { name: "Reliance", domain: "reliance.com" },
    { name: "HDFC Bank", domain: "hdfcbank.com" },
    { name: "ICICI Bank", domain: "icicibank.com" },
    { name: "Bestech", domain: "https://bestechgroup.com/images/logo-wht.png" },
    { name: "Seiren India", domain: "seiren.com" },
    { name: "Swagelok", domain: "swagelok.com" },
    { name: "Hanwha", domain: "hanwha.com" },
    { name: "One Step Global", domain: "onestep.global" }
];

const Partners = () => {
    // Duplicate list for seamless marquee
    const allCompanies = [...companies, ...companies];

    return (
        <section className={styles.partnersSection}>
            <h3 className={styles.title}>Trusted by Industry Leaders</h3>
            <div className={styles.marqueeContainer}>
                {allCompanies.map((company, index) => (
                    <div key={index} className={styles.logoBox}>
                        <img
                            src={company.name === "Bestech" ? company.domain : `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${company.domain}&size=256`}
                            alt={company.name}
                            className={styles.logo}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <span style={{ display: 'none', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{company.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
