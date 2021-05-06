import React from 'react'
import {CardFeatureStyle} from "./CardFeature.style";
import {Card} from "react-bootstrap";

const CardFeature = ({id, href, hrefTitle, title, image}: CardFeatureProps): JSX.Element => {
    return <CardFeatureStyle className={id % 2 != 1 ? 'col-7' : 'col-5'}>
        <Card className="mb-3">
            <div className="card-body my-auto"
                 style={{backgroundImage: 'url(' + image + ')'}}>
                <div className="overlay"></div>
                <div className="content">
                    <h4>{title}</h4>
                    <a className="btn btn-primary-kyomi"
                       href={href}>
                        {hrefTitle} <i className="fas fa-arrow-circle-right"></i>
                    </a>
                </div>
            </div>
        </Card>
    </CardFeatureStyle>
}

export default CardFeature