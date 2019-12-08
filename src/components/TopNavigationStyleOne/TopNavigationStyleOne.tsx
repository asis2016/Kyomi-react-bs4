import React, {FC} from "react";
import {TopNavigationStyleOneBase} from "./TopNavigationStyleOne.style";
import {Col, Container, Nav, NavDropdown, Row} from "react-bootstrap";
import {topNavigationStyleOneContent} from "../../assets/content";


interface IProps {
}

export const TopNavigationStyleOne: FC<IProps> = (props) => {
    return <TopNavigationStyleOneBase>
        <Container>
            <Row>
                <Col>
                    <Nav>
                        {topNavigationStyleOneContent.map((item) =>
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
                        {topNavigationStyleOneContent.map((item) =>
                            <NavDropdown title="Currency" id="nav-dropdown">
                                {item.two.currency.map((i) =>
                                    <NavDropdown.Item key={i.id}>{i.title}</NavDropdown.Item>
                                )}
                            </NavDropdown>
                        )}

                        {/* Language */}
                        {topNavigationStyleOneContent.map((item) =>
                            <NavDropdown title="Language" id="nav-dropdown">
                                {item.two.language.map((i) =>
                                    <NavDropdown.Item key={i.id}>{i.title}</NavDropdown.Item>
                                )}
                            </NavDropdown>
                        )}

                        {/* Other */}
                        {topNavigationStyleOneContent.map((item) =>

                            <NavDropdown title="Lorem Ipsum" id="nav-dropdown">
                                {item.two.other.map((i) =>
                                    <NavDropdown.Item key={i.id}>{i.title}</NavDropdown.Item>
                                )}
                            </NavDropdown>
                        )}
                    </Nav>
                </Col>

                {/* Menu 4 */}
                <Col md={3} className="ml-auto col-four">
                    <Nav>
                        {topNavigationStyleOneContent.map((item) => <>
                                {item.four.map((i) =>
                                    <Nav.Link href={i.url} key={i.id}>
                                        <i className={`fab fa-` + i.faIcon}></i>
                                    </Nav.Link>
                                )}
                            </>
                        )}
                    </Nav>
                </Col>
            </Row>
        </Container>
    </TopNavigationStyleOneBase>
};