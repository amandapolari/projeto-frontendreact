/* eslint-disable array-callback-return */
import { useState } from 'react';
import {
    BtnClear,
    ContainerFilter,
    Form,
    InputFilter,
    MobileMenuButton,
    MenuIcon,
} from './FiltersStyle';

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <ContainerFilter>
            <MobileMenuButton onClick={toggleMobileMenu}>
                {/* Ícone do menu de hambúrguer */}
                {/* <button>Clique</button> */}
                {/* <MenuIcon>{isMobileMenuOpen ? 'close' : 'menu'}</MenuIcon> */}
                <MenuIcon
                    className={
                        isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'
                    }
                />
            </MobileMenuButton>

            <Form isMobileMenuOpen={isMobileMenuOpen}>
                <InputFilter
                    type="text"
                    id="inputSearchFilter"
                    placeholder="Buscar por nome"
                    onChange={(event) => {
                        handleSearchFilterChanges(event);
                    }}
                    value={searchFilter}
                />
                <InputFilter
                    type="number"
                    id="inputMinFilter"
                    placeholder="Valor Mínimo"
                    onChange={(event) => {
                        handleMinFilterChanges(event);
                    }}
                    value={minFilter}
                />
                <InputFilter
                    type="number"
                    id="inputMaxFilter"
                    placeholder="Valor Máximo"
                    onChange={(event) => {
                        handleMaxFilterChanges(event);
                    }}
                    value={maxFilter}
                />
                <BtnClear onClick={(event) => ClearFilters(event)}>
                    Limpar
                </BtnClear>
            </Form>
        </ContainerFilter>
    );
}

export default Filters;
