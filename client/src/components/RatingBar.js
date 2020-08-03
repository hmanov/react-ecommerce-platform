import React, { useContext, useCallback } from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from 'styled-components';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../context/AuthProvider';
const RatingBar = ({ rate, rating }) => {
  const calculatedRating = useCallback(() => {
    return rating.length > 0 ? rating.map((e) => e.rating).reduce((acc, val) => acc + val, 0) / rating.length : 0;
  }, [rating]);
  const {
    authState: { isAuth },
  } = useContext(AuthContext);
  const theme = useContext(ThemeContext);
  return (
    <div style={{ display: 'flex' }}>
      <Rating
        onClick={(e) => rate(e)}
        fractions='2'
        readonly={!isAuth}
        initialRating={calculatedRating()}
        emptySymbol={<FontAwesomeIcon style={{ color: theme.primary }} icon={faStar} />}
        fullSymbol={<FontAwesomeIcon style={{ color: theme.primary }} icon={fullStar} />}
      />
      {'  -  '}
      {calculatedRating() ? (
        <span>
          {calculatedRating()} on {rating.length}
        </span>
      ) : (
        <span> Not rated yet</span>
      )}
    </div>
  );
};

export default RatingBar;
