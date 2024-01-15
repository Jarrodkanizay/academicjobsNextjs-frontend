'use client';
import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Ensure the script is only added once
    if (window.ga) return;

    // Add Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-1VLH0S9KCJ``;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', 'G-1VLH0S9KCJ`');
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
