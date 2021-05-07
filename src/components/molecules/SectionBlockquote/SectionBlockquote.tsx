import React from "react";
import {Col, Row} from "react-bootstrap";
import {SectionBlockquoteStyle} from "./SectionBlockquote.style";
import ButtonMain from "../../atoms/ButtonMain";

const SectionBlockquote = ({href, hrefTitle, text}: SectionBlockquoteProps): JSX.Element => {
    /**
     * The molecule for a blockquote. */
    return <SectionBlockquoteStyle>
        <Row>
            <Col className="d-flex justify-content-center align-items-center">
                <h4 className="mt-3 pr-4">{text}</h4>
                <ButtonMain faIcon={"fa-mountain"} href={"#"} title={"Visit Nepal"}/>
            </Col>
        </Row>
    </SectionBlockquoteStyle>
}

export default SectionBlockquote