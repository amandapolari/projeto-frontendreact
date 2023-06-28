import styled from 'styled-components';

export const ContainerItems = styled.div`
    padding: 2vh;
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    width: 100%;
    /* border-radius: 10px; */
    color: #ffff;
    /* border: solid 1px #170d3e; */
    /* background-color: #3c355b; */
    background-color: #EED7C5;
    /* background-color: #170d3ecc; */

    h2 {
        text-align: center;
    }
    gap: 10px;
`;

export const InfoItems = styled.div`
    /* background-color: #170d3ecc; */
    background-color: #C89F9C;
    /* background: linear-gradient(to bottom right, #170d3e, #3c355b); */
    /* border-radius: 10px; */
    /* gap: 10px; */
    padding: 2vh;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* background: lightgrey; */
    /* border: solid black 1px; */
    /* box-shadow: 5px 5px 5px #000000; */
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
    color: #ffff;
`;

export const DecreaseAndIncreaseButton = styled.button`
    background-color: transparent;
    border: none;
`;

export const ImgControll = styled.img`
    height: 3vh;
`;
export const WarningParagraph = styled.p`
    /* height: 3vh; */
    text-align: center;
`;

export const ButtonDeleteItem = styled.button`
    /* background-color: #170d3e4d; */
    background-color: #C97C5D;
    /* background: linear-gradient(to bottom, #170d3e, #170d3e4d); */

    color: #ffff;
    border: none;
    padding: 10px 20px;
    /* border-radius: 5px; */
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    border: solid 1px #170d3e;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
    /* background-color: #170d3e;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    } */
`;

export const SummaryContainer = styled.div`
    border: solid 1px #170d3e;
    display: grid;
    grid-template: 0.5fr 1fr 1fr / 1fr 1fr;
    h3 {
        display: grid;
        grid-column: 1 / 3;
    }
`;
