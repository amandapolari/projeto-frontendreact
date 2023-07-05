import styled from 'styled-components';

export const ContainerFilter = styled.div`
    @media (max-width: 768px) {
        height: 100%;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-around;
    gap: 2vh;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.5vh;
    }

    @media (max-width: 768px) {
        height: auto;
        flex-direction: column;
        max-height: ${({ isMobileMenuOpen }) =>
            isMobileMenuOpen ? '1000px' : '0'};
        overflow: hidden;
        transition: max-height 0.3s ease;
        background-color: #eee2df;
        gap: 0;
    }
`;

export const ContainerAllFilters = styled.div`
    @media (max-width: 768px) {
        margin-top: 15vh;
        padding: 2vh;
        display: block;
        position: fixed;
        top: -6vh;
        width: 100vw;
        left: -2vh;
    }
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
    @media (max-width: 768px) {
        font-size: 1.8vh;
        margin: 1vh;
    }

    @media (max-width: 480px) {
        margin: 1vh;
        font-size: 1.5vh;
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
    @media (max-width: 768px) {
        font-size: 1.8vh;
        margin: 1vh;
    }

    @media (max-width: 480px) {
        font-size: 1.5vh;
        margin: 1vh;
    }
`;

export const MobileMenuButton = styled.button`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
        position: fixed;
        top: 3.5vh;
        right: 12vh;
        z-index: 9999;
    }
`;

export const MenuIcon = styled.i`
    font-size: 3.5vh;
    @media (max-width: 480px) {
        margin-top: -0.2vh;
        font-size: 3vh;
    }
`;
