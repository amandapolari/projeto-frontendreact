import React, { useState } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { ContainerApp, ContainerHomeCart } from './AppStyle';
import Cart from './Components/Cart/Cart';
import productsList from './assets/productsList.js';

function App() {
    // [x] ESTADOS PARA O COMPONENTE: HEADER > FILTERS
    const [minFilter, setMinFilter] = useState('');
    const [maxFilter, setMaxFilter] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    //  - - - - - - - - - - - - - - - - - - - - -

    // ESTADOS PARA O COMPONENTE:
    // [x] HOME > PRODUCTCARD
    // [x] CART > ITEMS
    const [amount, setAmount] = useState('');
    const [cart, setCart] = useState([]);
    //  - - - - - - - - - - - - - - - - - - - - -

    // TESTANDO CONTROLE DOS CLICKS DOS BOTÕES DA HOME E DO CART:
    // let counter = 0;
    // const addToCart = (productName, productValue) => {
    // Verificando o que foi recebido no console:
    // console.log('Nome do produto:', productName);
    // console.log('Valor do produto:', productValue);
    // Setando novos valores no array cart:
    //     setCart([...cart, productName, productValue]);
    // };
    // console.log(cart);
    // Função que adicionar linha no carrinho:
    // const addLineProductCart = () => {}
    //  - - - - - - - - - - - - - - - - - - - - -

    return (
        <ContainerApp>
            <Header
                minFilter={minFilter}
                setMinFilter={setMinFilter}
                maxFilter={maxFilter}
                setMaxFilter={setMaxFilter}
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
            />
            <ContainerHomeCart>
                <Home
                    productsList={productsList}
                    amount={amount}
                    setAmount={setAmount}
                    cart={cart}
                    setCart={setCart}
                    // addToCart={addToCart}
                />
                <Cart
                    amount={amount}
                    setAmount={setAmount}
                    cart={cart}
                    setCart={setCart}
                />
            </ContainerHomeCart>
        </ContainerApp>
    );
}

export default App;
