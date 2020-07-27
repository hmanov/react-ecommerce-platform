import React from 'react';
import { FeaturedCard, FeaturedCardImg, FeaturedCardTitle, FeaturedCardPrice } from '../Styled/Card';
import { Link } from 'react-router-dom';

const Card = ({ data: { name, price, sku, imgUrl }, to }) => {
  return (
    <Link to={to}>
      <FeaturedCard>
        <FeaturedCardPrice>{price}</FeaturedCardPrice>
        <FeaturedCardImg src={imgUrl} />
        <FeaturedCardTitle>{name}</FeaturedCardTitle>
        <FeaturedCardTitle>{sku}</FeaturedCardTitle>
      </FeaturedCard>
    </Link>
  );
};

export default Card;
