import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import ShipmentDetails from './Screens/ShipmentDetails.js';

import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CurrentShipments from './Screens/CurrentShipments.js';
import CurrentCarriers from './Screens/CurrentCarriers.js';
import {LinkContainer} from 'react-router-bootstrap'
import CarrierDetails from './Screens/CarrierDetails';
import CurrentLocations from './Screens/CurrentLocations';
import HomeScreen from './Screens/HomeScreen';


function App() {
  return (

   <Router>
   <Header/>
    <main >
     
       <Switch>
       <Route path='/home' component={HomeScreen} exact/>
       <Route path='/orders' component={CurrentShipments} exact/>
       <Route path='/shipment/:id' component={ShipmentDetails} />
       <Route path='/carriers' component={CurrentCarriers} exact/>
       <Route path='/carrier/:name' component={CarrierDetails} />
       <Route path='/locations' component={CurrentLocations} exact/>
       
       

       </Switch>
      

    </main>
    <Footer/>
</Router>
  
  );
}

export default App;
