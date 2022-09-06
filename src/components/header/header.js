import { StyledHeader } from "./headerStyles";
import Searcher from "./searcher";

function Header({click, change, submit, dataEntered}) {
    return (
        <StyledHeader>
            <Searcher click={click} change={change} submit={submit} dataEntered={dataEntered}/>
        </StyledHeader>
    )
}

export default Header;