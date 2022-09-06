import { Data, DataContainer , DataTittle, Line, StyledDisplayer } from "./dataDisplayerStyles";

function DataDisplayer ({props}) {
    return (
        <>
            { props? 
                <StyledDisplayer>
                    <DataContainer>
                        <DataTittle>Ip address</DataTittle>
                        <Data margin>{props.ip}</Data>
                    </DataContainer>
                    <Line/> 
                    <DataContainer padding>
                        <DataTittle>Location</DataTittle>
                        <Data margin>{props.city}</Data>
                    </DataContainer>
                    <Line/>
                    <DataContainer padding>
                        <DataTittle>Timezone</DataTittle>
                        <Data margin>{props.time_zone?.offset}</Data>
                    </DataContainer>
                    <Line/>
                    <DataContainer padding>
                        <DataTittle>Isp</DataTittle>
                        <Data>{props.isp}</Data>
                    </DataContainer>
                </StyledDisplayer>
            : ''}
        </>
    )
}

export default DataDisplayer;