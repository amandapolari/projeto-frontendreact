import Items from '../Items/Items';

import { ContainerCart } from './CartStyle';

function Cart() {
    return (
        <ContainerCart>
            {/* <header> */}
            {/* <h2>Cart</h2> */}
            <Items />
            {/* </header> */}
        </ContainerCart>
    );
}

export default Cart;
