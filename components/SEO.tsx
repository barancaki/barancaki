import React, { useEffect } from 'react';

type JsonLd = Record<string, unknown>;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'profile' | 'article';
  image?: string;
  jsonLd?: JsonLd | JsonLd[];
}

const DEFAULT_IMAGE = '/logo.png';
const SITE_NAME = 'Baran Caki Portfolio';

const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const setLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  jsonLd,
}) => {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = `${origin}${canonicalPath}`;
    const imageUrl = image.startsWith('http') ? image : `${origin}${image}`;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', type);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
    setLink('canonical', canonicalUrl);

    const existingJsonLd = document.head.querySelectorAll('script[data-route-jsonld="true"]');
    existingJsonLd.forEach((script) => script.remove());

    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((item) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.dataset.routeJsonld = 'true';
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }
  }, [description, image, jsonLd, path, title, type]);

  return null;
};

export default SEO;
