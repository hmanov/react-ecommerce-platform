import React, { useState, useEffect } from 'react';
import { FormContainer, Form, FormInput, FormTitle, FormButton } from '../Styled/Form';

const ProductForm = ({ editData }) => {
  const initialFormData = {
    productName: '',
    price: 0,
    imageURL: '',
    categories: '',
    SKU: '',
    availability: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  useEffect(() => {
    setFormData(editData);
  });

  const { productName, price, imageURL, categories, SKU } = formData;

  const clearFormData = () => setFormData(initialFormData);

  const onchangehandler = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    clearFormData();
    console.log(formData);
  };
  return (
    <FormContainer getEditData={setFormData}>
      <Form style={{ maxWidth: '400px' }} onSubmit={submitHandler}>
        <FormTitle>Add new Product </FormTitle>
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
            value={true}
            onChange={onchangehandler}
          />
          <label htmlFor='notAvailable'>In stock</label>
          <FormInput
            type='radio'
            placeholder='availability'
            name='availability'
            value={false}
            onChange={onchangehandler}
          />
          <label htmlFor='Available'>Out of stock</label>
        </div>
        <FormButton>submit</FormButton>
      </Form>
    </FormContainer>
  );
};
export default ProductForm;
