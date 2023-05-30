import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ContainerHome, ContainerProduct } from './HomeStyle';

function Home({ productsList, amount, setAmount, cart, setCart }) {
    const [ordination, setOrdination] = useState('');
    // console.log(amount, setAmount, cart, setCart);
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
                />
            </ContainerProduct>
        </ContainerHome>
    );
}

export default Home;
