import styled from 'styled-components';

export const ContainerApp = styled.div`
    background-image: url('./background-8.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ContainerHomeCart = styled.div`
    display: grid;
    /* grid-template: 1fr / 1fr 0.3fr; */
    grid-template: 1fr / ${({ showComponent }) =>
            showComponent ? '1fr 0.3fr' : '1fr'};
`;
