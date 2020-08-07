import React, { useState, useEffect, useContext } from 'react';
import { FormContainer, Form, FormInput, FormTitle, FormButton } from '../Styled/Form';
import productService from '../context/actions/productsActions';
import { ProductContext } from '../context/ProductProvider';
import { AuthContext } from '../context/AuthProvider';

const ProductForm = ({ editData }) => {
  const { productDispatch } = useContext(ProductContext);
  const { authState } = useContext(AuthContext);
  const initialFormData = {
    productName: '',
    price: 0,
    imageURL: '',
    categories: '',
    SKU: '',
    availability: 1,
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (editData) {
      const { productName, price, imageURL, categories, SKU, availability } = editData;
      setFormData({ productName, price, imageURL, categories, SKU, availability });
    }
  }, [editData]);

  const { productName, price, imageURL, categories, SKU, availability } = formData;
  const clearFormData = () => setFormData(initialFormData);
  const onchangehandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createProduct(formData, authState, productDispatch);
    clearFormData();
  };
  const editHandler = ({ _id }, data, e) => {
    e.preventDefault();
    console.log(formData);
    deleteProduct(productDispatch, _id, authState);
  };
  return (
    <FormContainer getEditData={setFormData}>
      <Form
        style={{ maxWidth: '400px' }}
        onSubmit={editData ? editHandler.bind(undefined, editData, formData) : submitHandler}
      >
        <FormTitle>{!editData ? 'Add new Product' : 'Edit Product'} </FormTitle>
        <FormInput
          type='text'
          placeholder='Product Name'
          name='productName'
          onChange={onchangehandler}
          value={productName}
        />
        <FormInput type='text' placeholder='price' name='price' onChange={onchangehandler} value={price} />
        <FormInput type='text' placeholder='imageURL' name='imageURL' onChange={onchangehandler} value={imageURL} />
        <FormInput
          type='text'
          placeholder='categories separated by comma and space'
          name='categories'
          onChange={onchangehandler}
          value={categories}
        />
        <FormInput type='text' placeholder='SKU' name='SKU' onChange={onchangehandler} value={SKU} />
        <div>
          <FormInput
            type='radio'
            placeholder='availability'
            name='availability'
            value={1}
            checked
            onChange={onchangehandler}
          />
          <label htmlFor='notAvailable'>In stock</label>
          <FormInput type='radio' placeholder='availability' name='availability' value={0} onChange={onchangehandler} />
          <label htmlFor='Available'>Out of stock</label>
        </div>

        <FormButton>submit</FormButton>
      </Form>
    </FormContainer>
  );
};
export default ProductForm;
