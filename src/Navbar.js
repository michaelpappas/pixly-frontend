import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Images, PlusCircleDotted } from 'react-bootstrap-icons';
import './NavBar.css';
import { NavbarBrand } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className='NavBar shadow' bg='dark' variant='dark'>
      <NavbarBrand href="/" className='ms-3 mt-1'>Pixly</NavbarBrand>
      <Nav className='mx-auto'>
        <NavLink className='nav-link' to='/'><Images /></NavLink>
        <NavLink className='nav-link' to='/new'><PlusCircleDotted /></NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavBar;