export const actionTypes = {
  GetAllPRoductsSuccess: Symbol('[PROD] Get All Products'),
  GetAllPRoductsFailure: Symbol('[PROD] Fail to get Products'),

  DeleteProductSuccess: Symbol('[PROD] Delete Product'),
  DeleteProductFailure: Symbol('[PROD], Delete Prodict Fail'),

  AddProductSuccess: Symbol('[PROD] Add Product'),
  AddProductfailure: Symbol('[PROD] Add Product Fail'),

  SetEditData: Symbol('[PROD] Set edit Data'),
  ClearEditData: Symbol('[PROD] Clear Edit Data'),
  ClearErrors: Symbol('[PROD] Clear errors'),

  UpdateProductSuccess: Symbol('[PROD] Update Product Success'),
  UpdateProductFailure: Symbol('[PROD] Update Product Failure'),

  RateSuccess: Symbol('[PROD] Rate Product Success'),
  RateFailure: Symbol('[PROD] Rate Product Failure'),

  AddToCartSuccess: Symbol('[PROD] Added to Cart Success'),
  AddToCartFailure: Symbol('[PROD] Added to Cart Failure'),

  ClearProductState: Symbol('[PROD] CLEAR STATE'),
  Loading: Symbol('PROD Loading true'),
};

const getProductsSuccess = (data) => ({ type: actionTypes.GetAllPRoductsSuccess, payload: data });
const getProductsFailure = (data) => ({ type: actionTypes.GetAllPRoductsFailure, payload: data });
export const getProducts = ({ status, data }) => (status >= 400 ? getProductsFailure(data) : getProductsSuccess(data));

const deleteProductSuccess = (data) => ({ type: actionTypes.DeleteProductSuccess, payload: data });
const deleteProductFailure = (data) => ({ type: actionTypes.DeleteProductFailure, payload: data });
export const deleteProduct = ({ status, data }) =>
  status >= 400 ? deleteProductFailure(data) : deleteProductSuccess(data);

const addProductSuccess = (data) => ({ type: actionTypes.AddProductSuccess, payload: data });
const addProductFailure = (data) => ({ type: actionTypes.AddProductfailure, payload: data });
export const addProduct = ({ status, data }) => (status >= 400 ? addProductFailure(data) : addProductSuccess(data));

export const setEditData = (data) => ({ type: actionTypes.SetEditData, payload: data });
export const clearEditData = () => ({ type: actionTypes.ClearEditData });
export const clearErrors = () => ({ type: actionTypes.ClearErrors });

const updateProductSuccess = (data) => ({ type: actionTypes.UpdateProductSuccess, payload: data });
const updateProductFailure = (data) => ({ type: actionTypes.UpdateProductFailure, payload: data });
export const updateProduct = ({ status, data }) =>
  status >= 400 ? updateProductFailure(data) : updateProductSuccess(data);

const rateFailure = (data) => ({ type: actionTypes.rateFailure, payload: data });
const rateSuccess = (data) => ({ type: actionTypes.RateSuccess, payload: data });
export const rateProduct = ({ status, data, productId }) =>
  status >= 400 ? rateFailure(data) : rateSuccess({ data, productId });

const addToCartSuccess = (data) => ({ type: actionTypes.AddToCartSuccess, payload: data });
const addToCartFailure = (data) => ({ type: actionTypes.AddToCartFailure, payload: data });
export const addToCart = ({ status, data }) => (status >= 400 ? addToCartFailure(data) : addToCartSuccess(data));

export const clearProductState = () => ({ type: actionTypes.ClearProductState });
export const setLoading = () => ({ type: actionTypes.Loading });
