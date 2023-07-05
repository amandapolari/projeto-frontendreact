import styled from 'styled-components';

export const ContainerApp = styled.div`
    background-color: #f9f6f5;
`;

export const ContainerHomeCart = styled.div`
    display: grid;
    grid-template: 1fr / ${({ showComponent }) =>
            showComponent ? '1fr 0.3fr' : '1fr'};

    @media (max-width: 768px) {
        grid-template: 1fr / ${({ showComponent }) =>
                showComponent ? '1.2fr 0.8fr' : '1fr'};
    }

    @media (max-width: 480px) {
        grid-template: 1fr / ${({ showComponent }) =>
                showComponent ? '1fr 1fr' : '1fr'};
    }
`;
