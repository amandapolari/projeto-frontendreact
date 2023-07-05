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
        height: 10vh;
    }

    @media (max-width: 480px) {
        height: 10vh;
    }
`;

export const IconCart = styled.img`
    cursor: pointer;
    height: 6vh;
    margin: -4.5vh 2.5vh 1vh 2vh;
    @media (max-width: 768px) {
        height: 6vh;
        margin: -3.9vh 2.7vh 2vh 2vh;
    }

    @media (max-width: 480px) {
        height: 6vh;
        margin: -3.5vh 2.6vh 2vh 2vh;
    }
`;

export const QuantityItems = styled.p`
    height: 3vh;
    font-weight: 600;
    @media (max-width: 768px) {
        height: 2.5vh;
        font-size: 1.8vh;
    }

    @media (max-width: 480px) {
        font-size: 2.1vh;
    }
`;

export const ContainerCartAndItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NameSite = styled.p`
    padding: 2vh;
    text-align: center;
    font-weight: 800;
    font-size: 4vh;
    color: #50252d;
    @media (max-width: 768px) {
        font-size: 3.1vh;
    }

    @media (max-width: 480px) {
        font-size: 3.1vh;
    }
`;
