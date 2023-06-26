/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { ContainerFooter } from './FooterStyle';

const Footer = () => {
    return (
        <ContainerFooter>
            <p>
                Desenvolvido por{' '}
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/amandapolari/"
                >
                    Amanda Polari
                </a>
            </p>
        </ContainerFooter>
    );
};

export default Footer;
