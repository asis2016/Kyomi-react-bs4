import React, {FC} from "react";
import {NavigationStyleThreeBase} from "./NavigationStyleThree.style";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

interface IProps {
    navbarBrand: string;
}

export const NavigationStyleThree: FC<IProps> = (props) => {
    return <NavigationStyleThreeBase>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <i className="fas fa-mountain"></i> {props.navbarBrand}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#link">Maecenas</Nav.Link>
                        <Nav.Link href="#link">Donec ac</Nav.Link>
                        <Nav.Link href="#link">Aenean iaculis</Nav.Link>
                        <NavDropdown title="Vivamus" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Pellentesque</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Aenean iaculis</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Morbi quis</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </NavigationStyleThreeBase>
};