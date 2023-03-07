import React, { useEffect } from 'react';
import axiosClient from '../axios-client';

function Product() {
  const fetchProduct = async () => {
    const response = await axiosClient.get('/products/1');

    console.log(response);
  };

  const updateProduct = async () => {
    const payload = {
      // name: 'Product 3',
      // slug: 'product-3',
      description: 'This is product 2',
      price: '422.99',
    };

    const response = await axiosClient.put(
      '/products/2',
      payload,
    );

    console.log(response);
  };

  const deleteProduct = async () => {
    const response = await axiosClient.delete('/products/2');

    console.log(response);
  };

  useEffect(() => {
    fetchProduct();
    // updateProduct();
    // deleteProduct();
  }, []);

  return (
    <div>Product</div>
  );
}

export default Product;
