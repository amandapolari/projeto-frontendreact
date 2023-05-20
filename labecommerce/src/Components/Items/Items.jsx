import { ContainerItems, InfoItems } from './ItemsSyle';

function Items() {
    return (
        <ContainerItems>
            <h2>Cart</h2>
            {/* <header> */}
            <InfoItems>
                <h4>Nome</h4>
                <p>V. Unidade</p>
                <p>Quant</p>
                <p>Subtotal</p>
                <button>Remover</button>
            </InfoItems>
        </ContainerItems>
    );
}

export default Items;
