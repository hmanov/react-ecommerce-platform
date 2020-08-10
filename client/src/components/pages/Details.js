import React from 'react';
import { Redirect } from 'react-router-dom';
import { DetailsContainer, ImageContainer, InfoContainer, PriceTag, DetailsSpan } from '../../Styled/Details';
import RatingBar from '../RatingBar';
import { FeaturedCardAddToCart } from '../../Styled/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
const Details = ({ location: { productData }, history }) => {
  const { imageURL, price, SKU, productName, date, totalRating, availability } = productData || {};

  return productData ? (
    <DetailsContainer>
      <ImageContainer>
        <img style={{ maxHeight: '100%', maxWidth: '100%' }} alt='img' src={imageURL} />
      </ImageContainer>
      <InfoContainer>
        <h3>{productName}</h3>
        <RatingBar totalRating={totalRating} />
        <PriceTag>${price.toFixed(2)}</PriceTag>
        <DetailsSpan>
          <strong>Availability: </strong>{' '}
          <strong style={{ color: availability ? 'green' : 'red' }}>
            {availability ? ' In Stock' : ' Out Of Stock'}
          </strong>
        </DetailsSpan>
        <DetailsSpan>
          <strong>SKU:</strong> {SKU}
        </DetailsSpan>
        <DetailsSpan>
          <strong>Added on: </strong>
          {moment(date).format('DD-MM-YYYY HH:MM')}
        </DetailsSpan>
        {}
        <FeaturedCardAddToCart>
          <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '25px', zIndex: '5' }} />
          Add To Cart
        </FeaturedCardAddToCart>
      </InfoContainer>
    </DetailsContainer>
  ) : (
    <Redirect to='/' />
  );
};

export default Details;
