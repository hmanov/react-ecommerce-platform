import React, { useContext, useState, useEffect } from 'react';
import ProductForm from '../ProductForm';
import { ProductsContext } from '../../context/ProductProvider';

import { AdminContainer } from '../../Styled/AdminStyled';
import ProductList from '../ProductList';
import { getProducts } from '../../context/actions/productsActions';

const Admin = () => {
  const { productDispatch } = useContext(ProductsContext);
  const [getEditData, setGetEditData] = useState();

  useEffect(() => {
    getProducts(productDispatch);
    console.log('here');
  }, [getProducts]);
  return (
    <AdminContainer>
      <ProductList getEditData={(e) => setGetEditData(e)} />
      <ProductForm editData={getEditData} style={{ width: '500px' }} />
    </AdminContainer>
  );
};

export default Admin;
