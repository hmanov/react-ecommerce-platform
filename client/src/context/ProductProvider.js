import React, { createContext, useReducer } from 'react';
import { actionTypes } from './actions/productTypes';
const initialState = {
  isLoading: true,
  products: [],
  productErrors: [],
  editData: null,
  cart: [],
};

const actionMap = {
  [actionTypes.GetAllPRoductsSuccess]: (state, payload) => ({ ...state, products: payload, isLoading: false }),
  [actionTypes.DeleteProductSuccess]: (state, payload) => ({
    ...state,
    products: state.products.filter((e) => e._id !== payload),
  }),
  [actionTypes.AddProductSuccess]: (state, payload) => ({ ...state, products: [...state.products, payload] }),
  [actionTypes.AddProductfailure]: (state, payload) => ({ ...state, productErrors: payload.errors }),
  [actionTypes.SetEditData]: (state, payload) => ({ ...state, editData: payload }),
  [actionTypes.ClearEditData]: (state) => ({ ...state, editData: null }),
  [actionTypes.ClearErrors]: (state) => ({ ...state, productErrors: [] }),
  [actionTypes.UpdateProductSuccess]: (state, payload) => ({
    ...state,
    products: state.products.map((e) => (e._id === payload._id ? payload : e)),
  }),
  [actionTypes.RateSuccess]: (state, payload) => ({
    ...state,
    products: state.products.map((e) => (e._id === payload.productId ? { ...e, totalRating: payload.data } : e)),
  }),
  [actionTypes.RateFailure]: (state, payload) => ({ ...state, productErrors: [payload.data] }),

  [actionTypes.AddToCartSuccess]: (state, payload) => ({ ...state, cart: payload, isLoading: false }),
  [actionTypes.ClearProductState]: (state) => ({ ...state, cart: [], isLoading: false }),
  [actionTypes.Loading]: (state) => ({ ...state, isLoading: true }),
};
export const ProductContext = createContext();

export const productReducer = (state, action) => {
  const handler = actionMap[action.type];
  console.log(action.type);
  return handler ? handler(state, action.payload) : state;
};

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, initialState);
  return <ProductContext.Provider value={{ productState, productDispatch }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
