import React from 'react';
import { FeaturedCard, FeaturedCardImg, FeaturedCardTitle, FeaturedCardPrice } from '../Styled/Card';
import AddtoCartBtn from './AddToCartBtn';

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
      <AddtoCartBtn _id={_id} />
    </FeaturedCard>
  );
};

export default Card;
