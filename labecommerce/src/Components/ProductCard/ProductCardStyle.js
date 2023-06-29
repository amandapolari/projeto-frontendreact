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
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* distância entre os cards: */
    gap: 1.3vh;
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
    /* height: 45vh; */
    border-radius: 5px;
    border: 2px solid #c89f9c;
    color: #471835;
    background-color: #eee2df;
    padding: 2vh;
    width: 10vw;
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
    width: 10vw;
`;

export const H3 = styled.h3`
    margin: 1vh 0vh 0.5vh 0vh;
    align-self: flex-start;
    margin: 1vh 0vh 0.5vh 0vh;
`;

export const PriceText = styled.p`
    margin: 1vh 0vh 1.5vh 0vh;
    font-size: 2vh;
    font-weight: 600;
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
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
`;
