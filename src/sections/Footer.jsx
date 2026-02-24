import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import { Facebook, Twitter, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/armleaseLOGO.png';

const Footer = () => {
    // State to track which sections are open on mobile
    // Initialized to have the first section (index 0) open
    const [openSections, setOpenSections] = useState({ 0: true });

    const toggleSection = (index) => {
        setOpenSections(prev => (prev[index] ? {} : { [index]: true }));
    };

    const footerData = [
        {
            title: "SERVICES",
            links: [
                { label: "Corporate Leasing", path: "/services/corporate-leasing" },
                { label: "Retail Services", path: "/services/retail" },
                { label: "Investment Advisory", path: "/services/advisory" },
                { label: "Interior Management", path: "/services/interior" }
            ]
        },
        {
            title: "INSIGHTS",
            links: [
                { label: "Our Clients", path: "/insights/clients" },
                { label: "Market Trends", path: "/insights/trends" },
                { label: "User Feedback Form", path: "/feedback" }
            ]
        },
        {
            title: "COMPANY",
            links: [
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact-us" },
                { label: "Privacy Policy", path: "/privacy-policy" }
            ]
        },
        {
            title: "PROPERTIES",
            links: [
                { label: "List Your Requirement", path: "/properties/list" }
            ]
        }
    ];

    return (
        <footer className={styles.footer}>
            <h1 className={styles.heading}>
                LET'S <span className={styles.talk}>TALK!</span>
            </h1>

            <div className={styles.footerContent}>
                {footerData.map((section, index) => (
                    <div className={styles.column} key={index}>
                        <div className={styles.linksColumn}>
                            <div
                                className={styles.sectionHeader}
                                onClick={() => toggleSection(index)}
                            >
                                <h4>{section.title}</h4>
                                <div className={styles.chevronIcon}>
                                    {openSections[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>
                            <div className={`${styles.sectionContent} ${openSections[index] ? styles.contentVisible : ''}`}>
                                {section.links.map((link, lIndex) => (
                                    <Link to={link.path} className={styles.link} key={lIndex}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                <div className={styles.column}>
                    <div className={styles.linksColumn}>
                        <div className={styles.sectionHeaderStatic}>
                            <h4>CONTACT INFO</h4>
                        </div>
                        <div className={styles.sectionContentStatic}>
                            <span className={styles.link}>MAGNUM TOWER , 8th FLOOR GOLF COURSE EXT , ROAD , SECTOR - 58 , GURUGRAM 122011</span>
                            <span className={styles.link}>ashutoshmallick240990@gmail.com</span>
                            <span className={styles.link}>+91 9999 841 481</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.logoSmall}>
                    <img src={Logo} alt="ARM Lease Group Logo" className={styles.footerLogo} />
                </div>
                <div className={styles.copyright}>
                    Copyright © 2026 by ARM Lease Group. All Rights Reserved.
                </div>
                <div className={styles.socialIcons}>
                    <Facebook size={20} className={styles.socialIcon} />
                    <Twitter size={20} className={styles.socialIcon} />
                    <Linkedin size={20} className={styles.socialIcon} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
