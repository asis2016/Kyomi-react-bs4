import React from 'react'

const HomeGallery = ({className, children, tag, image, title}: HomeGalleryProps): JSX.Element => {
    return <div className="p-2 gallery">
        <img src={image}
             alt={title}
             className="gallery-img"/>
        <span className="badge badge-secondary-kyomi">
            {tag}
        </span>
        {/* useless child? */}
        {children}
    </div>
}

export default HomeGallery