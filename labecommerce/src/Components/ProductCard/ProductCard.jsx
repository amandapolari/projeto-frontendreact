import { useState } from 'react';
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
import Pagination from '../Pagination/Pagination';

function ProductCard({
    productsOrdered,
    ordination,
    setOrdination,
    amount,
    setAmount,
    cart,
    setCart,
    addToCart,
    showComponent,
}) {
    // => PAGINAÇÃO:
    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = showComponent ? 10 : 12;

    const indexOfLastItem = Math.min(
        currentPage * itemsPerPage,
        productsOrdered.length
    );
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productsOrdered.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    let quantity = 1;
    return (
        <>
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
                            Ordenar
                        </option>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </Select>
                </ContainerSuperior>

                {currentItems.map((product) => (
                    <Card key={product.id}>
                        <ContainerInfos>
                            <Img src={product.imageUrl} alt={product.name} />
                            <H3>{product.name}</H3>
                            <PriceText>Preço R$:{product.value}</PriceText>
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
            </CardContainer>

            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={productsOrdered.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </>
    );
}

export default ProductCard;
