import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './GoogleMapContainer.css';
import styles from './GoogleMapStyles';

const mapStyles = {
    width: '100%',
    height: '50vh',
    position: 'relative !important'
};

function GoogleMapContainer(props){
    return (
        <Map
            className="GoogleMapContainer"
            google={props.google}
            zoom={15}
            style={mapStyles}
            styles={styles}
            initialCenter={{
                lat: 38.957613,
                lng: -77.401370
            }}
            options={{ gestureHandling: 'greeedy' }}
        >
            <Marker position={{ lat: 38.957613, lng: -77.401370 }} name={"Here"}>
                <InfoWindow position={{ lat: 38.957613, lng: -77.401370 }} visible={true}>
                    <div>Charred Foods</div>
                </InfoWindow>
            </Marker>
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAdmxCZoT-1A9Ia4vqyWyhq9v4RbR6B9ok'
})(GoogleMapContainer);