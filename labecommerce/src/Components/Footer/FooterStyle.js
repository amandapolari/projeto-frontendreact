import styled from 'styled-components';

export const ContainerFooter = styled.div`
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5vh;
    background-color: #eee2df;
    @media (max-width: 768px) {
        /* Estilo para tablets */
        /* height: 5vh; */
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        height: 10vh;
    }
`;

export const ParagraphFooter = styled.p`
    font-size: 2vh;
    @media (max-width: 768px) {
        /* Estilo para tablets */
        font-size: 2vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        font-size: 2vh;
    }
`;

export const AnchorLink = styled.a`
    color: #50252d;
    &:hover {
        color: #b36a5e;
    }
    @media (max-width: 768px) {
        /* Estilo para tablets */
        /* font-size: 2vh; */
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        /* font-size: 2vh; */
    }
`;
