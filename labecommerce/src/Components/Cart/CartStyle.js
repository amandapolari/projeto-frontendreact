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
        h2 {
            font-size: 2.3vh;
            padding: 2vh;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 2vh;
            padding: 2vh;
        }
    }
`;
