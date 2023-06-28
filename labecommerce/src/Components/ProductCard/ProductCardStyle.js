import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* distância entre os cards */
    gap: 1.4vh;
`;

export const ContainerSuperior = styled.div`
    padding: 0 1vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #471835;
    font-weight: 600;
    font-size: 3vh;
`;

export const Card = styled.div`
    color: #471835;
    background-color: #eee2df;
    padding: 2vh;
    display: flex;
    /* display: grid; */
    /* grid-template: 3fr 1fr 1fr 1fr / 1fr; */
    align-items: center;
    justify-content: center;
    width: 10vw;
    margin-bottom: 2vh;
    box-shadow: 0 0 5px #c89f9c;
    &:hover {
        box-shadow: 0 0 5px #50252d;
        transition: box-shadow 0.4s ease;
    }
`;

export const Img = styled.img`
    width: 10vw;
`;

export const Button = styled.button`
    background-color: #50252d;
    color: #ffff;
    border: none;
    padding: 10px 20px;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    border: solid 1px #170d3e;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
`;

export const P = styled.p``;

export const PriceText = styled.p``;

export const Select = styled.select`
    /* text-align: center; */
    /* padding: 10px; */
    appearance: none;
    font-size: 16px;
    background-color: #50252d;
    color: #ffff;
    border: none;
    transition: box-shadow 0.3s ease;
    /* width: ; */
    cursor: pointer;
    border: solid 1px #170d3e;
    padding: 1vh;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px #3c355b;
    }
    option {
        font-size: 17px;
    }
`;

export const H3 = styled.h3`
    margin: 1vh 0vh 0.5vh 0vh;
    font-size: 2vh;
`;

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const NoneItems = styled.p`
    height: 71vh;
    width: 90vw;
    font-size: 3vh;
    text-align: center;
`;
