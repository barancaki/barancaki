import { EXPERIENCE, SKILLS } from '../constants';

export const PERSON_NAME = 'Baran Caki';
export const DISPLAY_PERSON_NAME = 'Baran Çakı';

export const sameAsLinks = [
  'https://github.com/barancaki',
  'https://www.linkedin.com/in/baran-%C3%A7ak%C4%B1-9919b224b/',
];

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: DISPLAY_PERSON_NAME,
  alternateName: PERSON_NAME,
  jobTitle: ['AI Engineer', 'Automation Engineer', 'Automation Architect'],
  email: 'mailto:baran.caki@hotmail.com',
  sameAs: sameAsLinks,
  knowsAbout: SKILLS.map((skill) => skill.name),
  worksFor: {
    '@type': 'Organization',
    name: EXPERIENCE.find((item) => item.current)?.company,
  },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${DISPLAY_PERSON_NAME} Portfolio`,
  author: {
    '@type': 'Person',
    name: DISPLAY_PERSON_NAME,
  },
};

export const creativeWorkJsonLd = (
  name: string,
  description: string,
  keywords: string[],
  path: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name,
  description,
  keywords,
  url: path,
  creator: {
    '@type': 'Person',
    name: DISPLAY_PERSON_NAME,
  },
});
