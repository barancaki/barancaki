import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { personJsonLd, websiteJsonLd } from '../lib/seo';

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
            <SEO
                title="Baran Çakı | AI Engineer & Automation Engineer"
                description="Portfolio of Baran Çakı, an AI Engineer and Automation Engineer building n8n workflows, Python automation, web scraping systems, and AI-powered products."
                path="/"
                type="profile"
                jsonLd={[personJsonLd, websiteJsonLd]}
            />
            <Hero />
            <BentoGrid />
            <Certificates />
            <Timeline />
            <Contact />
        </main>
    );
};

export default Home;
