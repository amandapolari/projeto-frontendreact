import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    padding: 1vh;
    justify-content: center;
`;

export const PaginationList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const PaginationItem = styled.li`
    display: inline;
    margin: 0 5px;
`;

export const PaginationButton = styled.button`
    padding: 5px 10px;
    background-color: ${(props) =>
        props.isActive ? '#b36a5e' : 'transparent'};
    color: ${(props) => (props.isActive ? 'white' : 'black')};
    border: 1px solid #b36a5e;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 2vh;
        padding: 5px 10px;
    }

    @media (max-width: 480px) {
        font-size: 1.6vh;
        padding: 4px 10px;
    }
`;
