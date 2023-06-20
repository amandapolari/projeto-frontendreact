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
}) {

    return (
        <ContainerFilter>
            <form action="">
                <label htmlFor="inputSearchFilter">Buscar por nome</label>
                <input
                    type="text"
                    id="inputSearchFilter"
                    onChange={(event) => {
                        handleSearchFilterChanges(event);
                    }}
                    value={searchFilter}
                />
                <label htmlFor="inputMinFilter">Valor Mínimo</label>
                <input
                    type="number"
                    id="inputMinFilter"
                    onChange={(event) => {
                        handleMinFilterChanges(event);
                    }}
                    value={minFilter}
                />
                <label htmlFor="inputMaxFilter">Valor Máximo</label>
                <input
                    type="number"
                    id="inputMaxFilter"
                    onChange={(event) => {
                        handleMaxFilterChanges(event);
                    }}
                    value={maxFilter}
                />
            </form>
        </ContainerFilter>
    );
}

export default Filters;
