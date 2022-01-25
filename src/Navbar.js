import { Link } from "react-router-dom";
import {Navbar,Nav,NavItem, Container } from 'react-bootstrap';

const SimNavBar = () => {
  return (
    <Navbar className="mars-navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" id="mars-nav-brand" >Mars Sim Pilot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavItem>   <Link className="unit-link" to="/persons">Persons</Link> </NavItem> 
            <NavItem>   <Link className="unit-link"   to="/settlements">Settlements</Link> </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ); 
}
 
export default SimNavBar;