import styled from 'styled-components';

export const ContainerHeader = styled.div`
    // Divisória
    border: solid 2px black;
    //
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5vh;
    height: 10vh;
    background: lightblue;
`;

export const ImgHeader = styled.img`
    height: 6vh;
    margin: 2vh;
`;

export const IconCart = styled.img`
    height: 6vh;
    margin: -4.5vh 2.5vh 1vh 2vh;
`;

export const QuantityItems = styled.p`
    height: 3vh;
    /* margin: 2vh; */
    /* border: 1px solid red; */
`;

export const ContainerCartAndItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid black; */
`;
