import Items from '../Items/Items';
import imgCart from '../../img/cart.png'
import { ContainerCart } from './CartStyle';

function Cart() {
    return (
        <ContainerCart>
            {/* <header> */}
                <img src={imgCart} alt="" />
                {/* <p>Cart</p> */}
                <Items />
            {/* </header> */}
        </ContainerCart>
    );
}

export default Cart;
