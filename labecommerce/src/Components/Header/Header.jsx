import React from 'react';
import Filters from '../Filters/Filters';
import { ContainerHeader, IconCart, ImgHeader } from './HeaderSyle';

import logo from '../../assets/img/logo.png';
import imgCart from '../../assets/img/cart.png';

const Header = () => {
    return (
        <ContainerHeader>
            {/* <ImgHeader src={`../../${images.logo}`} alt="IMAGEM" /> */}
            <ImgHeader src={logo} alt="IMAGEM" />
            <Filters />
            {/* <p>Header</p> */}
            {/* <Cart / */}
            <IconCart src={imgCart} alt="" />
        </ContainerHeader>
    );
};

export default Header;
