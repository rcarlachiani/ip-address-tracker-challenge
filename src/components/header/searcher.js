import { ButtonImage, Form, Input, InputButton, InputContainer, StyledH1, StyledSearcher } from "./searcherStyles";

function Searcher({click, change, submit, dataEntered}) {
    return (
        <StyledSearcher>
            <StyledH1>IP Adress Tracker</StyledH1>
            <InputContainer>
                <Form onSubmit={submit}>
                    <Input onChange={change} value={dataEntered || ''} placeholder="Search for any IP address" id="entered-data"/>
                    <InputButton onClick={click}><ButtonImage src="/images/icon-arrow.svg" alt="arrow"/></InputButton>
                </Form>
            </InputContainer>
        </StyledSearcher>
    )
}

export default Searcher;