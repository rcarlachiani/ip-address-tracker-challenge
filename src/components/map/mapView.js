import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import getData from '../../services/getUserData';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapView() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(setData)
    },[])

    return (
        <div>
            {data?.latitude && data?.longitude ? 
                <MapContainer style={{width: '100vw', height: '100vh', zIndex: '5'}} center={{lat: data.latitude, lng: data.longitude}} zoom={5} scrollWheelZoom={false}>
                    <TileLayer 
                        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
                        attribution='© OpenStreetMap' 
                        zIndex={8}
                    />    
                <Marker position={[data.latitude, data.longitude]}>
                    <Popup>
                        You're here :)
                    </Popup>
                </Marker>
                </MapContainer>
            : ''}
        </div>
    )
}

export default MapView;