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
            const updatedCart = cart.map((item) => {
                if (item[0] === productName) {
                    return [
                        item[0],
                        item[1] + productValue,
                        item[2] + quantity,
                    ];
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            const newProductList = [
                ...cart,
                [productName, productValue, quantity],
            ];
            setCart(newProductList);
        }
    };
    //  - - - - - - - - - - - - - - - - - - - - -

    // Implemente a remoção de itens do carrinho
    const removeCart = (itemRemove, indexRemove) => {
        if (itemRemove[2] === 1) {
            const newList = cart.filter((item) => item !== itemRemove);
            // console.log(newList);
            setCart(newList);
        } else if (itemRemove[2] > 1) {
            const unitaryValue = itemRemove[1] / itemRemove[2];
            // console.log(unitaryValue);
            const updatedCart = cart.map((item, index) => {
                if (index === indexRemove) {
                    return [item[0], item[1] - unitaryValue, item[2] - 1];
                }
                return item;
            });
            setCart(updatedCart);
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
                    removeCart={removeCart}
                />
            </ContainerHomeCart>
        </ContainerApp>
    );
}

export default App;
