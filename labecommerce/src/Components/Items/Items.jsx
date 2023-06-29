/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {
    ContainerItems,
    InfoItems,
    ImgButton,
    ButtonClearAll,
    InputQuantity,
    DecreaseAndIncreaseButton,
    TweaksContainer,
    ButtonDeleteItem,
    SummaryContainer,
    CheckoutButton,
    TotalPriceP,
    Container,
    ProductsP,
    ContainerButton,
    WarningDiv,
    Divisoria,
    PurchaseCompleted,
} from './ItemsSyle';

import lixeira from '../../assets/img/lixeira.png';

function Items({
    amount,
    setAmount,
    cart,
    setCart,
    removeCart,
    sumCart,
    removeItemCart,
    clearCart,
    quantityItems,
    setQuantityItems,
    isPurchaseCompleted,
    showSentence,
}) {
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (const item of cart) {
            const itemPrice = parseFloat(item[1]);
            totalPrice += itemPrice;
        }
        return totalPrice.toFixed(2);
    };

    const calculateTotalItems = () => {
        let totalElement = 0;
        for (const item of cart) {
            const itemElement = parseFloat(item[2]);
            totalElement += itemElement;
        }
        return totalElement;
    };

    useEffect(() => {
        setAmount(calculateTotalPrice());
        setQuantityItems(calculateTotalItems());
    }, [amount, cart]);

    const listCart = cart.map((item, index) => (
        <InfoItems key={index}>
            <h3>{item[0]}</h3>
            <TweaksContainer>
                <DecreaseAndIncreaseButton
                    onClick={() => {
                        removeCart(item, index);
                    }}
                >
                    -
                </DecreaseAndIncreaseButton>
                <InputQuantity value={item[2]} />
                <DecreaseAndIncreaseButton
                    onClick={() => {
                        sumCart(item, index);
                    }}
                >
                    +
                </DecreaseAndIncreaseButton>
            </TweaksContainer>
            <p>R$ {item[1].toFixed(2)}</p>
            <ButtonDeleteItem
                onClick={() => {
                    removeItemCart(item, index);
                }}
            >
                <ImgButton src={lixeira} alt="" />
            </ButtonDeleteItem>
            <Divisoria />
        </InfoItems>
    ));

    return (
        <ContainerItems>
            <SummaryContainer>
                {quantityItems === 0 ? '' : <h3>Resumo da Compra:</h3>}
                {quantityItems === 0 ? (
                    ''
                ) : (
                    <ProductsP>Produtos: {quantityItems}</ProductsP>
                )}
                {amount == 0 ? (
                    <WarningDiv>
                        {isPurchaseCompleted && (
                            <PurchaseCompleted>
                                Compra concluída!
                            </PurchaseCompleted>
                        )}
                        <p>Seu carrinho está vazio!</p>
                    </WarningDiv>
                ) : (
                    <Container>
                        <TotalPriceP> Total: R$ {amount}</TotalPriceP>
                        <ButtonClearAll
                            onClick={(event) => {
                                clearCart(event);
                            }}
                        >
                            <ImgButton src={lixeira} alt="" />
                        </ButtonClearAll>
                    </Container>
                )}
                {quantityItems === 0 ? (
                    ''
                ) : (
                    <ContainerButton>
                        <CheckoutButton
                            onClick={(event) => {
                                showSentence(event);
                            }}
                        >
                            Finalizar Pedido
                        </CheckoutButton>
                    </ContainerButton>
                )}
            </SummaryContainer>
            {listCart}
        </ContainerItems>
    );
}

export default Items;
