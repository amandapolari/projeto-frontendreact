import Items from '../Items/Items';

import { ContainerCart } from './CartStyle';

function Cart({
    amount,
    setAmount,
    cart,
    setCart,
    removeCart,
    ClearCart,
    quantityItems,
    setQuantityItems,
}) {
    return (
        <ContainerCart>
            <Items
                amount={amount}
                setAmount={setAmount}
                cart={cart}
                setCart={setCart}
                removeCart={removeCart}
                ClearCart={ClearCart}
                quantityItems={quantityItems}
                setQuantityItems={setQuantityItems}
            />
        </ContainerCart>
    );
}

export default Cart;
