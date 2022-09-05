import { useEffect, useState } from "react";
import getData from "../../services/getUserData";
import { Data, DataTittle, Line, StyledDisplayer } from "./dataDisplayerStyles";

function DataDisplayer(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(setData)
    },[])

    return (
        <StyledDisplayer>
            <div>
                <DataTittle>Ip address</DataTittle>
                <Data id="ip-address">{data?.ip}</Data>
            </div>
            <Line/> 
            <div style={{paddingLeft: '35px'}}>
                <DataTittle>Location</DataTittle>
                <Data id="location">{data?.city}</Data>
            </div>
            <Line/>
            <div style={{paddingLeft: '35px'}}>
                <DataTittle>Timezone</DataTittle>
                <Data id="timezone">{data?.time_zone?.offset}</Data>
            </div>
            <Line/>
            <div style={{paddingLeft: '35px'}}>
                <DataTittle>Isp</DataTittle>
                <Data id="isp">{data?.isp}</Data>
            </div>
        </StyledDisplayer>
    )
}

export default DataDisplayer;