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
    flex-direction: column;
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

export const TweaksContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 7vw;
    height: 3vh;
    overflow: hidden;
    padding: 1vh;
`;
export const InputQuantity = styled.input`
    background-color: transparent;
    border: none;
    text-align: center;
    height: 3vh;
    width: 4vw;
    font-size: 2.5vh;
`;

export const DecreaseAndIncreaseButton = styled.button`
    background-color: transparent;
    border: none;
`;

export const ImgControll = styled.img`
    height: 3vh;
`;
