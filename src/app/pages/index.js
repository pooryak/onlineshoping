// import {
//     BrowserRouter,
//     matchPath,
//     Route,
//     StaticRouter,
// } from 'react-router-dom';
import Cart from './cart';
import Home from './home';
import SingleProduct from './single-product';

export default [
    {
        path: '/',
        key: 'APP',
        exact: true,
        component: Home,
    },
    {
        path: '/cart',
        key: 'APP_CART',
        exact: true,
        component: Cart,
    },
    {
        path: '/product/:id',
        key: 'APP_PRODUCT_SINGLE',
        exact: true,
        component: SingleProduct,
    },
];
