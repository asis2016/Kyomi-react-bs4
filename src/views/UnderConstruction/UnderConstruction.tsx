import React from 'react'
import {Col, Row, Container} from "react-bootstrap";
import {Footer} from "../../components/organisms";

const UnderConstruction = () => {
    return <>
        <Container>
        <Row className="pt-4">
            <Col style={{ height: '500px'}}>
                <h1>Under Construction.</h1>
            </Col>
        </Row>
    </Container>
    <Footer />
    </>
}

export default UnderConstruction