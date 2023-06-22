/* eslint-disable array-callback-return */
import { ContainerFilter } from './FiltersStyle';

function Filters({
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
    productsList,
    productsFiltered,
    setProductsFiltered,
    treatmentNegativeNumber,
    handleSearchFilterChanges,
    handleMinFilterChanges,
    handleMaxFilterChanges,
    ClearFilters,
}) {
    return (
        <ContainerFilter>
            <form action="">
                <input
                    type="text"
                    id="inputSearchFilter"
                    placeholder="Buscar por nome"
                    onChange={(event) => {
                        handleSearchFilterChanges(event);
                    }}
                    value={searchFilter}
                />
                <input
                    type="number"
                    id="inputMinFilter"
                    placeholder="Valor Mínimo"
                    onChange={(event) => {
                        handleMinFilterChanges(event);
                    }}
                    value={minFilter}
                />
                <input
                    type="number"
                    id="inputMaxFilter"
                    placeholder="Valor Máximo"
                    onChange={(event) => {
                        handleMaxFilterChanges(event);
                    }}
                    value={maxFilter}
                />
                <button onClick={(event) => ClearFilters(event)}>Limpar</button>
            </form>
        </ContainerFilter>
    );
}

export default Filters;
