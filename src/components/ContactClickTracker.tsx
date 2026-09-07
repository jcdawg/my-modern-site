'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, string>
    ) => void;
    dataLayer?: unknown[];
  }
}

const MAILTO_PREFIX = 'mailto:chris@thekasgroup.com';

export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a[href^="mailto:"]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const hrefAttr = anchor.getAttribute('href') ?? '';
      if (!hrefAttr.toLowerCase().startsWith(MAILTO_PREFIX)) return;

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'contact_click', {
          method: 'mailto',
          link_url: hrefAttr,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
