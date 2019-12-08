import React, {FC} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {FeatureStyleFiveBase} from "./FeatureStyleFive.style";
import {FeatureStyleFiveContent} from "../../assets/content";

interface IProps {
    title: string;
    subTitle: string;
    caption: string;
};

export const FeatureStyleFive: FC<IProps> = (props) => {
    return <FeatureStyleFiveBase>
        <Container>
            <Row className="row-one">
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <p className="sub-title">{props.subTitle}</p>
                    <h1>{props.title}</h1>
                    <p className="lead">{props.caption}</p>
                </Col>
            </Row>

            <Row className="row-two">
                {FeatureStyleFiveContent.map((item) => <Col className={item.id % 2 != 1 ? 'col-7' : 'col-5'}>
                        <Card className="mb-3">
                            <div className="card-body my-auto"
                                 style={{backgroundImage: 'url(' + require('../../assets/images/' + item.img) + ')'}}>

                                <div className="overlay"></div>
                                <div className="content">
                                    <h4>{item.title}</h4>
                                    <button className="btn btn-primary-kyomi">
                                        {item.urlText} <i className="fas fa-arrow-circle-right"></i>
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    </FeatureStyleFiveBase>
};