import React from 'react';
import Filters from '../Filters/Filters';
import { ContainerHeader, IconCart, ImgHeader } from './HeaderSyle';
import logo from '../../img/logo.png';
import imgCart from '../../img/cart.png';
// import images from '../../images.json';

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
