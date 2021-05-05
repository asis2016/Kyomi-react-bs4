import React from 'react'
import {ButtonAuthorStyle} from "./ButtonAuthor.style";

const ButtonAuthor = ({authorName, href}: ButtonAuthorProps): JSX.Element => {
    /**
     *  Clickable link (button) for an author. */
    return <ButtonAuthorStyle>
        <a href={href}>
            <i className="fas fa-pen-square"></i> {authorName}
        </a>
    </ButtonAuthorStyle>
}

export default ButtonAuthor