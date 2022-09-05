import { useState } from "react";
import getData from "../../services/getUserData";
import { Input, InputButton, InputContainer, StyledH1, StyledSearcher } from "./searcherStyles";

function Searcher() {
    const [enteredData, setEnteredData] = useState('')

    const handleChange = event => {
        setEnteredData(event.target.value);
      };
    
    const handleClick = event => {
        event.preventDefault()
        setEnteredData(event.target.value)
        getData(enteredData)
    };

    return (
        <StyledSearcher>
            <StyledH1>IP Adress Tracker</StyledH1>
            <InputContainer>
                <form style={{display: 'flex', alignItems: 'center'}}>
                    <Input onChange={handleChange} value={enteredData} placeholder="Search for any IP address or domain" id="entered-data"/>
                    <InputButton onClick={handleClick}><img src="/images/icon-arrow.svg" alt="arrow"></img></InputButton>
                </form>
            </InputContainer>
        </StyledSearcher>
    )
}

export default Searcher;