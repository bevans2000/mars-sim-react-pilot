import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Mars Sim Pilot</h1>
      <div className="links">
        <Link to="/">Persons</Link>
        <Link to="/settlements">Settlements</Link>
      </div>
    </nav>
  ); 
}
 
export default Navbar;