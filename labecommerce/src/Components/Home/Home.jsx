import ProductCard from '../ProductCard/ProductCard';
import { ContainerHome } from './HomeStyle';

function Home() {
    return (
        <ContainerHome>
            <header>
                <p>Home</p>
                <ProductCard />
            </header>
        </ContainerHome>
    );
}

export default Home;
