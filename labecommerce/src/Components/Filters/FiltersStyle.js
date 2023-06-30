import styled from 'styled-components';

export const ContainerFilter = styled.div`
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-around;
    gap: 2vh;
`;

export const InputFilter = styled.input`
    font-family: 'Dosis', sans-serif;
    background-color: #f9f6f5;
    padding: 1vh;
    font-size: 2vh;
    border: none;
    padding: 10px;
    transition: box-shadow 0.3s ease;
    border-radius: 5px;
    &:focus {
        outline: none;
        box-shadow: 0 0 5px #c89f9c;
    }
`;

export const BtnClear = styled.button`
    font-family: 'Dosis', sans-serif;
    border: 1px solid #b36a5e;
    background-color: #50252d;
    color: #eee2df;
    font-size: 2vh;
    font-weight: 600;
    padding: 1vh 2vh;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
        transition: box-shadow 0.3s ease;
    }
`;
