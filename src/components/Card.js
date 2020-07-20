import React from 'react';
import { FeaturedCard, FeaturedCardImg, FeaturedCardTitle, FeaturedCardPrice } from '../Styled/Card';
const Card = () => {
  return (
    <FeaturedCard>
      <FeaturedCardPrice>$199</FeaturedCardPrice>
      <FeaturedCardImg src={'https://p1.akcdn.net/full/574756884.ducky-one-2-rgb-tkl-dkon1787st.jpg'} />
      <FeaturedCardTitle>Ducky One 2 TKL RGB</FeaturedCardTitle>
    </FeaturedCard>
  );
};

export default Card;
