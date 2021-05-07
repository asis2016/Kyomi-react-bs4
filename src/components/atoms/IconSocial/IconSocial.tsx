import React from "react";

const IconSocial = ({faIcon, href, title}: IconSocialProps): JSX.Element => {
    return <a href={href} className="nav-link" title={title}>
        <i className={`fab fa-` + faIcon}></i>
    </a>;
};

export default IconSocial;
