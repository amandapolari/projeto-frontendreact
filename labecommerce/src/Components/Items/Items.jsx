/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {
    ContainerItems,
    ContainerValueAndButton,
    InfoItems,
    ImgButton,
    ButtonClearAll,
} from './ItemsSyle';
import lixeira from '../../assets/img/lixeira.png';

function Items({ amount, setAmount, cart, setCart, removeCart, ClearCart, quantityItems, setQuantityItems }) {
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
        setQuantityItems(calculateTotalItems())
    }, [amount, cart]);

    const listCart = cart.map((item, index) => (
        <InfoItems key={index}>
            <h3>Nome: {item[0]}</h3>
            <p>Quant: {item[2]}</p>
            <p>Preço: R${item[1].toFixed(2)}</p>
            <button
                onClick={() => {
                    removeCart(item, index);
                }}
            >
                Remover
            </button>
        </InfoItems>
    ));

    return (
        <ContainerItems>
            <h2>Carrinho</h2>
            <ContainerValueAndButton>
                <p>Total a pagar: R$ {amount}</p>
                <ButtonClearAll
                    onClick={(event) => {
                        ClearCart(event);
                    }}
                    >
                    <ImgButton src={lixeira} alt="" />
                </ButtonClearAll>
            </ContainerValueAndButton>
                    <p>Item: R$ {quantityItems}</p>
            {listCart}
        </ContainerItems>
    );
}

export default Items;
