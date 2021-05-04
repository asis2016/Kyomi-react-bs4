import React, {FC} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {GalleryStyleOneContent} from "../../../assets/content";
import {GalleryStyleTwoBase} from "./GalleryStyleTwo.style";
import {HomeGallery} from "../../atoms";

interface IProps {
    title: string;
    caption: string;
    subTitle: string;
}

const GalleryStyleTwo: FC<IProps> = (props) => {
    return (
        <GalleryStyleTwoBase>
            <Container>
                <Row className="pb-5">
                    <Col md={{span: 6, offset: 3}} className="text-center">
                        <p className="sub-title">{props.subTitle}</p>
                        <h1>{props.title}</h1>
                        <p className="pt-3 pb-3">{props.caption}</p>
                        <div>
                            <button type="button" className="btn btn-primary-kyomi mr-2">
                                Latest
                            </button>
                            <button type="button" className="btn btn-primary-kyomi mr-2">
                                Instagram
                            </button>
                            <button type="button" className="btn btn-primary-kyomi mr-2">
                                Blog
                            </button>
                            <button type="button" className="btn btn-primary-kyomi mr-2">
                                Travel
                            </button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="text-center">
                        {GalleryStyleOneContent.map((item) => (
                            <HomeGallery tag={item.tag} image={item.img} title={item.title}/>
                        ))}
                    </Col>
                </Row>
            </Container>
        </GalleryStyleTwoBase>
    );
};

export default GalleryStyleTwo;
