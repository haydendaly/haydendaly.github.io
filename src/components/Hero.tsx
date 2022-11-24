import React, { useEffect } from 'react';

import { useStyle } from '~/functions/Style';

function Hero() {
  const { isMobile, theme, checkTheme } = useStyle();

  useEffect(() => checkTheme('hero'), []);

  return (
    <div style={{ width: '100%', paddingTop: isMobile ? 10 : 15 }}>
      <h1
        className={
          'hero-text' +
          (theme === 'rainbow' ? ' translucent-text' : '') +
          (isMobile ? ' mobile-hero-text' : '')
        }>
        Developer focused on systems and programming languages.
      </h1>
      <div className="hero-sub-text-container">
        <p className={'hero-sub-text' + (isMobile ? ' mobile-sub-text' : '')}>
          Interested in working together?
        </p>
        <div className="rainbow-text-container">
          <a
            href="https://calendly.com/haydencdaly"
            target="_blank"
            rel="noreferrer"
            className={
              'hero-sub-link-text' +
              (theme !== 'rainbow' ? ' rainbow-text' : '') +
              (isMobile ? ' mobile-sub-text' : '')
            }>
            Let's chat.
          </a>
          {theme !== 'rainbow' ? <div className="rainbow rainbow-text-underline" /> : ''}
        </div>
      </div>
    </div>
  );
}

export default Hero;
