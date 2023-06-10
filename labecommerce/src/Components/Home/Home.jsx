import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ContainerHome, ContainerProduct } from './HomeStyle';

function Home({ productsList, amount, setAmount, cart, setCart, addToCart }) {
    const [ordination, setOrdination] = useState('');
    return (
        <ContainerHome>
            <ContainerProduct>
                <ProductCard
                    productsList={productsList}
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
