import React, { useEffect } from 'react';
import axiosClient from '../axios-client';

function AddProduct() {
  const createOneProduct = async () => {
    const payload = {
      name: 'iPhone 12',
      slug: 'iphone-12',
      description: 'new phone',
      price: '999',
    };

    const createdProduct = await axiosClient.post('/products', payload);

    console.log(createdProduct);
  };

  useEffect(() => {
    createOneProduct();
  }, []);
  return (
    <div>AddProduct</div>
  );
}

export default AddProduct;
