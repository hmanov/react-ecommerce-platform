import React, { createContext, useReducer } from 'react';
import { actionTypes } from './actions/productTypes';
const initialState = {
  isLoading: true,
  products: [],
};

const actionMap = {
  [actionTypes.GetAllPRoducts]: (state, data) => ({ ...state, products: [data] }),
};
export const ProductContext = createContext();

export const productReducer = (state, action) => {
  const handler = actionMap[action.type];
  return handler ? handler(state, action.payload) : state;
};

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, initialState);
  return <ProductContext.Provider value={{ productState, productDispatch }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
