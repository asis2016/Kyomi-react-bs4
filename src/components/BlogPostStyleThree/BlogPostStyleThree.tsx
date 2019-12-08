import React, {FC} from "react";
import {BlogPostStyleThreeBase} from "./BlogPostStyleThree.style";
import {Col, Container, Row} from "react-bootstrap";
import {BlogPostStyleThreeContent} from "../../assets/content";

interface IProps {
    title: string;
    caption: string;
    subTitle: string;
};

export const BlogPostStyleThree: FC<IProps> = (props) => {
    return <BlogPostStyleThreeBase>
        <Container>

            <Row className="pb-5">
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <p className="sub-title">{props.subTitle}</p>
                    <h1>{props.title}</h1>
                    <p className="pt-3 pb-3">{props.caption}</p>
                </Col>
            </Row>

            <Row>
                {BlogPostStyleThreeContent.map((item) =>
                    <Col xs={3}>
                        <div className="card mb-4 box-shadow">
                            <img className="card-img-top"
                                 alt=""
                                 src={require("../../assets/images/" + item.img)}
                            />
                            <div className="card-body">
                                <h6 className="card-title">{item.title}</h6>
                                <p className="card-text">{item.shortContent.substring(0, 60)} ..</p>
                                <h6><i className="fas fa-pen-square"></i> {item.author}</h6>
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    </BlogPostStyleThreeBase>
};