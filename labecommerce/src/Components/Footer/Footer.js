/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { AnchorLink, ContainerFooter, ParagraphFooter } from './FooterStyle';

const Footer = () => {
    return (
        <ContainerFooter>
            <ParagraphFooter>
                Desenvolvido por{' '}
                <AnchorLink
                    target="_blank"
                    href="https://www.linkedin.com/in/amandapolari/"
                >
                    Amanda Polari
                </AnchorLink>
            </ParagraphFooter>
        </ContainerFooter>
    );
};

export default Footer;
