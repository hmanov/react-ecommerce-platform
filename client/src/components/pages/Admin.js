import React, { useContext, useState, useEffect } from 'react';
import ProductForm from '../ProductForm';
import { ProductContext } from '../../context/ProductProvider';

import { AdminContainer } from '../../Styled/AdminStyled';
import ProductList from '../ProductList';
import productService from '../../context/actions/productsActions';
import { getProducts } from '../../context/actions/productTypes';

const Admin = () => {
  const { productDispatch } = useContext(ProductContext);
  const [getEditData, setGetEditData] = useState();

  useEffect(async () => {
    const res = await productService.getProducts();
    productDispatch(res);
  }, [productService.getProducts]);
  return (
    <AdminContainer>
      <ProductList getEditData={(e) => setGetEditData(e)} />
      <ProductForm editData={getEditData} style={{ width: '500px' }} />
    </AdminContainer>
  );
};

export default Admin;
