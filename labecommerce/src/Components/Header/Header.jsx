import React from 'react';
import Filters from '../Filters/Filters';
import { ContainerHeader, IconCart, ImgHeader } from './HeaderSyle';

import logo from '../../assets/img/logo.png';
import imgCart from '../../assets/img/cart.png';

const Header = () => {
    return (
        <ContainerHeader>
            <ImgHeader src={logo} alt="IMAGEM" />
            <Filters />
            <IconCart src={imgCart} alt="IMAGEM" />
        </ContainerHeader>
    );
};

export default Header;
