
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import { Navbar, NavbarBrand, NavDropdown } from "react-bootstrap"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"


function Menu() {



    return (
        <>
        <Navbar bg="light" expand="lg">

            <NavbarBrand href="#home">React Bootstrap</NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav"/>
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to='/registro'>Registrar</Nav.Link>
                <Nav.Link as={Link} to="login"> Login</Nav.Link>
                <NavDropdown title='productos' id='basic-nav-dropdown'>
                    <NavDropdown.Item as={Link} to="productos/alta">Cargar Producto</NavDropdown.Item>
                    
                    
                </NavDropdown>

                </Nav>
            </NavbarCollapse>
        </Navbar>

        
        </>
    )

}
export default Menu




///Metodo de linkeado sin bootstrap

{/*    <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to='registro'>Registrar</Link></li>
                <li><Link to="login">Login</Link></li>

            </ul>
*/}
