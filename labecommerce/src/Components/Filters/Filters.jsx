import { ContainerFilter } from './FiltersStyle';

function Filters({
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
}) {
    // console.log(minFilter,
    //     setMinFilter,
    //     maxFilter,
    //     setMaxFilter,
    //     searchFilter,
    //     setSearchFilter,);

    // TRATATIVAS PARA NÚMEROS NEGATIVOS
    const treatmentNegativeNumber = (event, functionSetFilter) => {
        let enteredValue = Number(event.target.value);
        // ternário:
        enteredValue < 0
            ? functionSetFilter('')
            : functionSetFilter(enteredValue);
        // comum:
        // if (enteredValue < 0) {
        //     functionSetFilter('');
        // } else {
        //     functionSetFilter(enteredValue);
        // }
    };
    // - - - - - - - - - - - - - -

    // FUNÇÕES QUE MUDAM OS ESTADOS
    const handleSearchFilterChanges = (event) => {
        setSearchFilter(event.target.value);
    };

    const handleMaxFilteChanges = (event) => {
        treatmentNegativeNumber(event, setMaxFilter);
    };

    const handleMinFilterChanges = (event) => {
        treatmentNegativeNumber(event, setMinFilter);
    };
    // - - - - - - - - - - - - - -

    return (
        <ContainerFilter>
            <form action="">
                <label htmlFor="inputSearchFilter">Buscar por nome</label>
                <input
                    type="text"
                    id="inputSearch"
                    onChange={handleSearchFilterChanges}
                    value={searchFilter}
                />
                <label htmlFor="inputMinFilter">Valor Mínimo</label>
                <input
                    type="number"
                    id="inputMinFilter"
                    onChange={handleMinFilterChanges}
                    value={minFilter}
                />
                <label htmlFor="inputMaxFilter">Valor Máximo</label>
                <input
                    type="number"
                    id="inputMaxFilter"
                    onChange={handleMaxFilteChanges}
                    value={maxFilter}
                />
            </form>
        </ContainerFilter>
    );
}

export default Filters;
