import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ContainerHome, ContainerProduct } from './HomeStyle';

function Home(props) {
    const { productsList } = props;
    const [ordination, setOrdination] = useState('');
    return (
        <ContainerHome>
            <ContainerProduct>
                <ProductCard
                    productsList={productsList}
                    ordination={ordination}
                    setOrdination={setOrdination}
                />
            </ContainerProduct>
        </ContainerHome>
    );
}

export default Home;
