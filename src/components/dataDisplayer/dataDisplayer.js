import { Data, DataTittle, Line, StyledDisplayer } from "./dataDisplayerStyles";

function DataDisplayer() {
    return (
        <StyledDisplayer>
            <div>
                <DataTittle>Ip address</DataTittle>
                <Data>192.212.174.101</Data>
            </div>
            <Line/>
            <div style={{paddingLeft: '35px'}}>
                <DataTittle>Location</DataTittle>
                <Data>Brooklyn, NY</Data>
                <Data>10001</Data>
            </div>
            <Line/>
            <div style={{paddingLeft: '35px'}}>
                <DataTittle>Timezone</DataTittle>
                <Data>UTC -05:00</Data>
            </div>
            <Line/>
            <div style={{paddingLeft: '35px'}}>
                <DataTittle>Isp</DataTittle>
                <Data>SpaceX</Data>
                <Data>Starlink</Data>
            </div>
        </StyledDisplayer>
    )
}

export default DataDisplayer;