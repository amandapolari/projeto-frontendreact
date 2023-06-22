import styled from 'styled-components';

export const ContainerItems = styled.div`
    padding: 2vh;
    display: flex;
    flex-direction: column;
    height: 10vh;
    width: 100%;
    display: grid;
    gap: 1vh;
    h2 {
        text-align: center;
    }
`;

export const InfoItems = styled.div`
    padding: 2vh;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: lightgrey;
    border: solid black 1px;
`;

export const ContainerValueAndButton = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ImgButton = styled.img`
    height: 3vh;
`;

export const ButtonClearAll = styled.button`
    background-color: transparent;
    border: none;
`;
