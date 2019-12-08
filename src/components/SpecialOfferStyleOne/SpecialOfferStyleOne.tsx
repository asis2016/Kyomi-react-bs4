import React, {FC} from "react";
import {SpecialOfferStyleOneBase} from "./SpecialOfferStyleOne.style";
import {Col, Container, Row} from "react-bootstrap";

interface IProps {
    title: string;
    href: string;
    faIcon: string;
}

export const SpecialOfferStyleOne: FC<IProps> = (props) => {
    return <SpecialOfferStyleOneBase>
        <Container>
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <a href={props.href}>
                        <i className={`fas fa-` + props.faIcon}></i> {props.title} <i className={`fas fa-` + props.faIcon}></i>
                    </a>
                </Col>
            </Row>
        </Container>
    </SpecialOfferStyleOneBase>
}