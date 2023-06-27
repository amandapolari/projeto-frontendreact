import styled from 'styled-components';

export const ContainerHeader = styled.div`
    /* border: solid 2px black; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5vh;
    height: 10vh;
    background: linear-gradient(to bottom right, #170d3e, #3c355b);
    color: #cccccc;
    position: sticky;
    top: 0;
`;

export const ImgHeader = styled.img`
    height: 6vh;
    margin: 2vh;
`;

export const IconCart = styled.img`
    height: 6vh;
    /* modelo carrinho 1 */
    margin: -4.5vh 2.5vh 1vh 2vh;
    /* modelo carrinho 2 */
    /* margin: -6vh 2.5vh 1vh 2vh; */
    /* modelo carrinho 3 */
    /* margin: -5.65vh 2.5vh 1vh 2vh; */
`;

export const QuantityItems = styled.p`
    /* modelo carrinho 1 e 2 */
    height: 3vh;
    /* modelo carrinho 3 */
    /* height: 1.9vh; */
`;

export const ContainerCartAndItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NameSite = styled.p`
    padding: 2vh;
    text-align: center;
`;
