import React from 'react';
import {
  FeaturedCard,
  FeaturedCardImg,
  FeaturedCardTitle,
  FeaturedCardPrice,
  FeaturedCardAddToCart,
} from '../Styled/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Card = ({ data: { name, price, sku, imgUrl }, to }) => {
  return (
    <FeaturedCard>
      <Link to={to} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FeaturedCardPrice>${price}</FeaturedCardPrice>
        <FeaturedCardImg src={imgUrl} />
        <FeaturedCardTitle>{name}</FeaturedCardTitle>
      </Link>
      <FeaturedCardAddToCart>
        <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '25px', zIndex: '5' }} />
        Add To Cart
      </FeaturedCardAddToCart>
    </FeaturedCard>
  );
};

export default Card;
