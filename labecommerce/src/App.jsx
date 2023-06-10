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

    // Implemente a funcionalidade de adicionar itens no carrinho:
    const addToCart = (productName, productValue, quantity) => {
        const existsInCart =
            cart.filter((item) => item[0] === productName).length > 0;

        if (existsInCart) {
            console.log(existsInCart);
            const modificar = cart.filter((item) => item[0] === productName);
            console.log(modificar);
            // const newProductList = [
            //     ...cart,
            //     [...productName, productValue * quantity, quantity+1],
            // ];
            // setCart(newProductList);
        } else {
            const newProductList = [
                ...cart,
                [productName, productValue, quantity],
            ];
            setCart(newProductList);
        }
    };
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
                    addToCart={addToCart}
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
