import { Card, ContainerCard, ContainerImagem, Img } from './ProductCardStyle';
// import product from '../../img/product.png'

function ProductCard(props) {
    const { productsList } = props;
    console.log(productsList);

    return (
        <ContainerCard>
            <Card>
                {/* <ContainerImagem>IMAGEM DO PRODUTO</ContainerImagem>
                <h3>Nome Do Produto</h3>
                <p>Preço R$:</p>
                <button>Adicionar ao Carrinho</button> */}
                {productsList.map((product) => (
                    // <>
                    <ContainerImagem>
                        <Img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Preço R$:{product.value}</p>
                        <button>Adicionar ao Carrinho</button>
                    </ContainerImagem>
                    // </>
                ))}
            </Card>
        </ContainerCard>
    );
}

export default ProductCard;
