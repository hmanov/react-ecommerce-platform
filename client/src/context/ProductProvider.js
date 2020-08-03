import React, { createContext, useReducer } from 'react';

export const ProductsContext = createContext();

export const ProductsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PRODUCTS':
      return { ...state, products: payload, isLoading: false };
    case 'ADD_PRODUCT':
      return { ...state, products: state.products.push(payload), isLoading: false };
    default:
      return state;
  }
};
const initialState = {
  isLoading: true,
  products: [],
};
const ProductProvider = ({ children }) => {
  const [productState, productDispach] = useReducer(ProductsReducer, initialState);
  return <ProductsContext.Provider value={{ productState, productDispach }}>{children}</ProductsContext.Provider>;
};

export default ProductProvider;
