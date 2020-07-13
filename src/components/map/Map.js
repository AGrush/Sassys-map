import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import icon1 from '../map/icon1.svg';
import iconDead from '../map/iconDead.svg';

const center = { lat: 51.510228, lng: -0.132992 };
const API = 'AIzaSyD_INqSpFnl3D3qLAq-jomYcYkztdUbCk0'; 
const containerStyle = {
  width: '100%',
  height: '800px'
};

function MyComponent( places ) {

  let allTheMarkers = places.places.map(place => {
    return (
        <Marker
            key={place.id}
            position={{ lat: place.lat, lng: place.lng }} 
            icon={icon1}
            icon={place.alive ? icon1 : iconDead}     
        />
    );
  })

  let foundMarkers = places.foundPlaces.map(place => {
    return (
        <Marker
            key={place.id}
            position={{ lat: place.lat, lng: place.lng }} 
            icon={icon1}
            icon={place.alive ? icon1 : iconDead}     
        />
    );
  })

  return (
    <LoadScript
      googleMapsApiKey={API}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        
        {foundMarkers ? foundMarkers : allTheMarkers}

      </GoogleMap>

    </LoadScript>
  )
}
 
export default MyComponent