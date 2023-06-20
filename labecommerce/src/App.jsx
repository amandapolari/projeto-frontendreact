import React, { useEffect, useState } from 'react';
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
    //  - - - - - - - - - - - - - - - - - - - - -

    // ESTADOS PARA O COMPONENTE FILTRO:
    const [productsFiltered, setProductsFiltered] = useState(productsList);
    // console.log(productsFiltered);
    //  - - - - - - - - - - - - - - - - - - - - -

    // PARA O COMPONENTE FILTER ACESSAR:
    // TRATATIVAS PARA NÚMEROS NEGATIVOS
    const treatmentNegativeNumber = (event, functionSetFilter) => {
        let enteredValue = Number(event.target.value);
        enteredValue < 0
            ? functionSetFilter('')
            : functionSetFilter(enteredValue);
    };

    // FUNÇÕES QUE MUDAM OS ESTADOS
    // filtro de pesquisa por NOME
    const handleSearchFilterChanges = (event) => {
        setSearchFilter(event.target.value);
    };

    // filtro de pesquisa por MAX
    const handleMaxFilterChanges = (event) => {
        treatmentNegativeNumber(event, setMaxFilter);
    };

    // filtro de pesquisa por MIN
    const handleMinFilterChanges = (event) => {
        treatmentNegativeNumber(event, setMinFilter);

        //
        //const newValues = productsList.filter((item) => {
        //     if (minFilter > 0) {
        //         console.log('DENTRO da função', minFilter); // valor desatualizado
        //         return item.value <= minFilter;
        //     }
        // });
        // setProductsFiltered(newValues);
    };
    // console.log('FORA da função', minFilter); // valor atualizado

    useEffect(() => {
        const filteredProducts = productsList.filter((item) => {
            // Aplicar filtro de pesquisa
            if (
                searchFilter &&
                !item.name.toLowerCase().includes(searchFilter.toLowerCase())
            ) {
                return false;
            }
            // Aplicar filtro mínimo
            if (minFilter && item.value < minFilter) {
                return false;
            }
            // Aplicar filtro máximo
            if (maxFilter && item.value > maxFilter) {
                return false;
            }
            console.log('entrou no useEffect');
            return true;
        });

        setProductsFiltered(filteredProducts);
    }, [searchFilter, minFilter, maxFilter, productsList]);

    console.log(productsFiltered);
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
                />
            </ContainerHomeCart>
        </ContainerApp>
    );
}

export default App;
