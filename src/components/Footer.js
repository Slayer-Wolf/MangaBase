import React from 'react';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';
import { useRoundSocialLinkStyles } from '@mui-treasury/styles/socialLink/round';

const RoundSocialLink =()=> {
  return (
    <div className="navbar fixed-bottom foot">
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
          href={'linkedin.com/in/darshan-talwar-2b167a132'}
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