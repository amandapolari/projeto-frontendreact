import ProductCard from '../ProductCard/ProductCard';
import { ContainerHome, ContainerProduct } from './HomeStyle';

function Home() {
    return (
        <ContainerHome>
            <ContainerProduct>
                {/* <p>Home</p> */}
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ContainerProduct>
        </ContainerHome>
    );
}

export default Home;
