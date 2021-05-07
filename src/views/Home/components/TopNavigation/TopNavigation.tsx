import React from 'react'
import {TopNavigationBase} from "./TopNavigation.style";
import {Col, Container, Nav, NavDropdown, Row} from "react-bootstrap";
import {IconSocial} from "../../../../components/atoms";
import {NavigationData} from "../../data";

const TopNavigation = () => {
    return <TopNavigationBase>
        <Container>
            <Row>
                <Col>
                    <Nav>
                        {NavigationData.map((item) =>
                            <Nav.Link>
                                <i className={`fas fa-` + item.one.faIcon}></i> {item.one.title}
                            </Nav.Link>
                        )}
                    </Nav>
                </Col>

                {/* Menu 2 */}
                <Col>
                    <Nav>
                        {/* Currency */}
                        {NavigationData.map((item) =>
                            <NavDropdown title="Currency" id="nav-dropdown">
                                {item.two.currency.map((i) =>
                                    <NavDropdown.Item key={i.id}>{i.title}</NavDropdown.Item>
                                )}
                            </NavDropdown>
                        )}

                        {/* Language */}
                        {NavigationData.map((item) =>
                            <NavDropdown title="Language" id="nav-dropdown">
                                {item.two.language.map((i) =>
                                    <NavDropdown.Item key={i.id}>{i.title}</NavDropdown.Item>
                                )}
                            </NavDropdown>
                        )}

                    </Nav>
                </Col>

                {/* Menu 4 */}
                <Col md={3} className="ml-auto col-four">
                    <Nav>
                        {NavigationData.map((item) => <>
                                {item.four.map((i) => <IconSocial faIcon={i.faIcon} title={'#'} href={'#'}/>
                                )}
                            </>
                        )}
                    </Nav>
                </Col>
            </Row>
        </Container>
    </TopNavigationBase>
}

export default TopNavigation