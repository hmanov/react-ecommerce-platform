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
import RatingBar from './RatingBar';

const Card = ({ data: { _id, productName, price, sku, imageURL, totalRating }, data }) => {
  return (
    <FeaturedCard>
      <Link
        to={{ pathname: '/details', productData: data }}
        style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <FeaturedCardPrice>${price}</FeaturedCardPrice>
        <FeaturedCardImg src={imageURL} />
        <FeaturedCardTitle>{productName}</FeaturedCardTitle>
      </Link>
      <RatingBar totalRating={totalRating} productId={_id} />
      <FeaturedCardAddToCart>
        <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '25px', zIndex: '5' }} />
        Add To Cart
      </FeaturedCardAddToCart>
    </FeaturedCard>
  );
};

export default Card;
