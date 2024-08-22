import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div className="map-container w-full h-96">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5155019786464!2d46.7622033!3d24.6245751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05379bb626b7%3A0xe0e962ce762845d5!2z2KzYp9mF2LnYsdmK2Kkg2KfZhNiz2KrYp9mB2YrYqSDYp9mE2LPYp9mE2YrYt9in2YTYo9mH!5e0!3m2!1sar!2seg!4v1692607608401!5m2!1sar!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
