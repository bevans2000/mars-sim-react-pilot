import { Link } from "react-router-dom";
import {Navbar,Nav,NavItem } from 'react-bootstrap';

const SimNavBar = () => {
  return (
    <Navbar className="ml-auto">
      <Navbar.Brand id="mars-nav-brand" >Mars Sim Pilot</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavItem>   <Link className="unit-link" to="/persons">Persons</Link> </NavItem> 
          <NavItem>   <Link className="unit-link"   to="/settlements">Settlements</Link> </NavItem> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ); 
}
 
export default SimNavBar;