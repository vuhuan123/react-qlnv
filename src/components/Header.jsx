import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo/logo.jpg"
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";


function Header() {
    let location = useLocation();

    return (<>

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='d-flex align-items-center' href="/">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />

                    Quan Ly App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="me-auto" activeKey={location.pathname} >
                        <NavLink to="/" className="nav-link"> Home</NavLink>
                        <NavLink to="/user" className="nav-link"> Manage User</NavLink>

                    </Nav>
                    <Nav>
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
    );
}

export default Header;