import React, {FC} from "react"
import {Card, Carousel, Col, Container, Image, Row} from "react-bootstrap";
import {PortfolioStyleOneContent} from "../../assets/content";
import {PortfolioStyleTwoBase} from "./PortfolioStyleTwo.style";
import {VideoTag} from "react-video-tag";

interface IProps {
    title: string;
    caption: string;
    subTitle: string;
};


export const PortfolioStyleTwoContent = [
    {
        id: 1,
        img: 'port-1.jpg',
        name: 'Jane Doe',
        content: 'Weit über den nebligen Bergen kalt In tiefe Kerker und alte Höhlen. Wir müssen vor Tagesanbruch weg, um unser längst vergessenes Gold zu finden.',
    },
    {
        id: 2,
        img: 'port-3.jpg',
        name: 'Natalia Sammy',
        content: 'Weit über den nebligen Bergen kalt In tiefe Kerker und alte Höhlen. Wir müssen vor Tagesanbruch weg, um unser längst vergessenes Gold zu finden.',
    },
    {
        id: 3,
        img: 'port-4.jpg',
        name: 'Nelly K. Austin',
        content: 'Weit über den nebligen Bergen kalt In tiefe Kerker und alte Höhlen. Wir müssen vor Tagesanbruch weg, um unser längst vergessenes Gold zu finden.',
    },
    {
        id: 4,
        img: 'port-2.jpg',
        name: 'John Rose',
        content: 'Weit über den nebligen Bergen kalt In tiefe Kerker und alte Höhlen. Wir müssen vor Tagesanbruch weg, um unser längst vergessenes Gold zu finden.',
    },
];

export const PortfolioStyleTwo: FC<IProps> = (props) => {
    return <PortfolioStyleTwoBase>
        <Container fluid>
            <Row className="pt-5">
                <Col md={{span: 6, offset: 3}} className="text-center">
                    <p className="sub-title">{props.subTitle}</p>
                    <h1>{props.title}</h1>
                    <p className="pt-3">{props.caption}</p>
                </Col>
            </Row>

            <Row className="row-two">
                <Col style={{backgroundImage: "url(" + require("../../assets/images/p-1.jpg") + ")"}}
                     className="col-one">

                </Col>

                <Col className="d-flex justify-content-center align-items-center">
                    <Carousel>
                        {PortfolioStyleTwoContent.map((item) =>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body>
                                        <img src={require("../../assets/images/" + item.img)} alt=""/>
                                        <h4 className="pt-4">{item.name}</h4>
                                        <p>
                                            {item.content}
                                        </p>
                                        <p>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </Col>
            </Row>

            <Row className="row-three">
                <Col className="d-flex justify-content-center align-items-center">
                    <h4>"Maecenas tempor tortor in nunc consequat, id fringilla elit convallis."</h4>
                    <button className="btn btn-primary-kyomi ml-3"><i className="fas fa-mountain"></i> Suspendisse
                        sodales
                    </button>
                </Col>
            </Row>

            <Row className="row-four">
                <Col className="col-one">
                    <h4>Aliquam non ligula ut massa imperdiet elementum eu at est.</h4>
                    <p>
                        Quisque nec diam ac erat varius luctus. Vivamus felis eros, accumsan at tellus non, vehicula
                        egestas justo. Cras molestie libero vel turpis feugiat congue ut at leo. Curabitur accumsan
                        placerat dapibus. Proin nec enim nec dui pretium fringilla eget nec mi. Donec tempus est at
                        lectus placerat, vitae elementum massa pulvinar. Duis semper ex leo,
                    </p>
                    <p>
                        Donec ac dolor non neque ullamcorper molestie. Mauris placerat felis non orci tincidunt auctor.
                        Curabitur orci velit, condimentum eu sodales at, aliquet non massa. Vestibulum tellus diam,
                        lacinia eget velit vitae, varius cursus dui. Sed sit amet porta justo. Orci varius natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vel leo vitae urna
                        commodo pretium. In laoreet eget risus laoreet luctus. Duis venenatis tellus eu mauris commodo
                        dapibus.
                    </p>

                    <button className="btn btn-primary-kyomi"><i className="fas fa-mountain"></i>
                        Suspendisse
                        sodales
                    </button>
                </Col>

                <Col className="col-two">
                    <iframe width="560" height="315"
                            src="https://www.youtube-nocookie.com/embed/ihmfkdEcDyk?controls=0&amp;start=60"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Col>
            </Row>
        </Container>
    </PortfolioStyleTwoBase>


}