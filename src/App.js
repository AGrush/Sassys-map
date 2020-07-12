import React, { Component } from 'react';
import Map from './components/map/Map';
import Navbar from './components/Navbar';

class App extends Component {

  constructor(props) {
    super(props);

      this.state = {
        letters: '',
        newPlaces: '',
        places: [
          {
            name: "Platinum Lace",
            lat: 51.510228,
            lng: -0.132992,
            type: "alive",
            images: [
              {
                src: "/Images/PlatinumLace/PL1.jpg",
                rank: 1
              },
              {
                src: "/Images/PlatinumLace/PL2.jpg",
                rank: 2
              },
              {
                src: "/Images/PlatinumLace/PL3.jpg",
                rank: 3
              },
              {
                src: "/Images/PlatinumLace/PL4.jpg",
                rank: 4
              },
              {
                src: "/Images/PlatinumLace/PL5.jpg",
                rank: 5
              },
              {
                src: "/Images/PlatinumLace/PL6.jpg",
                rank: 6
              },
              {
                src: "/Images/PlatinumLace/PL7.jpg",
                rank: 7
              },
              {
                src: "/Images/PlatinumLace/PL8.jpg",
                rank: 8
              },
              {
                src: "/Images/PlatinumLace/PL9.jpg",
                rank: 9
              },
              {
                src: "/Images/PlatinumLace/PL10.jpg",
                rank: 10
              }
            ],
            id: 1
          },
          {
            name: "Diamonds and Strings Strip Club & Bar",
            lat: 51.655290,
            lng: -0.397278,
            type: "alive",
            id: 2
          },
          {
            name: "LA Confidential",
            lat: 51.512836,
            lng: -0.303959,
            type: "alive",
            id: 3
          },
          {
            name: "Secrets 1 Hammersmith",
            lat: 51.494696,
            lng: -0.231301,
            type: "alive",
            id: 4
          },
          {
            name: "Majingo's",
            lat: 51.513117,
            lng: -0.040147,
            type: "alive",
            id: 5
          },
          {
            name: "Club Flamingos",
            lat: 51.513728,
            lng: -0.070953,
            type: "alive",
            id: 6
          },
          {
            name: "Whites Gentlemens Club",
            lat: 51.514095,
            lng: -0.070550,
            type: "alive",
            id: 7
          },
          {
            name: "The Nags Head",
            lat: 51.516608,
            lng: -0.068439,
            type: "alive",
            id: 8
          },
          {
            name: "Metropolis",
            lat: 51.533238,
            lng: -0.054441,
            type: "alive",
            id: 9
          },
          {
            name: "Rainbow Sports Bar",
            lat: 51.524733,
            lng: -0.077087,
            type: "alive",
            id: 10
          },
          {
            name: "Browns Shoreditch",
            lat: 51.527332,
            lng: -0.077672,
            type: "alive",
            id: 11
          },
          {
            name: "23 Paul Street",
            lat: 51.523075,
            lng: -0.084543,
            type: "alive",
            id: 12
          },
          {
            name: "The Horns",
            lat: 51.526124,
            lng: -0.085056,
            type: "alive",
            id: 13
          },
          {
            name: "For Your Eyes Only",
            lat: 51.522894,
            lng: -0.087046,
            type: "alive",
            id: 14
          },
          {
            name: "The Griffin",
            lat: 51.521760,
            lng: -0.112273,
            type: "alive",
            id: 15
          },
          {
            name: "Secrets Holborn",
            lat: 51.518579,
            lng: -0.111687,
            type: "alive",
            id: 16
          },
          {
            name: "Secrets 6 Covent Garden",
            lat: 51.516527,
            lng: -0.120326,
            type: "alive",
            id: 17
          },
          {
            name: "The Red Rooms",
            lat: 51.516323,
            lng: -0.120034,
            type: "alive",
            id: 18
          },
          {
            name: "Secrets 5 Euston",
            lat: 51.528984,
            lng: -0.132356,
            type: "alive",
            id: 19
          },
          {
            name: "Spearmingt Rhino London",
            lat: 51.523268,
            lng: -0.136515,
            type: "alive",
            id: 20
          },
          {
            name: "Stringfellows Covent Garden",
            lat: 51.512266,
            lng: -0.126775,
            type: "alive",
            id: 21
          },
          {
            name: "SophistiCats Soho",
            lat: 51.512434,
            lng: -0.133553,
            type: "alive",
            id: 22
          },
          {
            name: "The Mayfair Club",
            lat: 51.507592,
            lng: -0.141621,
            type: "alive",
            id: 23
          },
          {
            name: "Gaslight Club",
            lat: 51.508129,
            lng: -0.136205,
            type: "alive",
            id: 24
          },
          {
            name: "SophistiCats",
            lat: 51.515370,
            lng: -0.148867,
            type: "alive",
            id: 25
          },
          {
            name: "Sunset Strip",
            lat: 51.513932,
            lng: -0.132581,
            type: "alive",
            id: 26
          },
          {
            name: "Vanity",
            lat: 51.514851,
            lng: -0.133534,
            type: "alive",
            id: 27
          },
          {
            name: "LarryFlynt's Hustler Club UK",
            lat: 51.373780,
            lng: -0.101195,
            type: "dead",
            id: 28
          }
        ]
      }

      this.searchState=this.searchState.bind(this)
  };

  // set the state of letters to match the Search.js input field
  searchState = (e) => {
    this.setState({letters: e}, this.handleSubmit)
  }

  // compare the filtered array with the original array in state and kick out the members of state.places that are missing in the filtered array
  intersection = () => {
    const filteredList = this.state.places.filter(club =>
      club.name.toUpperCase().includes(this.state.letters.toUpperCase())
    );

    const newPlacesList = filteredList.filter(x => this.state.places.includes(x));
    console.log(newPlacesList)

    // here, is where either the places array must be ammended and pasted into Map as prop, or a new array - newPlaces, must be ammended, and passed as props into map.. infinit loops
    // this.setState({ newPlaces: newPlacesList })

  }

  render() {

    return (
      <div>
        <Navbar
          childMethodToChangeState={this.searchState}
        />
        {this.intersection()}
        <Map
          markers={this.state.places}
        />
      </div>
    );
  }
}

export default App;
