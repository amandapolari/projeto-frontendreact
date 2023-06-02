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
    productsList,
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

    // console.log(amount, setAmount, cart, setCart);

    return (
        <CardContainer>
            <ContainerSuperior>
                <P>Quantidade de produtos: {productsList.length}</P>
                <Select value={ordination} onChange={handleChangeSelect}>
                    <option disabled value="">
                        Selecione
                    </option>
                    <option>Crescente</option>
                    <option>Decrescente</option>
                </Select>
            </ContainerSuperior>
            {productsList.map((product) => (
                <>
                    <Card>
                        <Img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Preço R$:{product.value}</p>
                        {/* <Button onClick={() => addToCart(product.name, product.value)}>Adicionar ao Carrinho</Button> */}
                        <Button>Adicionar ao Carrinho</Button>
                    </Card>
                </>
            ))}
        </CardContainer>
    );
}

export default ProductCard;
