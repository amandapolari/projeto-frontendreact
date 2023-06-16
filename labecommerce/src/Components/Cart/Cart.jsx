import Items from '../Items/Items';

import { ContainerCart } from './CartStyle';

function Cart({ amount, setAmount, cart, setCart, removeCart }) {
    // console.log(amount, setAmount, cart, setCart);
    return (
        <ContainerCart>
            <Items
                amount={amount}
                setAmount={setAmount}
                cart={cart}
                setCart={setCart}
                removeCart={removeCart}
            />
        </ContainerCart>
    );
}

export default Cart;
