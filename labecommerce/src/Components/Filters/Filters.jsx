import { ContainerFilter } from "./FiltersStyle";

function Filters() {
    return (
        <ContainerFilter>
                <form action="">
                    <label htmlFor="">Buscar por nome</label>
                    <input type="text" />
                    <label htmlFor="">Valor Mínimo</label>
                    <input type="text" />
                    <label htmlFor="">Valor Máximo</label>
                    <input type="text" />
                </form>
        </ContainerFilter>
    );
}

export default Filters;
