import styled from 'styled-components';

export const ContainerItems = styled.div`
    padding: 1vh;
    display: flex;
    flex-direction: column;
    width: 90%;
    background-color: #eee2df;
    border: 2px solid #c89f9c;
    border-radius: 5px;
    overflow-y: auto;
    max-height: 70vh;
    scroll-behavior: smooth;
    /* border: 2px solid red; */
    @media (max-width: 768px) {
        width: 75%;
    }
    
    @media (max-width: 480px) {
        /* Estilo para celulares */
        width: 60%;
        padding: 2vh;
        max-height: 60vh;
    }
`;

export const ButtonBackTop = styled.button`
    background-color: #b3999f9c;
    border-radius: 100%;
    padding: 0.7vw;
    position: absolute;
    bottom: 5vh;
    right: 2.5vw;
    border: none;
    cursor: pointer;
    @media (max-width: 768px) {
        bottom: 4vh;
        right: 1vw;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        bottom: 3vh;
        right: 1.5vw;
    }
`;

export const ImgTop = styled.img`
    height: 1vh;
    width: 1.5vh;
    @media (max-width: 768px) {
        height: 2vh;
        width: 3vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        height: 3vh;
        width: 4vh;
    }
`;

export const SummaryContainer = styled.div`
    position: sticky;
    top: 0;
    background-color: #eee2df;
    border: solid 1.5px #c89f9c;
    display: grid;
    grid-template: 5vh 5vh 5vh 7vh / 1fr 0.5fr;
    padding: 0.4vh 1vh 0.5vh 1vh;
    align-items: center;
    font-size: 2.1vh;
    font-weight: 600;
    h3 {
        font-size: 2.5vh;
        display: grid;
        grid-column: 1/3;
        grid-row: 1/2;
        justify-content: center;
    }
    @media (max-width: 768px) {
        font-size: 2vh;
        grid-template: 4vh 4vh 4vh 6vh / 1fr 0.5fr;
        padding: 0.3vh 0.8vh 0.4vh 0.8vh;
        h3 {
            font-size: 2.3vh;
        }
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        font-size: 2.5vh;
        grid-template: 3.5vh 3.5vh 3.5vh 5.5vh / 1fr 0.5fr;
        padding: 0.2vh 0.5vh 0.3vh 0.5vh;
        h3 {
            font-size: 2.7vh;
        }
    }
`;

export const ProductsP = styled.p`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    @media (max-width: 768px) {
        grid-row: 1 / 2;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        grid-row: 2 / 3;
    }
`;

export const TotalPriceP = styled.p`
    display: grid;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    @media (max-width: 768px) {
        grid-row: 2 / 3;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        grid-row: 3 / 4;
    }
`;

export const WarningDiv = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4vh;
    @media (max-width: 768px) {
        font-size: 2.2vh;
    }

    @media (max-width: 480px) {
        font-size: 2vh;
    }
`;

export const Container = styled.div`
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    display: flex;
    justify-content: space-between;
    align-self: center;
    @media (max-width: 768px) {
        justify-content: flex-end;
        margin-top: 1vh;
    }

    @media (max-width: 480px) {
        margin-top: 2vh;
    }
`;

export const ButtonClearAll = styled.button`
    cursor: pointer;
    background-color: transparent;
    align-items: center;
    border: none;
    display: grid;
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    justify-items: right;
    @media (max-width: 768px) {
        grid-column: 1 / 2;
    }
`;

export const ImgButton = styled.img`
    height: 3vh;

    @media (max-width: 768px) {
        height: 2.5vh;
    }

    @media (max-width: 480px) {
        height: 2vh;
    }
`;

export const ContainerButton = styled.div`
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: 1vh;
    }

    @media (max-width: 480px) {
        margin-top: 2vh;
    }
`;

export const CheckoutButton = styled.button`
    font-family: 'Dosis', sans-serif;
    background-color: #50252d;
    display: grid;
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    color: #f9f6f5;
    grid-row: 4/5;
    padding: 0.5vh;
    transition: box-shadow 0.3s ease;
    width: 10vw;
    font-size: 2vh;
    cursor: pointer;
    border: solid 1px #170d3e;
    border-radius: 1vh;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
    @media (max-width: 768px) {
        /* Estilo para tablets */
        font-size: 2.2vh;
        width: 12vw;
    }

    @media (max-width: 480px) {
        font-size: 2.5vh;
        width: 15vw;
    }
`;

export const InfoItems = styled.div`
    padding: 1vh;
    font-size: 1.8vh;
    display: grid;
    grid-template: 0.8fr 0.5fr 1fr / 1fr 1.5fr 0.7fr;
    align-items: center;
    justify-content: center;
    h3 {
        grid-column: 1 / 4;
    }
    p {
        font-size: 2.1vh;
        font-weight: 600;
        align-self: center;
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    }
    @media (max-width: 768px) {
        /* Estilo para tablets */
        font-size: 2vh;
        grid-template: 0.7fr 0.4fr 1fr / 1fr 1.5fr 0.7fr;
    }

    @media (max-width: 480px) {
        font-size: 2.3vh;
        grid-template: 0.6fr 0.3fr 1fr / 1fr 1.5fr 0.7fr;
    }
`;

export const Divisoria = styled.div`
    border-bottom: 1px solid #c89f9c;
    grid-column: 1 / 4;
    height: 2vh;
    @media (max-width: 768px) {
        height: 1.5vh;
    }

    @media (max-width: 480px) {
        height: 2.5vh;
    }
`;

export const TweaksContainer = styled.div`
    border: 1.6px solid #b36a5e;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8vw;
    height: 3vh;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 10vw;
        height: 2.5vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        width: 12vw;
        height: 3.5vh;
    }
`;

export const DecreaseAndIncreaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    padding: 1.2vh;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 18px;
        padding: 1vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        font-size: 16px;
        padding: 0.8vh;
    }
`;

export const InputQuantity = styled.input`
    background-color: transparent;
    border: none;
    border-left: 1.5px solid #b36a5e;
    border-right: 1.5px solid #b36a5e;
    text-align: center;
    width: 2.4vw;
    font-size: 1.8vh;
    @media (max-width: 768px) {
        width: 3.5vw;
        font-size: 2vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        width: 6vw;
        font-size: 2.5vh;
    }
`;

export const ButtonDeleteItem = styled.button`
    font-family: 'Dosis', sans-serif;
    background: none;
    border: none;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 2vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        font-size: 2.5vh;
    }
`;

export const PurchaseCompleted = styled.p`
    font-family: 'Dosis', sans-serif;
    background-color: #eee2df;
    position: absolute;
    padding: 4vh;
    font-size: 2.5vh;
    z-index: 2;
    @media (max-width: 768px) {
        padding: 3vh;
        font-size: 2.2vh;
    }

    @media (max-width: 480px) {
        /* Estilo para celulares */
        padding: 2vh;
        font-size: 2.5vh;
    }
`;
