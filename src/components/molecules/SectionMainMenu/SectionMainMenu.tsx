import React from 'react'
import {SectionMainMenuStyle} from "./SectionMainMenu.style";
import {Nav, NavDropdown} from "react-bootstrap";

const SectionMainMenu = () => {
    return <SectionMainMenuStyle className="ml-auto">
        <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Shop</Nav.Link>
            <Nav.Link href="#">Jobs</Nav.Link>
            <NavDropdown title="Who are we" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Contact us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">About us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </SectionMainMenuStyle>
}

export default SectionMainMenu