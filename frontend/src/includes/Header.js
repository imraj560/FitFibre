import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Row, Col, Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = ()=>{


    return (

        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                    <NavLink to={'/'}>
                            Fit Fibre
                    </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">
                        <NavLink to={'/'}>
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <NavLink to={'/login'}>
                                Login
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <NavLink to={'/register'}>
                                Register
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <NavLink to={'/profile'}>
                                Profile
                            </NavLink>
                        </Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default Header;