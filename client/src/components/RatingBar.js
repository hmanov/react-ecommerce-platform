import React, { useContext, useCallback } from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from 'styled-components';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../context/AuthProvider';
import { ProductContext } from '../context/ProductProvider';
import productService from '../context/actions/productsActions';
import { rateProduct } from '../context/actions/productTypes';

const RatingBar = ({ totalRating, productId }) => {
  const calculatedRating = useCallback(() => {
    return totalRating.length > 0
      ? (totalRating.map((e) => e.rating).reduce((acc, val) => acc + val, 0) / totalRating.length).toFixed(2)
      : 0;
  }, [totalRating]);

  const {
    authState: { isAuth },
    authState,
  } = useContext(AuthContext);

  const { productDispatch } = useContext(ProductContext);
  const theme = useContext(ThemeContext);
  const rateHandler = async (rate) => {
    const res = await productService.rateProduct(authState, productId, rate);
    productDispatch(rateProduct({ ...res, productId }));
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '80%' }}>
      <Rating
        onClick={rateHandler}
        fractions='2'
        readonly={!isAuth}
        initialRating={calculatedRating()}
        emptySymbol={<FontAwesomeIcon style={{ color: theme.primary }} icon={faStar} />}
        fullSymbol={<FontAwesomeIcon style={{ color: theme.primary }} icon={fullStar} />}
      />

      {calculatedRating() ? (
        <span style={{ fontSize: '14px' }}>
          {'('}
          {calculatedRating()}
          {'  from '} {totalRating.length}
          {')'}
        </span>
      ) : (
        <span> Not rated yet</span>
      )}
    </div>
  );
};

export default RatingBar;
