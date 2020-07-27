import React, { createContext, useReducer } from 'react';

export const ProductsContext = createContext();

export const ProductsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_PRODUCTS':
      return { ...state, featured: payload };
    default:
      return state;
  }
};
const initialState = {
  featured: [],
  products: [],
};
const ProductProvider = ({ children }) => {
  const [productState, productDispach] = useReducer(ProductsReducer, initialState);
  return <ProductsContext.Provider value={{ productState, productDispach }}>{children}</ProductsContext.Provider>;
};

export default ProductProvider;
