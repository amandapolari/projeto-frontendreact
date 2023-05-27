import React, { useState } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { ContainerApp, ContainerHomeCart } from './AppStyle';
import Cart from './Components/Cart/Cart';
import productsList from './assets/productsList.js';

function App() {
    const [minFilter, setMinFilter] = useState('');
    const [maxFilter, setMaxFilter] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [cart, setCart] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <ContainerApp>
            <Header />
            <ContainerHomeCart>
                <Home productsList={productsList} />
                <Cart />
            </ContainerHomeCart>
        </ContainerApp>
    );
}

export default App;
