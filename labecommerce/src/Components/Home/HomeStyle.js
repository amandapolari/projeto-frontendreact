import styled from 'styled-components';

export const ContainerHome = styled.div`
    padding: 1vh;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        /* Estilo para tablets */
        /* padding: 1vh; */
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        /* padding: 3vh; */
    }
`;

export const ContainerProduct = styled.div`
    min-height: 81vh;

    @media (max-width: 768px) {
        /* border:solid 2px black; */
        /* Estilo para tablets */
        /* min-height: 80vh; */
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        /* min-height: 81vh; */
    }
`;
