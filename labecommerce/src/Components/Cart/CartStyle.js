import styled from 'styled-components';

export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        padding: 2.4vh;
        font-size: 3vh;
        font-weight: 700;
    }
    @media (max-width: 768px) {
        /* Estilo para tablets */
        h2 {
            font-size: 2.5vh;
        }
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        h2 {
            font-size: 2vh;
        }
    }
`;
