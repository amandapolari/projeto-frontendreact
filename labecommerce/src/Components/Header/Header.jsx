import React from 'react';
import Filters from '../Filters/Filters';
import { ContainerHeader, IconCart, ImgHeader } from './HeaderSyle';

import logo from '../../assets/img/logo.png';
import imgCart from '../../assets/img/cart.png';

const Header = ({
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter,
}) => {
    return (
        <ContainerHeader>
            <ImgHeader src={logo} alt="IMAGEM" />
            <Filters
                minFilter={minFilter}
                setMinFilter={setMinFilter}
                maxFilter={maxFilter}
                setMaxFilter={setMaxFilter}
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
            />
            <IconCart src={imgCart} alt="IMAGEM" />
        </ContainerHeader>
    );
};

export default Header;
