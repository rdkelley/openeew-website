import React from 'react';
import { HomepageBanner } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const BannerText = () => (
  <h1>
    An open-source earthquake-alerting project helping people get out of harm's
    way
  </h1>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
