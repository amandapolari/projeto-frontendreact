import styled from 'styled-components';

export const ContainerFooter = styled.div`
    height: 5vh;
    /* border: solid 2px black; */
    box-shadow: -4px -8px 6px -5px #777;
    /* box-shadow: 4px 8px 6px -5px #777;
	-moz-box-shadow: 4px 8px 6px -5px #777;
	-webkit-box-shadow: 4px 8px 6px -5px #777; */
    /* box-shadow: 4px 8px -5px #777; */
	/* -moz-box-shadow: 4px 8px 6px -5px #777; */
	/* -webkit-box-shadow: 4px 8px 6px -5px #777; */

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5vh;
    /* background: linear-gradient(to bottom right, #170d3e, #3c355b); */
    background-color: #eed7c5;
    color: #cccccc;
`;

export const ParagraphFooter = styled.p`
    color: #ffff;
    font-size: 2vh;
`;

export const AnchorLink = styled.a`
    color: #ffff;
    &:hover {
        color: #cc9e75;
    }
`;
