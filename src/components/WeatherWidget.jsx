import React, { useEffect } from 'react';

const WeatherWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'weatherwidget-io-js';
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true; // Add async attribute for better performance
    document.body.appendChild(script);

    return () => {
      // Cleanup function to remove the script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="weatherwidget-io"
      href="https://forecast7.com/en/33d84n81d16/south-carolina/?unit=us"
      data-label_1="SOUTH CAROLINA"
      data-label_2="WEATHER"
      data-theme="blank"
      style={{zIndex: '-1'}}
    >
      SOUTH CAROLINA WEATHER
    </a>
  );
};

export default WeatherWidget;
