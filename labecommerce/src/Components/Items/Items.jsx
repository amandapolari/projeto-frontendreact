import { ContainerItems, InfoItems } from './ItemsSyle';

function Items({ amount, setAmount, cart, setCart }) {
    // console.log(amount, setAmount, cart, setCart);
    const listCart = cart.map((item, index) => (
        <InfoItems key={index}>
            {/* {console.log(item)} */}
            <h3>Nome: {item[0]}</h3>
            <p>Quant: {item[2]}</p>
            <p>Preço: R${item[1]}</p>
            <button>Remover</button>
        </InfoItems>
    ));
    console.log(cart);

    return (
        <ContainerItems>
            <h2>Cart</h2>
            {/* <InfoItems> */}
                {/* <h4>Nome</h4> */}
                {/* <p>Un</p> */}
                {/* <p>Quant</p> */}
                {/* <p>Subtotal</p> */}
                {listCart}
            {/* </InfoItems> */}
        </ContainerItems>
    );
}

export default Items;
