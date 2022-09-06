import React from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/icon-location.png'),
  iconUrl: require('leaflet/dist/images/icon-location.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [38, 45],
});

function MapView({props}) {
    
    function SetView({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
      
        return null;
    }

    return (
        <>
            {props?.latitude && props?.longitude ? 
                <MapContainer style={{width: '100vw', height: '100vh', zIndex: '5'}} center={{lat: props.latitude, lng: props.longitude}} zoom={6} zoomControl={false} scrollWheelZoom={false}>
                    <TileLayer 
                        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
                        attribution='© OpenStreetMap' 
                        zIndex={8}
                    />    
                <Marker position={[props.latitude, props.longitude]} />
                <SetView coords={[props.latitude, props.longitude]}/>
                </MapContainer>
            : ''}
        </>
    )
}

export default MapView;