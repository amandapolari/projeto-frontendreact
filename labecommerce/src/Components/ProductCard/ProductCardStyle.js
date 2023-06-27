import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ContainerSuperior = styled.div`
    padding: 2vh 4vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffff;
`;

export const Card = styled.div`
    /* border: solid 7px #3c355b; */
    border-radius: 10px;
    color: #ffff;
    border: solid 1px #170d3e;
    background-color: #3c355b;
    padding: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15vw;
    margin-bottom: 2vh;
    box-shadow: 5px 5px 5px #000000;
`;

export const Img = styled.img`
    width: 15vw;
`;

export const Button = styled.button`
    background: linear-gradient(to bottom, #170d3e, #170d3e4d);
    color: #ffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    border: solid 1px #170d3e;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
`;

export const P = styled.p`
`;

export const PriceText = styled.p`
`;

export const Select = styled.select`
    background-color: #3c355b;
    color: #ffff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    appearance: none;
    font-size: 16px;
    width: 200px;

    &:focus {
        outline: none;
        box-shadow: 0 0 5px #3c355b;
    }
    option {
        font-size: 16px;
        padding: 2vh;
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
