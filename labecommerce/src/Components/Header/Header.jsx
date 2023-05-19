import React from 'react';
import Filters from '../Filters/Filters';
import Cart from '../Cart/Cart';
import { ContainerHeader, ImgHeader } from './HeaderSyle';
import logo from '../../img/logo.png';
// import images from '../../images.json';

const Header = () => {
    return (
        <ContainerHeader>
            {/* <ImgHeader src={images.logo} alt="IMAGEM" /> */}
            <ImgHeader src={logo} alt="IMAGEM" />
            <Filters />
            {/* <p>Header</p> */}
            {/* <Cart / */}
            <Cart />
        </ContainerHeader>
    );
};

export default Header;
