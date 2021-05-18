import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CardBlogPost } from '../../../../components/organisms'
import { SectionHeader } from '../../../../components/molecules'
import { BlogStyle } from './Blog.style'
import axios from 'axios'

interface IPost {
	title: string
	img: string
	shortContent: string
	author: string
}

/**
 * A blog component that can be used inside any views.
 * @returns A Blog component.
 */
const Blog = () => {
	const [blog, setBlog] = useState<IPost[]>([])

	useEffect(() => {
		axios
			.get('http://localhost:3001/blog')
			.then((response) => setBlog(response.data))
	}, [])

	return (
		<BlogStyle>
			<SectionHeader
				description={`In hac habitasse platea dictumst. Pellentesque placerat rhoncus justo sed sollicitudin. 
                            Donec purus magna, maximus id magna eu, ullamcorper fermentum tortor. `}
				subTitle={'Quisque porttitor metus non'}
				title={'From the Blog'}
			/>
			<Row>
				{blog.length > 0 ? (
					blog.map((item) => (
						<Col xs={3}>
							<CardBlogPost
								title={item.title}
								image={item.img}
								excerpt={item.shortContent}
								author={item.author}
							/>
						</Col>
					))
				) : (
					<div>No record found.</div>
				)}
			</Row>
		</BlogStyle>
	)
}

export default Blog
