import React from 'react'
import { HomeGalleryStyle } from './HomeGallery.style'

/**
 * Component: Home Gallery. To display small gallery thumbnail in homepage gallery section.
 * @param {Object} props
 * */
const HomeGallery = ({
	className,
	children,
	tag,
	image,
	title,
}: HomeGalleryProps): JSX.Element => {
	return (
		<HomeGalleryStyle>
			<img src={image} alt={title} className='gallery-img' title={title} />
			<span className='badge badge-secondary-kyomi'>{tag}</span>
			{/* useless child? */}
			{children}
		</HomeGalleryStyle>
	)
}

export default HomeGallery
