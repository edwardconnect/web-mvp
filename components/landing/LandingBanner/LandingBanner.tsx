import React from 'react';

import Styles from './LandingBanner.style';
import { attributes } from '../../../content/landing.md';

const LandingBanner: React.FC<any> = () => {
  const {
    slogan,
    sloganDescription,
  } = attributes;
  return (

    <Styles.BannerWrapper>
      <Styles.Slogan>
        {slogan}
      </Styles.Slogan>
      <Styles.Description>
        {sloganDescription}
      </Styles.Description>
    </Styles.BannerWrapper>
  );
}

export default LandingBanner;