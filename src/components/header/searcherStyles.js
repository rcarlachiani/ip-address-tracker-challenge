import styled from "styled-components";

export const StyledSearcher = styled.div`
    text-align: center;
    color: white; 
    padding: 0px; 
`;

export const StyledH1 = styled.h1`
    margin: 0px; 
    padding-top: 30px;
    font-size: 32px;
    font-weight: 500;
`;

export const InputContainer = styled.div` 
    display: flex; 
    justify-content: center; 
    align-items: center;
    margin-top: 20px;
`;

export const Input = styled.input`
    width: 500px; 
    height: 60px; 
    padding-left: 30px;
    border: none;
    border-radius: 18px 0px 0px 18px;
    font-family: Rubik;
    font-weight: 400;
    font-size: 20px;
    ::placeholder {
        color: hsl(0, 0%, 59%);
`;

export const InputButton = styled.button`   
    background-color: black; 
    width: 62px; 
    height: 62px; 
    border: none;
    border-radius: 0px 18px 18px 0px;
`;