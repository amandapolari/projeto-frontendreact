import { ContainerFilter, HeaderFilter } from "./FiltersStyle";

function Filters() {
    return (
        <ContainerFilter>
            <HeaderFilter>
                <h2>Filters</h2>
            </HeaderFilter>
                <form action="">
                    <label htmlFor="">Valor Mínimo</label>
                    <input type="text" />
                    <label htmlFor="">Valor Máximo</label>
                    <input type="text" />
                    <label htmlFor="">Buscar por nome</label>
                    <input type="text" />
                </form>
        </ContainerFilter>
    );
}

export default Filters;
