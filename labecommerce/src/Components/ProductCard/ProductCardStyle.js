import * as styled from 'styled-components';

export const CardContainer = styled.styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `;
export const Card = styled.styled.div`
    border: solid 1.2px black;
    align-items: center;
    width:20vw;
`;

export const Img = styled.styled.img`
    width:20vw;
`;

export const Button = styled.styled.button`
    /* display: grid; */
    /* justify-self: center; */
`;

export const ContainerSuperior = styled.styled.div`
    padding: 0 3vw 0 3vw;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const P = styled.styled.p`
    /* margin:2vw; */
    /* width:50%; */
    /* display: block; */
`;

export const Select = styled.styled.select`
    height: 3vh;
    /* margin:2vw; */
    /* width:50%; */
    /* display: block; */
`;
