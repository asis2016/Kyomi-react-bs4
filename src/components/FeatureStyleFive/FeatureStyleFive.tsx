import React, {FC} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {FeatureStyleFiveBase} from "./FeatureStyleFive.style";


interface IProps {
    title: string;
    subTitle: string;
    caption: string;
}

export const FeatureStyleFiveContent = [
    {
        id: 1,
        title: 'Vivamus ut sapien mattis',
        urlText: 'Placerat interdum',
        img: 'f-2.jpg'
    },
    {
        id: 2,
        title: 'Nunc luctus lectus ornare',
        urlText: 'Cursus risus',
        img: 'f-1.jpg'
    },
    {
        id: 4,
        title: 'Etiam sodales magna facilisi',
        urlText: 'Interdum et',
        img: 'f-4.jpg'
    },
    {
        id: 3,
        title: 'In laoreet lorem fringilla',
        urlText: 'Interdum et',
        img: 'f-3.jpg'
    },
];

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