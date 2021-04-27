import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';
import styledMap from './GoogleMapStyles';

const mapStyles = {
    width: '100%',
    height: '50vh',
    position: 'relative !important'
};

const center = {
    lat: 38.957613,
    lng: -77.401370
}

const NewGoogleMapContainer = (props) => {
    return (
        <LoadScript googleMapsApiKey='AIzaSyAdmxCZoT-1A9Ia4vqyWyhq9v4RbR6B9ok'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={18}
                center={center}
                options={{styles: styledMap}}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    )
}   

export default React.memo(NewGoogleMapContainer);