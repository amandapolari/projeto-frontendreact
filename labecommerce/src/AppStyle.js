import styled from 'styled-components';

export const ContainerApp = styled.div`
    background-color: #F9F6F5;
`;

export const ContainerHomeCart = styled.div`
    display: grid;
    /* grid-template: 1fr / 1fr 0.3fr; */
    grid-template: 1fr / ${({ showComponent }) =>
            showComponent ? '1fr 0.3fr' : '1fr'};
`;
