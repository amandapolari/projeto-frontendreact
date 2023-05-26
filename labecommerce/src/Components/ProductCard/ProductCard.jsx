import { Button, Card, CardContainer, Img, P } from './ProductCardStyle';
// import product from '../../img/product.png'

function ProductCard(props) {
    const { productsList } = props;

    console.log(productsList.length);

    return (
        <CardContainer>
            <P>Quantidade de produtos: {productsList.length}</P>
            {productsList.map((product) => (
                <>
                    <Card>
                        <Img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Preço R$:{product.value}</p>
                        <Button>Adicionar ao Carrinho</Button>
                    </Card>
                </>
            ))}
        </CardContainer>
    );
}

export default ProductCard;
