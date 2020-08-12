import React, { useContext } from 'react';
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
import { AuthContext } from '../context/AuthProvider';
import { ProductContext } from '../context/ProductProvider';
import productService from '../context/actions/productsActions';
import { addToCart } from '../context/actions/productTypes';
import { withRouter } from 'react-router-dom';

const Card = ({ data: { _id, productName, price, sku, imageURL, totalRating }, data, history }) => {
  const { authState } = useContext(AuthContext);
  const { productDispatch } = useContext(ProductContext);

  const addToCardHandler = async () => {
    if (!authState.isAuth) {
      history.push('/register');
    }
    const res = await productService.updateCartProducts(authState, _id, 1);

    productDispatch(addToCart(res));
  };
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
      <FeaturedCardAddToCart onClick={addToCardHandler}>
        <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '25px', zIndex: '5' }} />
        Add To Cart
      </FeaturedCardAddToCart>
    </FeaturedCard>
  );
};

export default withRouter(Card);
