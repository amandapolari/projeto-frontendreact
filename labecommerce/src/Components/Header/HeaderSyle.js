import styled from 'styled-components';

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6vh;
    height: 10vh;
    background-color: #eee2df;
    color: #471835;
    position: sticky;
    top: 0;
    z-index: 2;
    @media (max-width: 768px) {
        /* Estilo para tablets */
        height: 12vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        height: 14vh;
        flex-direction: column;
    }
`;

export const IconCart = styled.img`
    cursor: pointer;
    height: 6vh;
    margin: -4.5vh 2.5vh 1vh 2vh;
    @media (max-width: 768px) {
        /* Estilo para tablets */
        height: 6vh;
        margin: -3.9vh 2.7vh 2vh 2vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        height: 9vh;
        margin: -8.5vh 2vh 2vh 2vh;
    }
`;

export const QuantityItems = styled.p`
    height: 3vh;
    font-weight: 600;
    @media (max-width: 768px) {
        /* Estilo para tablets */
        height: 2.5vh;
        /* margin-top: 2vh; */
        font-size: 1.8vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        font-size: 3vh;
    }
`;

export const ContainerCartAndItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 10px;
    right: 10px; */
`;

export const NameSite = styled.p`
    padding: 2vh;
    text-align: center;
    font-weight: 800;
    font-size: 4vh;
    color: #50252d;
    @media (max-width: 768px) {
        /* Estilo para tablets */
        font-size: 3.5vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        font-size: 4vh;
    }
`;
