import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Partners from '../sections/Partners';
import Stats from '../sections/Stats';
import InfoBlock from '../sections/InfoBlock';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Newsletter from '../sections/Newsletter';

const LandingPage = () => {
    return (
        <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
            <Hero />
            <Services />
            <Stats />
            <WhyChooseUs />
            <Partners />
            <Testimonials />
            <FAQ />
            <InfoBlock />
            <Newsletter />
        </div>
    );
};

export default LandingPage;
