import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Park from '../components/park.jsx'
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

// The <Marker /> component accepts a position prop that defines the location for the position on the map. 
// It can be either a raw object or a google.maps.LatLng() instance.
const mapStyles = {
  width: '200%',
  height: '55%',
  //opacity: '.5',
  borderRadius: '10px'
}
const mapStateToProps = state => ({
  parksList: state.park.parksList,
  toggle: state.park.toggle,
  showPark: state.park.showPark,
})


const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(actions.toggle()),
  fetchMarkers: () => dispatch(actions.fetchMarkers()),
  fetchParkInfo: (parkCode) => dispatch(actions.fetchParkInfo(parkCode)),
})

class MapContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.toggle();
    this.props.fetchMarkers();
  }

  render() {

    // create empty array for markers
    const markersArray = []
    //loop through state.parksList to get all relevant info for marker component

    for (let i = 0; i < this.props.parksList.length; i++) {
      markersArray.push(<Marker
        // Key so React doesn't complain
        key={this.props.parksList[i].code}
        // Code to map to the server
        code={this.props.parksList[i].code}
        // Name of the park
        name={this.props.parksList[i].name}
        
        id={i}
        // OnClick functionality for each Marker to get specific park datao
        // onClick triggers an action that renders park information in park component
        onClick={() => this.props.fetchParkInfo({ params: { code: this.props.parksList[i].code } })
        }
        // Position for lat and long to render on the map
        position={{
          lat: this.props.parksList[i].position.lat,
          lng: this.props.parksList[i].position.long,
        }
        }
      // give onClick to Marker
      // onClick triggers an action that renders park information in park component
      />)
    }

    //push each component into above array

    if (!this.props.toggle) {
      return (
        <h1>Loading..</h1>
      )
    } else {
      return (
        <div
          id="map-container"
          style={{ position: 'relative', width: '50%', height: '60vh' }}
        >
          <Map
            id="map"
            google={this.props.google}
            style={mapStyles}
            initialCenter={{
              lat: 37.0902,
              lng: -95.7129
            }}
            zoom={4}
            className = 'map'
          >
            {markersArray}
          </Map >
        </div>
      )
    }
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY
})(Connected) 
