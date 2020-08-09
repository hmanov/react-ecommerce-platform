import React, { useContext, useState, useEffect } from 'react';
import ProductForm from '../ProductForm';
import { ProductContext } from '../../context/ProductProvider';

import { AdminContainer } from '../../Styled/AdminStyled';
import ProductList from '../ProductList';
import productService from '../../context/actions/productsActions';
import { getProducts } from '../../context/actions/productTypes';
import Filter from '../Filter';
const Admin = () => {
  const { productDispatch } = useContext(ProductContext);

  useEffect(() => {
    const populate = async () => {
      const res = await productService.getProducts();
      productDispatch(getProducts(res));
    };
    populate();
  }, [productDispatch]);
  return (
    <AdminContainer>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <Filter />
        <ProductList />
      </div>
      <ProductForm style={{ width: '500px' }} />
    </AdminContainer>
  );
};

export default Admin;
