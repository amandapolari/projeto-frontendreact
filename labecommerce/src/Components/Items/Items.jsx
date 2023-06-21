import { useEffect } from 'react';
import { ContainerItems, InfoItems } from './ItemsSyle';

function Items({ amount, setAmount, cart, setCart, removeCart }) {
    // Função para calcular o preço total
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for (const item of cart) {
            const itemPrice = parseFloat(item[1]);
            totalPrice += itemPrice;
        }
        return totalPrice.toFixed(2);
    };

    useEffect(() => {
        setAmount(calculateTotalPrice());
    }, [amount, cart]);

    const listCart = cart.map((item, index) => (
        <InfoItems key={index}>
            {console.log(item)}
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
            <h2>Cart</h2>
            {listCart}
            <p>Total: R${amount}</p>
        </ContainerItems>
    );
}

export default Items;
