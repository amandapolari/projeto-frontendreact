import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { ContainerApp, ContainerHomeCart } from './AppStyle';
import Cart from './Components/Cart/Cart';
import productsList from './assets/productsList.js';

function App() {
    // console.log(productsList[0].id)
    // const productListItems = productsList.map((product) => product.name);
    // console.log(productListItems);
    return (
        <ContainerApp>
            {/* {productListItems} */}
            <Header />
            <ContainerHomeCart>
                <Home productsList={productsList} />
                <Cart />
            </ContainerHomeCart>
        </ContainerApp>
    );
}

export default App;
