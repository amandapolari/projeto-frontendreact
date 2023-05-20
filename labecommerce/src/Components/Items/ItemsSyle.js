import * as styled from 'styled-components';

export const ContainerItems = styled.styled.div`
    display: flex;
    flex-direction:column ;
    height:10vh;
    background: lightseagreen;
    width:100%;
    display:grid;
    gap:1vh;
    h2 {
        text-align:center;
    }
    `;

export const InfoItems = styled.styled.div`
    display: flex;
    align-items:center;
    justify-content:space-around;
    background: lightgrey;
    border:solid black 1px;
    `;
