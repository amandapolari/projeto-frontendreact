import Items from '../Items/Items';

import { ContainerCart } from './CartStyle';

function Cart({ amount, setAmount, cart, setCart }) {
    // console.log(amount, setAmount, cart, setCart);
    return (
        <ContainerCart>
            <Items
                amount={amount}
                setAmount={setAmount}
                cart={cart}
                setCart={setCart}
            />
        </ContainerCart>
    );
}

export default Cart;
