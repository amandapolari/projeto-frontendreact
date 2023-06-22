/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { ContainerApp, ContainerHomeCart } from './AppStyle';
import Cart from './Components/Cart/Cart';
import productsList from './assets/productsList.js';
import Footer from './Components/Footer/Footer';

function App() {
    const [minFilter, setMinFilter] = useState('');
    const [maxFilter, setMaxFilter] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    const [amount, setAmount] = useState('');
    const [cart, setCart] = useState([]);
    const [quantityItems, setQuantityItems] = useState('');
    const [productsFiltered, setProductsFiltered] = useState(productsList);

    useEffect(() => {
        const listaDoCarrinhoArmazenada = JSON.parse(
            localStorage.getItem('listaDoCarrinho')
        );

        listaDoCarrinhoArmazenada && setCart(listaDoCarrinhoArmazenada);
    }, []);

    useEffect(() => {
        cart.length &&
            localStorage.setItem('listaDoCarrinho', JSON.stringify(cart));

        !cart.length && localStorage.removeItem('listaDoCarrinho');
    }, [cart]);

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

    const removeCart = (itemRemove, indexRemove) => {
        if (itemRemove[2] === 1) {
            const newList = cart.filter((item) => item !== itemRemove);
            setCart(newList);
        } else if (itemRemove[2] > 1) {
            const unitaryValue = itemRemove[1] / itemRemove[2];
            const updatedCart = cart.map((item, index) => {
                if (index === indexRemove) {
                    return [item[0], item[1] - unitaryValue, item[2] - 1];
                }
                return item;
            });
            setCart(updatedCart);
        }
    };

    const treatmentNegativeNumber = (event, functionSetFilter) => {
        let enteredValue = Number(event.target.value);
        enteredValue < 0
            ? functionSetFilter('')
            : functionSetFilter(enteredValue);
    };

    const handleSearchFilterChanges = (event) => {
        setSearchFilter(event.target.value);
    };

    const handleMaxFilterChanges = (event) => {
        treatmentNegativeNumber(event, setMaxFilter);
    };

    const handleMinFilterChanges = (event) => {
        treatmentNegativeNumber(event, setMinFilter);
    };

    useEffect(() => {
        const filteredProducts = productsList.filter((item) => {
            if (
                searchFilter &&
                !item.name.toLowerCase().includes(searchFilter.toLowerCase())
            ) {
                return false;
            }
            if (minFilter && item.value < minFilter) {
                return false;
            }
            if (maxFilter && item.value > maxFilter) {
                return false;
            }
            return true;
        });

        setProductsFiltered(filteredProducts);
    }, [searchFilter, minFilter, maxFilter, productsList]);

    const ClearFilters = (event) => {
        event.preventDefault();
        setSearchFilter('');
        setMinFilter('');
        setMaxFilter('');
    };

    const ClearCart = (event) => {
        event.preventDefault();
        setCart([]);
    };

    return (
        <ContainerApp>
            <Header
                productsFiltered={productsFiltered}
                setProductsFiltered={setProductsFiltered}
                handleSearchFilterChanges={handleSearchFilterChanges}
                handleMinFilterChanges={handleMinFilterChanges}
                handleMaxFilterChanges={handleMaxFilterChanges}
                minFilter={minFilter}
                setMinFilter={setMinFilter}
                maxFilter={maxFilter}
                setMaxFilter={setMaxFilter}
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                ClearFilters={ClearFilters}
                quantityItems={quantityItems}
            />
            <ContainerHomeCart>
                <Home
                    productsList={productsList}
                    productsFiltered={productsFiltered}
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
                    ClearCart={ClearCart}
                    quantityItems={quantityItems}
                    setQuantityItems={setQuantityItems}
                />
            </ContainerHomeCart>
            <Footer />
        </ContainerApp>
    );
}

export default App;
