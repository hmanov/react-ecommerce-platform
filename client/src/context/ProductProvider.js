import React, { createContext, useReducer } from 'react';

export const ProductsContext = createContext();

export const ProductsReducer = (state, action) => {
  const { type, payload } = action;
};
const initialState = {
  isLoading: true,
  products: [],
};

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(ProductsReducer, initialState);
  return <ProductsContext.Provider value={{ productState, productDispatch }}>{children}</ProductsContext.Provider>;
};

export default ProductProvider;
