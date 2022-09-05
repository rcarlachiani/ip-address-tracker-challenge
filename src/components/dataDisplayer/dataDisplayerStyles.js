import styled from "styled-components";

export const StyledDisplayer = styled.div`
    display: flex;
    align-items: top;
    width: 1050px;
    height: 110px;
    padding: 40px 35px 30px 35px;
    background-color: white;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    z-index: 10;
`;

export const DataTittle = styled.h2`
    color: hsl(0, 0%, 59%);
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 0px;
`;

export const Data = styled.p`
    color: black;
    font-size: 28px;
    font-weight: 500;
    margin: 0px
`;

export const Line = styled.div`
    width: 0.5px;
    height: 78px;
    align-self: center;
    margin-left: 70px;
    background-color: hsl(0, 0%, 59%);
`;