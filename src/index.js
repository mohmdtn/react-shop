import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-v7xaokjdtwxxffdh.us.auth0.com
// kIQpcgl6qLVz3Gd4G9fKHQsCOLOprEB6

ReactDOM.render(
    <Auth0Provider domain='dev-v7xaokjdtwxxffdh.us.auth0.com' clientId='kIQpcgl6qLVz3Gd4G9fKHQsCOLOprEB6' redirectUri={window.location.origin} cacheLocation='localstorage'>
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>,
    document.getElementById('root')
)


serviceWorker.register();