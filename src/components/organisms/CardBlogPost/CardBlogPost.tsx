import React from 'react'
import CardBlogPostStyle from './CardBlogPost.style'
import {ButtonAuthor} from "../../atoms";

const CardBlogPost = ({author, boxShadow, image, title, excerpt}: CardBlogPostProps): JSX.Element => {
    return <CardBlogPostStyle>
        <div className="card mb-4 box-shadow">
            <img className="card-img-top"
                 alt={title}
                 src={image}
                 title={title}/>
            <div className="card-body">
                <h6 className="card-title">
                    {title}
                </h6>
                <p className="card-text">
                    {excerpt.substring(0, 60)} ..
                </p>
                <ButtonAuthor authorName={author} href={'#'} />
            </div>
        </div>
    </CardBlogPostStyle>
}

export default CardBlogPost