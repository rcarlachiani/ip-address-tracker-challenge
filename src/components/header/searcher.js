import { ButtonImage, Form, Input, InputButton, InputContainer, StyledH1, StyledSearcher } from "./searcherStyles";
import { useContext } from "react";
import { Context } from "../../context/context"


function Searcher() {
    const context = useContext(Context)

    return (
        <StyledSearcher>
            <StyledH1>IP Adress Tracker</StyledH1>
            <InputContainer>
                <Form onSubmit={context.handleSubmit}>
                    <Input onChange={context.handleChange} value={context.enteredData || ''} placeholder="Search for any IP address" id="entered-data"/>
                    <InputButton onClick={context.handleClick}><ButtonImage src="/images/icon-arrow.svg" alt="arrow"/></InputButton>
                </Form>
            </InputContainer>
        </StyledSearcher>
    )
}

export default Searcher;