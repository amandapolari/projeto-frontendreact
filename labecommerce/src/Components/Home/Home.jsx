import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ContainerHome, ContainerProduct } from './HomeStyle';

function Home({ productsList, amount, setAmount, cart, setCart, addToCart }) {
    const [ordination, setOrdination] = useState('');
    const productsOrdered = productsList.sort((a, b) => {
        if (ordination === 'Crescente') {
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value) {
                return -1;
            }
            return 0;
        } else if (ordination === 'Decrescente') {
            if (a.value > b.value) {
                return -1;
            }
            if (a.value < b.value) {
                return 1;
            }
            return 0;
        }
    });
    return (
        <ContainerHome>
            <ContainerProduct>
                <ProductCard
                    productsList={productsList}
                    productsOrdered={productsOrdered}
                    ordination={ordination}
                    setOrdination={setOrdination}
                    amount={amount}
                    setAmount={setAmount}
                    cart={cart}
                    setCart={setCart}
                    addToCart={addToCart}
                />
            </ContainerProduct>
        </ContainerHome>
    );
}

export default Home;
