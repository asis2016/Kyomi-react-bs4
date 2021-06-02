import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Spinner } from '../../components/atoms'
import { SectionHeader } from '../../components/molecules'
import { CardBlogPost } from '../../components/organisms'
import { blog } from './data.json'

/**
 * A blog view.
 *
 * @returns A blog container.
 */
const Blog = (): JSX.Element => {
	const [categoryIndex, setCategoryIndex] = useState(0)

	const [blog, setBlog] = useState<PostProps[]>([])
	const [isLoading, setIsloading] = useState(true)

	useEffect(() => {
		axios.get('blog.json').then((response) => {
			setBlog(response.data)
			setIsloading(false)
		})
		return () => console.log('cleanup')
	}, [])

	function categoryIndexHandler(id: number): any {
		setCategoryIndex(id)
	}

	return isLoading ? (
		<Spinner />
	) : (
		<Container className='pt-5'>
			<SectionHeader
				description={
					'Nulla luctus libero a risus auctor efficitur. Suspendisse nec nulla in leo lacinia sodales. Morbi auctor nulla euismod turpis faucibus, eget dignissim odio pharetra.'
				}
				subTitle={'Welcome to the blog.'}
				title={'From the blog'}
			>
				<div>
					{blog.map((item, index) => (
						<button
							key={index}
							type='button'
							className='btn btn-primary-kyomi mr-2'
							onClick={() => categoryIndexHandler(index)}
						>
							A
						</button>
					))}
				</div>
			</SectionHeader>

			<Row>
				{blog &&
					blog.map((item, index) => (
						<Col lg={3} key={index}>
							<CardBlogPost
								author={item.author}
								excerpt={item.excerpt}
								image={item.image}
								title={item.title}
							/>
						</Col>
					))}
			</Row>
		</Container>
	)
}

export default Blog
