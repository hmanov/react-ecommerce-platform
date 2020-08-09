import React, { createContext, useReducer } from 'react';
import { actionTypes } from './actions/productTypes';
const initialState = {
  isLoading: true,
  products: [],
  productErrors: [],
  cart: [],
  editData: null,
};

const actionMap = {
  [actionTypes.GetAllPRoductsSuccess]: (state, data) => ({ ...state, products: data, isLoading: false }),
  [actionTypes.DeleteProductSuccess]: (state, data) => ({
    ...state,
    products: state.products.filter((e) => e._id !== data),
  }),
  [actionTypes.GetAllPRoductsSuccess]: (state, data) => ({ ...state, products: data, isLoading: false }),
  [actionTypes.AddProductSuccess]: (state, data) => ({ ...state, products: [...state.products, data] }),
  [actionTypes.AddProductfailure]: (state, data) => ({ ...state, productErrors: data.errors }),
  [actionTypes.SetEditData]: (state, data) => ({ ...state, editData: data }),
  [actionTypes.ClearEditData]: (state, data) => ({ ...state, editData: null }),
  [actionTypes.ClearErrors]: (state) => ({ ...state, productErrors: [] }),
  [actionTypes.UpdateProductSuccess]: (state, data) => ({
    ...state,
    products: state.products.map((e) => (e._id === data._id ? data : e)),
  }),
  [actionTypes.RateSuccess]: (state, data) => ({
    ...state,
    products: state.products.map((e) => (e._id === data.productId ? { ...e, totalRating: data.data } : e)),
  }),
};
export const ProductContext = createContext();

export const productReducer = (state, action) => {
  const handler = actionMap[action.type];
  console.log(handler);
  return handler ? handler(state, action.payload) : state;
};

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, initialState);
  return <ProductContext.Provider value={{ productState, productDispatch }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
