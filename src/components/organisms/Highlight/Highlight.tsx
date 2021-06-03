import React from 'react'
import {HighlightBase} from './Highlight.style'
import {Col, Row, Container} from "react-bootstrap";
import phoneSVG from '../../../assets/images/phone.svg'
import {ButtonMain} from "../../atoms";

const Highlight = (): JSX.Element => {
    return <HighlightBase>
        <Container>
            <Row>
                <Col md={8}>
                    <div className="intro">
                        <h2>
                            Visit Himalayas 2021
                        </h2>
                        <p>
                            "Experience the Unforgetable Visit Ever". Lorem ipsum Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>

                        <ButtonMain
                            faIcon={'fa-map-marked-alt'}
                            href={'#'}
                            title={'Start Exploring'}
                        />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="d-none d-md-block phone-mockup">
                        <img className="device" src={phoneSVG} />
                        <div className="screen">

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </HighlightBase>
}

export default Highlight