import React from 'react';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';
import { useRoundSocialLinkStyles } from '@mui-treasury/styles/socialLink/round';

const RoundSocialLink =()=> {
  return (
    <div className="foot">
      <SocialProvider useStyles={useRoundSocialLinkStyles}>
        <SocialLink
          brand={'FacebookCircle'}
          href={"#"}
        />
        <SocialLink brand={'Twitter'} href={'#'} />
        <SocialLink
          brand={'Instagram'}
          href={'#'}
        />
        <SocialLink
          brand={'LinkedIn'}
          href={'https://www.linkedin.com/in/siriwat-kunaporn-1b4095158/'}
        />
        <SocialLink
          brand={'GithubCircle'}
          href={"https://github.com/Slayer-Wolf"}
        />
      </SocialProvider>
    </div>
  );
};
export default RoundSocialLink;