import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { ContainerApp, ContainerHomeCart } from './AppStyle';
import Cart from './Components/Cart/Cart';

function App() {
    return (
        <ContainerApp>
            <Header />
            <ContainerHomeCart>
                <Home />
                <Cart />
            </ContainerHomeCart>
        </ContainerApp>
    );
}

export default App;
