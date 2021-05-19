import React, { useRef } from 'react'
import { Image } from 'react-bootstrap'

/**
 * An Image toggler from color to b/w images. See About page.
 *
 * @params props from src/types/ImageToggleOnMouseOverProps.ts
 * @returns An image.
 */

const ImageToggleOnMouseOver = ({
	primaryImage,
	secondaryImage,
}: ImageToggleOnMouseOverProps) => {
	const imageRef = useRef<HTMLImageElement>(null)

	const imageStyle = {
		height: '150px',
	}

	console.log(imageRef)

	return (
		<Image
			alt={''}
			ref={imageRef}
			src={primaryImage}
			style={imageStyle}
			roundedCircle={true}
			onMouseOver={() => {
				if (imageRef.current !== null) {
					imageRef.current.src = secondaryImage
				}
			}}
			onMouseOut={() =>
				imageRef.current !== null ? (imageRef.current.src = primaryImage) : null
			}
		/>
	)
}

export default ImageToggleOnMouseOver
