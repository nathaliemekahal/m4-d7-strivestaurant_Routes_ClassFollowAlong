import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import{ Link, withRouter } from 'react-router-dom'
const NavBar = (props) => {
  return (
    <div>
     {console.log('NAVBAR PROPS',props)}
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>
          {props.title} - Striving For Food
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
          <Link to="/Menu" className=
            {props.location.pathname==="/Menu"?"nav-link active":"nav-link"}>Menu</Link>
            <Link to="/Reservations" className=
            {props.location.pathname==="/Reservations"?"nav-link active":"nav-link"}>Reservation</Link>
             <Link to="/OurLocation" className=
            {props.location.pathname==="/OurLocation"?"nav-link active":"nav-link"}>OurLocation</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);
