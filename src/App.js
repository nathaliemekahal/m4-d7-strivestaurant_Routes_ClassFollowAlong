import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from './components/Menu'
import Reservations from"./components/Reservations"
import ReservationForm from "./components/ReservationForm"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DishDetail from './components/DishDetail'


class App extends Component {
  render() {
    return (
      <>
      <Router>
        <NavBar title="Strivestaurant" />
        <Route path="/" exact component={Home}/>
        <Route path="/Menu" exact component={Menu}/>
        <Route path="/Reservations" exact component={Reservations}/>
        <Route path="/details/:id" exact component={DishDetail}/>
        {/* <Route path="/Reservations" exact component={ReservationForm}/>
           */}
      </Router>
        
      </>
    );
  }
}
// to passs some props :
{/* <Route path="/" exact render={()=><Home title='test'/>}/> */}
       

//without props:
{/* <Route path="/" exact component={Home}/> 
we have to export the components with withRouter method to receive the additional props*/
}


export default App;