import React from 'react'
import CardBlogPostStyle from './CardBlogPost.style'
import { ButtonAuthor } from '../../atoms'

/**
 * A card for a blog post.
 *
 * @params Props from src/types/CardBlogPostProps
 * @returns JSX.Element
 */
const CardBlogPost = ({
	author,
	boxShadow,
	image,
	title,
	excerpt,
}: CardBlogPostProps): JSX.Element => {
	return (
		<CardBlogPostStyle>
			<div className='card mb-4 border-0'>
				<img className='card-img-top' alt={title} src={image} title={title} />
				<div className='card-body'>
					<h6 className='card-title'>{title}</h6>
					<p className='card-text'>{excerpt?.substr(0, 60)} ..</p>
					<ButtonAuthor authorName={author} href={'#'} />
				</div>
			</div>
		</CardBlogPostStyle>
	)
}

export default CardBlogPost
