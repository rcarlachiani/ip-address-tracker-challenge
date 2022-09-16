import { Data, DataContainer , DataTittle, Line, StyledDisplayer } from "./dataDisplayerStyles";
import { useContext } from "react";
import { Context } from "../../context/context"


function DataDisplayer () {
    const context = useContext(Context)

    return (
        <>
            { context? 
                <StyledDisplayer>
                    <DataContainer>
                        <DataTittle>Ip address</DataTittle>
                        <Data margin>{context.data.ip}</Data>
                    </DataContainer>
                    <Line/> 
                    <DataContainer padding>
                        <DataTittle>Location</DataTittle>
                        <Data margin>{context.data.location?.city}</Data>
                        <Data margin>{context.data.location?.country}</Data>
                    </DataContainer>
                    <Line/>
                    <DataContainer padding>
                        <DataTittle>Timezone</DataTittle>
                        <Data margin>{context.data.location?.timezone}</Data>
                    </DataContainer>
                    <Line/>
                    <DataContainer padding>
                        <DataTittle>Isp</DataTittle>
                        <Data>{context.data.isp}</Data>
                    </DataContainer>
                </StyledDisplayer>
            : ''}
        </>
    )
}

export default DataDisplayer;