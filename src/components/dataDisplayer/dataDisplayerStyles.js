import styled from "styled-components";

export const StyledDisplayer = styled.div`
    display: flex;
    align-items: top;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1050px;
    height: 110px;
    padding: 40px 35px 30px 35px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    z-index: 10;

    @media (max-width: 1100px) {
        width: auto;
      }

    @media (max-width: 850px) {
        flex-direction: column;
        justify-content: center; 
        padding: 30px 30px 30px 30px;   
        width: auto;
        min-width: 255px;
        height: 220px;
        top: 160px;
      }
`;

export const DataContainer = styled.div`
    padding-left: ${props => props.padding ? '35px' : '0px'};

    @media (max-width: 850px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 0px;
      }
`;

export const DataTittle = styled.h2`
    margin-top: 0px;
    color: hsl(0, 0%, 59%);
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;

    @media (max-width: 1100px) {
        font-size: 10px;
        margin: 0px 0px 5px 0px;
      }
`;

export const Data = styled.p`
    margin: 0px;
    color: black;
    font-size: 28px;
    font-weight: 500;

    @media (max-width: 850px) {
        margin: ${props => props.margin ? '0px 0px 20px 0px' : '0px'};
        font-size: 20px; 
      }
`;

export const Line = styled.div`
    width: 0.5px;
    height: 78px;
    align-self: center;
    margin-left: 70px;
    background-color: hsl(0, 0%, 59%);

    @media (max-width: 850px) {
        display: none;
      }
`;