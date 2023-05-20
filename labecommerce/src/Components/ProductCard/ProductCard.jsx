import { Card, ContainerCard, ContainerImagem } from './ProductCardStyle';
// import product from '../../img/product.png'

function ProductCard() {
    return (
        <ContainerCard>
            <Card>
                <ContainerImagem>IMAGEM DO PRODUTO</ContainerImagem>
                <h3>Nome Do Produto</h3>
                <p>Preço R$:</p>
                <button>Adicionar ao Carrinho</button>
            </Card>
        </ContainerCard>
    );
}

export default ProductCard;
