import { Input, InputButton, InputContainer, StyledH1, StyledSearcher } from "./searcherStyles";

function Searcher() {
    return (
        <StyledSearcher>
            <StyledH1>IP Adress Tracker</StyledH1>
            <InputContainer>
                <Input placeholder="Search for any IP address or domain"/>
                <InputButton><img src="/images/icon-arrow.svg" alt="arrow"></img></InputButton>
            </InputContainer>
        </StyledSearcher>
    )
}

export default Searcher;