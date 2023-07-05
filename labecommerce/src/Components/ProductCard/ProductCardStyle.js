import styled from 'styled-components';

export const ContainerSuperior = styled.div`
    padding: 0 4.1vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #471835;
    font-weight: 600;
    font-size: 3vh;
    @media (max-width: 768px) {
        padding: 0 2vh;
        font-size: 2.5vh;
    }

    @media (max-width: 480px) {
        padding: 0 1.5vh;
        font-size: 2vh;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2vh 5vh;
    @media (max-width: 768px) {
        gap: 1.5vh 3.5vh;
    }

    @media (max-width: 480px) {
        gap: 1vh 2vh;
    }
`;

export const Select = styled.select`
    appearance: none;
    font-size: 2vh;
    background-color: #50252d;
    text-align: center;
    width: 8vw;
    color: #f9f6f5;
    border: none;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    padding: 1vh 0;

    @media (max-width: 768px) {
        font-size: 1.8vh;
        width: 12vw;
    }

    @media (max-width: 480px) {
        font-size: 1.6vh;
        width: 15vw;
    }

    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    option {
        font-size: 2vh;
    }
`;

export const Card = styled.div`
    display: grid;
    justify-content: center;
    align-items: flex-start;
    border-radius: 5px;
    border: 2px solid #c89f9c;
    color: #471835;
    background-color: #eee2df;
    padding: 2vh;
    width: 10vw;

    @media (max-width: 768px) {
        padding: 1.5vh;
        width: 20vw;
    }

    @media (max-width: 480px) {
        padding: 1vh;
        width: 30vw;
    }

    &:hover {
        box-shadow: 0 0 5px #50252d;
        transition: box-shadow 0.4s ease;
    }
`;

export const ContainerInfos = styled.div`
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
`;

export const Img = styled.img`
    align-self: flex-start;
    justify-self: center;
    width: 10vw;
    @media (max-width: 768px) {
        width: 15vw;
    }

    @media (max-width: 480px) {
        width: 20vw;
    }
`;

export const H3 = styled.h3`
    margin: 1vh 0vh 0.5vh 0vh;
    align-self: flex-start;
    margin: 1vh 0vh 0.5vh 0vh;
    @media (max-width: 768px) {
        font-size: 2.3vh;
    }

    @media (max-width: 480px) {
        font-size: 2vh;
    }
`;

export const PriceText = styled.p`
    margin: 1vh 0vh 1.5vh 0vh;
    font-size: 2vh;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size: 1.8vh;
    }

    @media (max-width: 480px) {
        font-size: 1.6vh;
    }
`;

export const Button = styled.button`
    font-family: 'Dosis', sans-serif;
    background-color: #50252d;
    color: #f9f6f5;
    border: none;
    border-radius: 5px;
    padding: 0.8vh;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    border: solid 1px #170d3e;
    @media (max-width: 768px) {
        padding: 0.2vh;
        font-size: 1.8vh;
    }

    @media (max-width: 480px) {
        padding: 0.5vh;
        font-size: 1.8vh;
    }
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
`;
