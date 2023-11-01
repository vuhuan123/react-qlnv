import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo/logo.jpg"
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Header() {
    const { user, logout } = useContext(UserContext);
    let location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        toast.success("Logout succes")
        navigate("/")
    }
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

                    {(user && user.auth || window.location.pathname === '/') &&
                        <>

                            <Nav className="me-auto" activeKey={location.pathname} >
                                {user.auth === true}
                                <NavLink to="/" className="nav-link"> Home</NavLink>
                                <NavLink to="/user" className="nav-link"> Manage User</NavLink>

                            </Nav>
                            <Nav>
                                {user && user.email && <span className='nav-link'>Welcome {user.email}</span>}
                                <NavDropdown title="Setting" id="basic-nav-dropdown">
                                    {user && user.auth === true ? <NavLink onClick={handleLogout} className="nav-link"> Logout</NavLink> : <NavLink to="/login" className="nav-link"> Login</NavLink>}


                                </NavDropdown>
                            </Nav>
                        </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
    );
}

export default Header;