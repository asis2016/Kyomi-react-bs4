import React, {FC} from "react";
import {FooterMenuStyleThreeBase} from "./FooterMenuStyleThree.style";
import {Col, Container, Row, Nav} from "react-bootstrap";

interface IProps {
    title: string;
    subTitle: string;
};

export const FooterMenuStyleThreeContent = [

    {
        id: 1,
        title: 'Sed sit amet',
        content: [
            {
                menuIitle: 'Nulla ac',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Donec maximus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Etiam laoreet',
                menuUrl: 'http://google.com'
            },
        ]
    },
    {
        id: 2,
        title: 'Nam lacinia',
        content: [
            {
                menuIitle: 'Nulla ac',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Phasellus placerat',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Ass non odio ',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
        ]
    },
    {
        id: 3,
        title: 'Etiam eget ante',
        content: [
            {
                menuIitle: 'In dapibus arcu',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Phasellus placerat',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Ass non odio ',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
        ]
    },

];

export const FooterMenuStyleThree: FC<IProps> = (props) => {
    return <FooterMenuStyleThreeBase
        style={{backgroundImage: 'url(' + require('../../assets/images/mountain.jpg') + ')'}}>
        <Container>


            <Row className="row-two">
                <Col xs={6} className="col-one">
                    <h5>Kyomi Everest Expedition</h5>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        beatae vitae dicta sunt.
                    </p>

                    <form className="form-inline">
                        <div className="form-group mr-2 mb-2">
                            <input type="text" className="form-control" placeholder="Sign up for Newsletter."/>
                        </div>
                        <button type="submit" className="btn btn-secondary-kyomi mb-2">Subscribe</button>
                    </form>
                </Col>

                {/* Col 4 */}
                {FooterMenuStyleThreeContent.map((item) =>
                    <Col>
                        <h5>{item.title}</h5>
                        <ul>
                            {item.content.map((i) =>
                                <a href={i.menuUrl}>
                                    <li>{i.menuIitle}</li>
                                </a>
                            )}
                        </ul>
                    </Col>
                )}
            </Row>

            <hr/>

            <Row className="row-three">
                <Col className={"text-right"}>
                    <p>Made with <i className="fas fa-heart"></i> in Germany.</p>
                </Col>
            </Row>

        </Container>
    </FooterMenuStyleThreeBase>
}