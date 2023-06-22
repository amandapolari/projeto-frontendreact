import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export const Card = styled.div`
    border: solid 1.2px black;
    /* align-items: center; */
    /* justify-content: center; */
    width: 15vw;
    background-color: white;
    margin-bottom: 2vh;
`;

export const Img = styled.img`
    width: 15vw;
`;

export const Button = styled.button`
    /* width: 100%; */
    /* display: grid; */
    /* justify-self: center; */
`;

export const ContainerSuperior = styled.div`
    padding: 0 3vw 0 3vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const P = styled.p`
    /* margin:2vw; */
    /* width:50%; */
    /* display: block; */
`;

export const Select = styled.select`
    height: 3vh;
    /* margin:2vw; */
    /* width:50%; */
    /* display: block; */
`;

export const H3 = styled.h3`
    font-size: 2vh;
    align-items: center;
`;

export const ContainerInfos = styled.div`
    display: grid;
    background-color: lightgreen;
    grid-template: 1fr / 1fr;
    align-content: center;
    justify-content: center ;
    /* margin-top: 2px ; */
`;
