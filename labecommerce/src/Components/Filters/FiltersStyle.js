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
    background-color: #3c355b;
    padding: 1vh;
    font-size: 2vh;
    &:focus {
        outline: none;
        /* box-shadow: 0 0 5px #ff0000; */
        box-shadow: 0 0 5px #cc9e75;

    }

    color: #ffff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    transition: box-shadow 0.3s ease;
`;

export const BtnClear = styled.button`
    background-color: #3c355b;
    color: #ffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    &:hover {
        box-shadow: 0 0 5px #3c355b;
    }
`;
