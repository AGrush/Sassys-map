import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { 
    withScriptjs, 
    withGoogleMap, 
    GoogleMap,
    Marker, 
} from 'react-google-maps';

import icon1 from '../map/icon1.svg';
import iconDead from '../map/iconDead.svg';

const API = 'AIzaSyD_INqSpFnl3D3qLAq-jomYcYkztdUbCk0';

const MapWithMarkers = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API}&callbak=initMap`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `800px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
)((props) =>
        <GoogleMap
            center={{ lat: 51.510228, lng: -0.132992 }}
            zoom={10}
            defaultOptions={{
                styles: mapStyles
            }}
        >
            {props.markers.map(place => {
                return (
                    <MarkerWithSearch
                        key={place.id}
                        position={{ lat: place.lat, lng: place.lng }} 
                        content={place.name} 
                        icon={place.type}                  
                    />
                );
            })}
        </GoogleMap>
);


class MarkerWithSearch extends Component {

    constructor() {
        super();
        this.state = {     
            isOpen: false
        }
        this.onToggleOpen = this.onToggleOpen.bind(this);
    }

    onToggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        
        return (
            <Marker
                id={this.props.id}
                position={this.props.position}
                onClick={this.onToggleOpen}
                icon={ this.props.icon === "alive" ? 
                ({
                    url: icon1,
                    scaledSize: new window.google.maps.Size(45, 45)
                }) :
                ({
                    url: iconDead,
                    scaledSize: new window.google.maps.Size(45, 45)
                })}
                >
            </Marker>
        )
    }
}

const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }]
  }
]


export default MapWithMarkers;