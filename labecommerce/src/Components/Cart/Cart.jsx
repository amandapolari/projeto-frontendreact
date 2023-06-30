import Items from '../Items/Items';

import { ContainerCart } from './CartStyle';

function Cart({
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
    return (
        <ContainerCart>
            <h2>Carrinho</h2>
            <Items
                amount={amount}
                setAmount={setAmount}
                cart={cart}
                setCart={setCart}
                removeCart={removeCart}
                sumCart={sumCart}
                removeItemCart={removeItemCart}
                clearCart={clearCart}
                quantityItems={quantityItems}
                setQuantityItems={setQuantityItems}
                isPurchaseCompleted={isPurchaseCompleted}
                showSentence={showSentence}
            />
        </ContainerCart>
    );
}

export default Cart;
