import React from 'react'
import {SectionOfferBase} from "./SectionOffer.style";
import {Col, Container, Row} from "react-bootstrap";

const SectionOffer = ({href, title}:SectionOfferProps):JSX.Element => {
    return <SectionOfferBase>
        <Container>
            <Row>
                <Col md={{span: 6, offset: 3}} >
                    <a href={href}>
                        <i className={`fas fa-gifts`}></i> {title} <i className={`fas fa-gifts`}></i>
                    </a>
                </Col>
            </Row>
        </Container>
    </SectionOfferBase>
}

export default SectionOffer;