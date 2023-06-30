import React from 'react';
import Filters from '../Filters/Filters';
import {
    ContainerCartAndItems,
    ContainerHeader,
    IconCart,
    NameSite,
    QuantityItems,
} from './HeaderSyle';

import imgCart from '../../assets/img/cart-cor-padrao.png';

const Header = ({
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
    productsFiltered,
    setProductsFiltered,
    handleSearchFilterChanges,
    handleMinFilterChanges,
    handleMaxFilterChanges,
    ClearFilters,
    quantityItems,
    handleClick,
}) => {
    return (
        <ContainerHeader>
            <NameSite>LABECOMMERCE</NameSite>
            <Filters
                minFilter={minFilter}
                setMinFilter={setMinFilter}
                maxFilter={maxFilter}
                setMaxFilter={setMaxFilter}
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                productsFiltered={productsFiltered}
                setProductsFiltered={setProductsFiltered}
                handleSearchFilterChanges={handleSearchFilterChanges}
                handleMinFilterChanges={handleMinFilterChanges}
                handleMaxFilterChanges={handleMaxFilterChanges}
                ClearFilters={ClearFilters}
            />
            <ContainerCartAndItems>
                <QuantityItems>
                    {quantityItems === 0 ? (quantityItems = '') : quantityItems}
                </QuantityItems>
                <IconCart
                    onClick={(event) => {
                        handleClick(event);
                    }}
                    src={imgCart}
                    alt="IMAGEM"
                />
            </ContainerCartAndItems>
        </ContainerHeader>
    );
};

export default Header;
