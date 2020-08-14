import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { ProductContext } from '../context/ProductProvider';
import { addToCart } from '../context/actions/productTypes';
import productService from '../context/actions/productsActions';
import { setLoading, getProducts } from '../context/actions/productTypes';
const DataFetcher = () => {
  const {
    authState: { isAuth },
    authState,
  } = useContext(AuthContext);
  const {
    productState: { cart },
    productDispatch,
  } = useContext(ProductContext);

  useEffect(() => {
    const populateCart = async () => {
      productDispatch(setLoading());
      const cart = await productService.updateCartProducts(authState, null, 0);
      productDispatch(addToCart(cart));
    };
    const populate = async () => {
      const res = await productService.getProducts();
      productDispatch(getProducts(res));
    };
    if (isAuth) {
      populateCart();
    }
    populate();
  }, [productDispatch, isAuth]);
  return <></>;
};

export default DataFetcher;
