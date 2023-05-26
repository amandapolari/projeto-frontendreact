import ProductCard from '../ProductCard/ProductCard';
import { ContainerHome, ContainerProduct } from './HomeStyle';

function Home(props) {
    const { productsList } = props;
    return (
        <ContainerHome>
            <ContainerProduct>
                <ProductCard productsList={productsList} />
            </ContainerProduct>
        </ContainerHome>
    );
}

export default Home;
