import React from 'react'
import {SectionHeaderStyle} from './SectionHeader.style'
import {Col, Row} from "react-bootstrap";

const SectionHeader = ({children, description, subTitle, title}: SectionHeaderProps): JSX.Element => {
    return <SectionHeaderStyle>
        <Row className="pb-5">
            <Col md={{span: 6, offset: 3}} className="text-center">
                <p className="sub-title">{subTitle}</p>
                <h1>{title}</h1>
                <p className="pt-3 pb-3">{description}</p>
                {children}
            </Col>
        </Row>
    </SectionHeaderStyle>
}

export default SectionHeader