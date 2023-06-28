import styled from 'styled-components';

export const ContainerFilter = styled.div`
    /* border: solid 2px #f4b3a0;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1vh; */
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
    &:focus {
        outline: none;
        box-shadow: 0 0 5px #c89f9c;
    }
`;

export const BtnClear = styled.button`
    /* padrão de botão */
    font-family: 'Dosis', sans-serif;
    border: 1px solid #b36a5e;
    /* background-color: #471835; */
    background-color: #583243;

    color: #eee2df;
    font-size: 2vh;
    font-weight: 600;
    padding: 1vh 2vh;
    /* padding: 10px 20px; */
    /* border-radius: 11px; */
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
        transition: box-shadow 0.3s ease;
        /* box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25); */
    }
`;
