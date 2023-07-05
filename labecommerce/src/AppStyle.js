import styled from 'styled-components';

export const ContainerApp = styled.div`
    background-color: #f9f6f5;
`;

export const ContainerHomeCart = styled.div`
    display: grid;
    grid-template: 1fr / ${({ showComponent }) =>
            showComponent ? '1fr 0.3fr' : '1fr'};
`;
