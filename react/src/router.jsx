import { createBrowserRouter } from 'react-router-dom';
import Product from './views/Product';
import Listings from './views/Listings';
import NotFound from './views/NotFound';
import CreateListing from './views/CreateListing';
import AddProduct from './views/AddProduct';
import Products from './views/Products';
import ProductSearch from './views/ProductSearch';

const router = createBrowserRouter([
  {
    path: '/listings',
    element: <Listings />,
  },
  {
    path: '/listing',
    element: <Listings />,
  },
  {
    path: '/createListing',
    element: <CreateListing />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/products/:id',
    element: <Product />,
  },
  {
    path: '/add-product',
    element: <AddProduct />,
  },
  {
    path: '/search-product',
    element: <ProductSearch />,
  },
  {
    path: '*',
    element: <NotFound />,
  },

]);

export default router;
