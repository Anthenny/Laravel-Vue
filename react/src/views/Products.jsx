import React, { useEffect } from 'react';
import axiosClient from '../axios-client';

function Products() {
  const fetchProducts = async () => {
    const response = await axiosClient.get('/products');

    console.log(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>Products</div>
  );
}

export default Products;
