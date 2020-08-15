import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductProvider';
import { Redirect } from 'react-router-dom';
import { DetailsContainer, ImageContainer, InfoContainer, PriceTag, DetailsSpan } from '../../Styled/Details';
import RatingBar from '../RatingBar';
import moment from 'moment';
import AddTocCardBtn from '../AddToCartBtn';
const Details = ({ location: { productData }, history }) => {
  const { _id } = productData || {};
  const {
    productState: { products },
  } = useContext(ProductContext);
  const { imageURL, price, SKU, productName, date, totalRating, availability } =
    products.filter((e) => e._id === _id)[0] || {};
  return productData ? (
    <DetailsContainer>
      <ImageContainer>
        <img style={{ maxHeight: '100%', maxWidth: '100%' }} alt='img' src={imageURL} />
      </ImageContainer>
      <InfoContainer>
        <h3>{productName}</h3>
        <RatingBar totalRating={totalRating} productId={_id} />
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
        <AddTocCardBtn _id={_id} />
      </InfoContainer>
    </DetailsContainer>
  ) : (
    <Redirect to='/' />
  );
};

export default Details;
