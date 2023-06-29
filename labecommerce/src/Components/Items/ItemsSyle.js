import styled from 'styled-components';

export const ContainerItems = styled.div`
    padding: 1vh;
    display: flex;
    flex-direction: column;
    width: 90%;
    background-color: #eee2df;
    border: 2px solid #c89f9c;
    border-radius: 5px;
`;

export const SummaryContainer = styled.div`
    border: solid 1.5px #c89f9c;
    display: grid;
    grid-template: 0.5fr 1fr 1fr / 1fr 1fr;
    h3 {
        display: grid;
        grid-column: 1 / 3;
        justify-content: center;
        align-items: center;
    }
    p {
        grid-row: 2/3;
    }
`;

export const WarningParagraph = styled.p`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    justify-content: center;
    align-items: center;
`;

export const ContainerValueAndButton = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        display: grid;
        grid-row: 4/5;
    }
`;

export const ButtonClearAll = styled.button`
    background-color: transparent;
    border: none;
`;

export const ImgButton = styled.img`
    height: 3vh;
`;

export const CheckoutButton = styled.button`
    font-family: 'Dosis', sans-serif;
    background-color: #50252d;
    color: #f9f6f5;
    grid-row: 4/5;
    padding: 1vh;
    height: 5vh;
    width: 8vw;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    border: solid 1px #170d3e;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
`;

export const InfoItems = styled.div`
    padding: 2vh;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
    }
`;

export const TweaksContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 7vw;
    height: 3vh;
    overflow: hidden;
    padding: 1vh;
`;

export const DecreaseAndIncreaseButton = styled.button`
    background-color: transparent;
    border: none;
`;

export const ImgControll = styled.img`
    height: 3vh;
`;

export const InputQuantity = styled.input`
    background-color: transparent;
    border: none;
    text-align: center;
    height: 3vh;
    width: 4vw;
    font-size: 2.5vh;
    color: #ffff;
`;

export const ButtonDeleteItem = styled.button`
    font-family: 'Dosis', sans-serif;
    background-color: #50252d;
    color: #f9f6f5;
    grid-row: 4/5;
    padding: 1vh;
    height: 5vh;
    width: 8vw;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    border: solid 1px #170d3e;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
`;
