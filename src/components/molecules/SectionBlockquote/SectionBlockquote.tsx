import React from "react";
import {Col, Row} from "react-bootstrap";
import {SectionBlockquoteStyle} from "./SectionBlockquote.style";

const SectionBlockquote = ({href, hrefTitle, text}: SectionBlockquoteProps): JSX.Element => {
    /**
     * The molecule for a blockquote. */
    return <SectionBlockquoteStyle>
        <Row>
            <Col className="d-flex justify-content-center align-items-center">
                <h4>{text}</h4>
                <a className="btn btn-primary-kyomi ml-3" href={href}>
                    <i className="fas fa-mountain"></i> {hrefTitle}
                </a>
            </Col>
        </Row>
    </SectionBlockquoteStyle>
}

export default SectionBlockquote