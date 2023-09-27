import React from 'react';
import FeatureItem from './FeatureItem';

import '../css/main.css';

import ImageChat from '../img/icon-chat.png'
import ImageMoney from '../img/icon-money.png'
import ImageSecurity from '../img/icon-security.png'

const Features = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        iconSrc={ImageChat}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        iconSrc={ImageMoney}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        iconSrc={ImageSecurity}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
};

export default Features;

