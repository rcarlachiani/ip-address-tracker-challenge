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
            {context.data.location?.lat && context.data.location?.lng ? 
                <MapContainer style={{width: '100vw', height: 'calc(100vh - 280px)', zIndex: '5'}} center={{lat: context.data.location.lat, lng: context.data.location.lng}} zoom={11} zoomControl={false} doubleClickZoom={false} scrollWheelZoom={false}>
                    <TileLayer 
                        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
                        attribution='© OpenStreetMap' 
                        zIndex={8}
                    />    
                <Marker icon={ICON} position={[context.data.location.lat, context.data.location.lng]} />
                <SetView coords={[context.data.location.lat, context.data.location.lng]}/>
                </MapContainer>
            : ''}
        </>
    )
}

export default MapView;