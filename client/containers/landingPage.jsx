import React from 'react';
//mport Connected from './containers/mapContainer.jsx';
import MapContainer from './mapContainer.jsx';
import Park from '../components/park.jsx';
// import Login from './components/login.jsx';
 import { connect } from 'react-redux';
import mapContainer from './mapContainer.jsx';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// (Optional) import stylesheet here.
// import '../stylesheets/styles.scss';

const mapStateToProps = state => ({
    loggedInUser: state.park.loggedInUser,
    showPark: state.park.showPark,
  });

class landingPage extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
    return (
        // <div id='main'>
        //   <h1>🌲  Parks Planner  🌲</h1>
        //         <MapContainer/>
        // </div>
      <section className="landing">
          < div className="dark-overlay">
              <div className="landing-inner">
                  <div className ="firstWrap">
                  <h1 className="x-large">Get Out There.</h1>
                    <p className="lead">
                    Use the map below to begin your next adventure
                  <MapContainer/>
                  </p>
                  </div>
                    <div clasName='parkWrap'>
                    < Park/>
                    </div>
              </div>
            
            </div>
      </section>
    )
  
}
}
export default connect(mapStateToProps, null)(landingPage)