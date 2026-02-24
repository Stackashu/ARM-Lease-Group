import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/armleaseLOGO.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setActiveSubmenu(null);
  };

  const toggleSubmenu = (menu) => {
    if (window.innerWidth <= 900) {
      setActiveSubmenu(activeSubmenu === menu ? null : menu);
    }
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      {/* Mobile Toggle Button */}
      <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Brand Logo */}
      <Link to="/" className={styles.logoLink} onClick={handleLinkClick}>
        <img
          src={logo}
          alt="ARM LEASECORP"
          className={`${styles.floatingLogo} ${scrolled ? styles.center : ''}`}
        />
      </Link>

      <div className={styles.brandContainer}>
        <Link to="/" className={styles.brandName}>
          ARM LEASECORP
        </Link>
      </div>

      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div
          className={`${styles.navItem} ${activeSubmenu === 'services' ? styles.active : ''}`}
          onClick={() => toggleSubmenu('services')}
        >
          <div className={styles.navItemLabel}>
            Services <ChevronDown size={16} className={`${styles.chevron} ${activeSubmenu === 'services' ? styles.rotate : ''}`} />
          </div>
          <div className={styles.dropdown}>
            <Link to="/services/corporate-leasing" className={styles.dropdownItem} onClick={handleLinkClick}>Corporate Leasing</Link>
            <Link to="/services/retail" className={styles.dropdownItem} onClick={handleLinkClick}>Retail Services</Link>
            <Link to="/services/advisory" className={styles.dropdownItem} onClick={handleLinkClick}>Investment Advisory</Link>
            <Link to="/services/interior" className={styles.dropdownItem} onClick={handleLinkClick}>Interior Management</Link>
          </div>
        </div>

        <div
          className={`${styles.navItem} ${activeSubmenu === 'insights' ? styles.active : ''}`}
          onClick={() => toggleSubmenu('insights')}
        >
          <div className={styles.navItemLabel}>
            Insights <ChevronDown size={16} className={`${styles.chevron} ${activeSubmenu === 'insights' ? styles.rotate : ''}`} />
          </div>
          <div className={styles.dropdown}>
            <Link to="/insights/clients" className={styles.dropdownItem} onClick={handleLinkClick}>Our Clients</Link>
            <Link to="/insights/trends" className={styles.dropdownItem} onClick={handleLinkClick}>Market Trends</Link>
          </div>
        </div>

        <Link to="/properties/list" className={styles.navItem} style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleLinkClick}>
          Properties
        </Link>
        <Link to="/contact-us" className={styles.contactBtn} onClick={handleLinkClick}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
