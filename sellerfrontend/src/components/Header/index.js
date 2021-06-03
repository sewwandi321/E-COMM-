import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { signout } from '../../actions';


const Header = (props) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
      dispatch(signout());
  }

  //for login users
  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span  className="nav-link" onClick={logout}>Signout</span>
          
        </li>


      </Nav>
    );

  }
  
  //for nonlogin users
  const renderNonLoggedInLinks = () =>{
    return (
      <Nav>
       
        <li className="nav-item">
          <NavLink to="signin" className="nav-link">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">Signup</NavLink>
        </li>
      </Nav>
    );
  }

  return (
    <Navbar collapseOnSelect fixed ="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>
       
        <Link to="/" className="navbar-brand">Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

           
          </Nav>
          {auth.authenticate ? renderLoggedInLinks(): renderNonLoggedInLinks()};

        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default Header