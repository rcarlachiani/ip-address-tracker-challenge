import React from 'react';
import { useContext } from "react";
import { Context } from "../../context/context"
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { icon } from "leaflet"

const ICON = icon({
  iconUrl: "images/icon-location.png",
  iconSize: [36, 45],
  iconAnchor:  [12, 41]
})

function MapView({props}) {
    const context = useContext(Context)
    
    function SetView({ coords }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
      
        return null;
    }

    return (
        <>
            {context.data?.latitude && context.data?.longitude ? 
                <MapContainer style={{width: '100vw', height: 'calc(100vh - 280px)', zIndex: '5'}} center={{lat: context.data.latitude, lng: context.data.longitude}} zoom={10} zoomControl={false} doubleClickZoom={false} scrollWheelZoom={false}>
                    <TileLayer 
                        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
                        attribution='© OpenStreetMap' 
                        zIndex={8}
                    />    
                <Marker icon={ICON} position={[context.data.latitude, context.data.longitude]} />
                <SetView coords={[context.data.latitude, context.data.longitude]}/>
                </MapContainer>
            : ''}
        </>
    )
}

export default MapView;