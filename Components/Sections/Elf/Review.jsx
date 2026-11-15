"use client";  // Add this line at the very top of the file

import { useEffect } from 'react';

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-36a2100b-3973-4d64-8dbd-71d9652f37bb" data-elfsight-app-lazy></div>
  );
};

export default ElfsightWidget;
