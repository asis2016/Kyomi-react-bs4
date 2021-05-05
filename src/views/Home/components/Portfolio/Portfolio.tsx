import React from 'react'
import {PortfolioStyle} from "./Portfolio.style";
import {Card, Carousel, Col, Container, Row} from "react-bootstrap";
import {SectionBlockquote, SectionHeader} from "../../../../components/molecules";
import {PortfolioData} from "../../data";

export const Portfolio = () => {
    return <PortfolioStyle>
        <Container fluid>
            <SectionHeader description={`Phasellus eget pellentesque ex, non dapibus lacus. Nunc non augue malesuada, 
                                               Suspendisse vel sollicitudin velit, sit amet mollis augue. Phasellus eget pellentesque ex.`}
                           subTitle={"Sed tempus magna eu metus semper."}
                           title={"Our Portfolio"}/>

            <Row className="row-two">
                <Col
                    style={{backgroundImage: "url(https://raw.githubusercontent.com/asis2016/kyomi-react-bootstrap4/master/src/assets/images/p-1.jpg)"}}
                    className="col-one">
                </Col>

                <Col className="d-flex justify-content-center align-items-center">
                    <Carousel>
                        {PortfolioData.map((item) =>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body>
                                        <img src={item.img} alt={item.name}/>
                                        <h4 className="pt-4">{item.name}</h4>
                                        <p>{item.content}</p>
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

            <SectionBlockquote href={"#"}
                               hrefTitle={"Suspendisse sodales"}
                               text={"\"Maecenas tempor tortor in nunc consequat, id fringilla elit convallis.\""}/>

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
    </PortfolioStyle>
}

export default Portfolio
