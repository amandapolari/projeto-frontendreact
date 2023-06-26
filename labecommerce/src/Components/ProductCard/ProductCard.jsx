import {
    Button,
    Card,
    CardContainer,
    ContainerInferior,
    ContainerInfos,
    ContainerSuperior,
    H3,
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
                <P>Produtos encontrados: {productsOrdered.length}</P>
                <Select value={ordination} onChange={handleChangeSelect}>
                    <option disabled value="">
                        Selecione
                    </option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Select>
            </ContainerSuperior>

            {/* <ContainerInferior> */}
                {productsOrdered.map((product) => (
                    <Card key={product.id}>
                        <ContainerInfos>
                            <Img src={product.imageUrl} alt={product.name} />
                            <H3>{product.name}</H3>
                            <p>Preço R$:{product.value}</p>
                            <Button
                                onClick={() =>
                                    addToCart(
                                        product.name,
                                        product.value,
                                        quantity
                                    )
                                }
                            >
                                Adicionar ao Carrinho
                            </Button>
                        </ContainerInfos>
                    </Card>
                ))}
            {/* </ContainerInferior> */}
        </CardContainer>
    );
}

export default ProductCard;
