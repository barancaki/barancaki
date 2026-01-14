import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <BentoGrid />
            <Certificates />
            <Timeline />
            <Contact />
        </main>
    );
};

export default Home;
