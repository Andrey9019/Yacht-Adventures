import React from "react";

const ResponsiveImage = ({ mobileSrc, desktopSrc, alt }) => {
  return (
    <picture>
      {/* Для екранів 1024px і більше */}
      <source
        media="(min-width: 1024px)"
        srcSet={desktopSrc}
        type="image/webp"
      />
      {/* За замовчуванням для мобільних пристроїв */}
      <img src={mobileSrc} alt={alt} loading="lazy" />
    </picture>
  );
};

export default ResponsiveImage;
