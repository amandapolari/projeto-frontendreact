import styled from 'styled-components';

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6vh;
    height: 10vh;
    background-color: #eee2df;
    box-shadow: 4px 8px 6px -5px #777;
    color: #471835;
    position: sticky;
    top: 0;
`;

export const ImgHeader = styled.img`
    height: 6vh;
    margin: 2vh;
`;

export const IconCart = styled.img`
    cursor: pointer;
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
    font-weight: 600;
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
    font-weight: 800;
    font-size: 4vh;
    color: #50252D;
`;
