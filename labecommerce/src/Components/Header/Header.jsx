import React from 'react';
import Filters from '../Filters/Filters';
import {
    ContainerCartAndItems,
    ContainerHeader,
    IconCart,
    ImgHeader,
    NameSite,
    QuantityItems,
} from './HeaderSyle';
import space from '../../assets/img/camisa.png';
// modelo carrinho 1
// import imgCart from '../../assets/img/cart.png';
// modelo carrinho 2
// import imgCart from '../../assets/img/cart-4.png';
// modelo carrinho 3
// import imgCart from '../../assets/img/cart-3.png';
// modelo carrinho 4
import imgCart from '../../assets/img/cart.png';

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
            {/* <ImgHeader src={space} alt="IMAGEM" /> */}
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
