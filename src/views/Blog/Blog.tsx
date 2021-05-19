import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SectionHeader } from '../../components/molecules'
import { CardBlogPost } from '../../components/organisms'
import { blog } from './data.json'

const Blog = (): JSX.Element => {
	const [categoryIndex, setCategoryIndex] = useState(0)

	function categoryIndexHandler(id: number): any {
		setCategoryIndex(id)
	}

	return (
		<Container>
			<SectionHeader
				description={
					'Nulla luctus libero a risus auctor efficitur. Suspendisse nec nulla in leo lacinia sodales. Morbi auctor nulla euismod turpis faucibus, eget dignissim odio pharetra.'
				}
				subTitle={'Welcome to the blog.'}
				title={'From the blog'}>
				<div>
					{blog.map((item, index) => (
						<button
							type='button'
							className='btn btn-primary-kyomi mr-2'
							onClick={() => categoryIndexHandler(index)}>
							{item.category}
						</button>
					))}
				</div>
			</SectionHeader>

			<Row>
				<Col lg={3}>
					<CardBlogPost author={'a'} excerpt={'a'} image={'a'} title={'a'} />
				</Col>
			</Row>
		</Container>
	)
}
export default Blog
