import { ContainerItems, InfoItems } from './ItemsSyle';

function Items({ amount, setAmount, cart, setCart }) {
    // console.log(amount, setAmount, cart, setCart);
    return (
        <ContainerItems>
            <h2>Cart</h2>
            <InfoItems>
                <h4>Nome</h4>
                <p>Un</p>
                <p>Quant</p>
                <p>Subtotal</p>
                <button>Remover</button>
                <>
                {/* PAREI DE TESTAR AQUI */}
                {/* {console.log(cart)} */}
                    {cart.map((item) => (
                        <div key={item.produtName}>
                            <h3>{item.produtName}</h3>
                            <p>Preço: R${item.produtValue}</p>
                        </div>
                    ))}
                </>
            </InfoItems>
        </ContainerItems>
    );
}

export default Items;
