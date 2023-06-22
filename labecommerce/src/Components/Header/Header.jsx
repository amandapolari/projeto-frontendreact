import React from 'react';
import Filters from '../Filters/Filters';
import { ContainerHeader, IconCart, ImgHeader } from './HeaderSyle';
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
            <IconCart src={imgCart} alt="IMAGEM" />
        </ContainerHeader>
    );
};

export default Header;
