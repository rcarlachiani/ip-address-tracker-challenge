import styled from "styled-components";

export const StyledSearcher = styled.div`
    padding: 0px; 
    text-align: center;
    color: white;
`;

export const StyledH1 = styled.h1`
    margin: 0px; 
    padding-top: 30px;
    font-size: 32px;
    font-weight: 500;

    @media (max-width: 850px) {  
        margin-bottom: 20px; 
        font-size: 25px;
        }

    }
`;

export const InputContainer = styled.div` 
    display: flex; 
    justify-content: center; 
    align-items: center;
    margin-top: 20px;
`;

export const Form = styled.form` 
    display: flex; 
    align-items: center;
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
    cursor: pointer;
    
    :focus {
        outline: none
    }

    ::placeholder {
        color: hsl(0, 0%, 59%);
    }

    @media (max-width: 850px) {   
        width: auto;
        height: 55px;

        ::placeholder {
            font-size: 15px;
        }

    }
`;

export const InputButton = styled.button`   
    width: 62px; 
    height: 62px; 
    background-color: black; 
    border: none;
    border-radius: 0px 18px 18px 0px;
    cursor: pointer;

    @media (max-width: 850px) {   
        width: 57px;
        height: 57px;

    }
`;

export const ButtonImage = styled.img`   
    transition: transform .3s;

    :hover {
        transform: scale(1.5);
    }
`;
