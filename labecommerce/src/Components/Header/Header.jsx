import React from 'react';
import Filters from '../Filters/Filters';
import {
    ContainerCartAndItems,
    ContainerHeader,
    IconCart,
    ImgHeader,
    QuantityItems,
} from './HeaderSyle';
// import logo from '../../assets/img/logo.png';
import space from '../../assets/img/space-robot.png';
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
}) => {
    return (
        <ContainerHeader>
            {/* <ImgHeader src={logo} alt="IMAGEM" /> */}
            <ImgHeader src={space} alt="IMAGEM" />
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
                {/* {quantityItems === 0 ? (quantityItems = '') : quantityItems} */}
                {/* <QuantityItems>{quantityItems}</QuantityItems> */}
                <QuantityItems>
                    {quantityItems === 0 ? (quantityItems = '') : quantityItems}
                </QuantityItems>
                <IconCart src={imgCart} alt="IMAGEM" />
            </ContainerCartAndItems>
        </ContainerHeader>
    );
};

export default Header;
