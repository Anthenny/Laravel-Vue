import React, { useEffect } from 'react';
import axiosClient from '../axios-client';

function ProductSearch() {
  const searchProduct = () => {
    axiosClient.get('/products/search/iph');
  };

  useEffect(() => {
    searchProduct();
  }, []);

  return (
    <div>ProductSearch</div>
  );
}

export default ProductSearch;
