export const actionTypes = {
  GetAllPRoducts: Symbol('[PROD] Get All Products'),
};

export const getProducts = (data) => ({ type: actionTypes.GetAllPRoducts, payload: data });
