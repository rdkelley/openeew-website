import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

const BannerText = () => (
  <h1 className="banner-header">
    An open-source earthquake-alerting project <span className="emphasize">helping people get out of harm's
    way</span>
  </h1>
);

const SecondLeftText = () => (
  <p>
    Wondering how
    <br />
    to contribute?
  </p>
);

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, or ideas in order to produce the best
    possible experience for our users. If you’re interested in contributing,
    check out our contributing guidelines to get started.
  </p>
);

const customProps = {
  Banner: (
    <>
      <HomepageBanner renderText={BannerText} />
    </>
  ),
  // gatsby-carbon notes: If you don't define the callout's, gatsby-carbon will do it for you. 
  FirstCallout: (
    <>
    </>
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#001d6c"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
