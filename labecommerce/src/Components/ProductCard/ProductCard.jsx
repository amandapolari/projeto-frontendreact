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
    console.log(ordination);
    const handleChangeSelect = (event) => {
        setOrdination(event.target.value);
    };

    let quantity = 1;

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
            {productsList
                .sort((a, b) => {
                    if (ordination === 'Crescente') {
                        if (a.value > b.value) {
                            return 1;
                        }
                        if (a.value < b.value) {
                            return -1;
                        }
                        return 0;
                    } else if (ordination === 'Decrescente') {
                        if (a.value > b.value) {
                            return -1;
                        }
                        if (a.value < b.value) {
                            return 1;
                        }
                        return 0;
                    }
                })
                .map((product) => (
                    <Card>
                        <Img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Preço R$:{product.value.toFixed(2)}</p>
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
