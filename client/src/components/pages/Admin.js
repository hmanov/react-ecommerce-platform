import React, { useContext, useState } from 'react';
import ProductForm from '../ProductForm';
import { ProductsContext } from '../../context/ProductProvider';

import { AdminContainer } from '../../Styled/AdminStyled';

const Admin = () => {
  const { productState } = useContext(ProductsContext);
  const data = {
    productName: '',
    price: 100,
    imageURL: '',
    categories: '',
    SKU: '',
    availability: '',
  };
  const [updateFormData, setUpdateFormData] = useState(data);
  const testData = () => {
    setUpdateFormData({ ...updateFormData, price: 300 });
  };
  return (
    <AdminContainer>
      <ProductForm editData={updateFormData} />
    </AdminContainer>
  );
};

export default Admin;
