import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  favicon?: string; // URL del favicon, opcional
}

const DEFAULTS = {
  title: 'LineaSoftTech - Soluciones de Software',
  description: 'Desarrollamos software a medida, apps y sitios web para impulsar tu negocio.',
  image: 'https://tusitio.com/logoOscar1.jpeg',
  url: 'https://tusitio.com/',
  favicon: '/vite.svg', // default del favicon
};

export const SEO = ({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  image = DEFAULTS.image,
  url = DEFAULTS.url,
  favicon = DEFAULTS.favicon,
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Función para crear o actualizar meta tags
    const setMeta = (prop: string, value: string, isProperty = true) => {
      let el: HTMLMetaElement | null;
      if (isProperty) {
        el = document.querySelector(`meta[property="${prop}"]`);
      } else {
        el = document.querySelector(`meta[name="${prop}"]`);
      }
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', prop);
        else el.setAttribute('name', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Open Graph
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:type', 'website');
    if (image) setMeta('og:image', image);
    if (url) setMeta('og:url', url);

    // Twitter Cards
    setMeta('twitter:card', 'summary_large_image', false);
    setMeta('twitter:title', title, false);
    setMeta('twitter:description', description, false);
    if (image) setMeta('twitter:image', image, false);

    // Favicon - Desktop y Mobile
    const setFavicon = (href: string) => {
      let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'icon');
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);

      // Apple Touch Icon para iOS
      let appleLink: HTMLLinkElement | null = document.querySelector("link[rel='apple-touch-icon']");
      if (!appleLink) {
        appleLink = document.createElement('link');
        appleLink.setAttribute('rel', 'apple-touch-icon');
        document.head.appendChild(appleLink);
      }
      appleLink.setAttribute('href', href);
    };

    if (favicon) setFavicon(favicon);
  }, [title, description, image, url, favicon]);

  return null;
};