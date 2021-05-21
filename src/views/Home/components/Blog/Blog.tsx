import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { CardBlogPost } from '../../../../components/organisms'
import { SectionHeader } from '../../../../components/molecules'
import { BlogStyle } from './Blog.style'
import axios from 'axios'
import { Spinner } from '../../../../components/atoms'

/**
 * A blog component that can be used inside any views.
 * @returns A Blog component.
 */
const Blog = () => {
	const [blog, setBlog] = useState<PostProps[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get('http://localhost:3001/blog').then((response) => {
			setIsLoading(false)
			setBlog(response.data)
		})
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
				{isLoading ? (
					<Spinner />
				) : blog.length > 0 ? (
					blog.map((item, index) => (
						<Col xs={3} key={index}>
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
