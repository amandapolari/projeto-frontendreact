import {
    Button,
    Card,
    CardContainer,
    ContainerSuperior,
    Img,
    P,
    Select,
} from './ProductCardStyle';

function ProductCard({
    productsOrdered,
    ordination,
    setOrdination,
    amount,
    setAmount,
    cart,
    setCart,
    addToCart,
}) {
    const handleChangeSelect = (event) => {
        setOrdination(event.target.value);
    };

    let quantity = 1;

    return (
        <CardContainer>
            <ContainerSuperior>
                <P>Quantidade de produtos: {productsOrdered.length}</P>
                <Select value={ordination} onChange={handleChangeSelect}>
                    <option disabled value="">
                        Selecione
                    </option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Select>
            </ContainerSuperior>
            {productsOrdered.map((product) => (
                <Card>
                    <Img src={product.imageUrl} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Preço R$:{product.value}</p>
                    <Button
                        onClick={() =>
                            addToCart(product.name, product.value, quantity)
                        }
                    >
                        Adicionar ao Carrinho
                    </Button>
                </Card>
            ))}
        </CardContainer>
    );
}

export default ProductCard;
