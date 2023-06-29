import {
    Button,
    Card,
    CardContainer,
    PriceText,
    ContainerInfos,
    ContainerSuperior,
    H3,
    Img,
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
    let quantity = 1;
    return (
        <CardContainer>
            <ContainerSuperior>
                <p>Produtos encontrados: {productsOrdered.length}</p>
                <Select
                    value={ordination}
                    onChange={(event) => {
                        setOrdination(event.target.value);
                    }}
                >
                    <option disabled value="">
                        Selecione
                    </option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Select>
            </ContainerSuperior>

            {productsOrdered.map((product) => (
                <Card key={product.id}>
                    <ContainerInfos>
                        <Img src={product.imageUrl} alt={product.name} />
                        <H3>{product.name}</H3>
                        <PriceText>Preço R$:{product.value}</PriceText>
                        <Button
                            onClick={() =>
                                addToCart(product.name, product.value, quantity)
                            }
                        >
                            Adicionar ao Carrinho
                        </Button>
                    </ContainerInfos>
                </Card>
            ))}
        </CardContainer>
    );
}

export default ProductCard;
