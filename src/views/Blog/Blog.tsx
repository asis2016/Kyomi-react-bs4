import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Spinner } from '../../components/atoms'
import { SectionHeader } from '../../components/molecules'
import {CardBlogPost, Footer, Highlight} from '../../components/organisms'
import { blog, category } from './data.json'

/**
 * A blog view.
 *
 * @returns A blog container.
 */
const Blog = (): JSX.Element => {
	const [categoryIndex, setCategoryIndex] = useState(0)

	//const [blog, setBlog] = useState<PostProps[]>([])
	const [isLoading, setIsloading] = useState(false)

	/* todo: netlify
	useEffect(() => {
		axios.get('/json-server/kyomi/blog.json').then((response) => {
			setBlog(response.data)
			setIsloading(false)
		})
		return () => console.log('cleanup')
	}, [])*/

	function categoryIndexHandler(id: number): any {
		setCategoryIndex(id)
	}

	return isLoading ? (
		<Spinner />
	) : (
		<>
			<Container style={{marginBottom: '170px', marginTop:'170px'}}>
				<SectionHeader
					description={
						'Nulla luctus libero a risus auctor efficitur. Suspendisse nec nulla in leo lacinia sodales. Morbi auctor nulla euismod turpis faucibus, eget dignissim odio pharetra.'
					}
					subTitle={'Welcome to the blog.'}
					title={'From the blog'}>
					<div>
						{/* todo: category */}
						{category.map((item, index) => (
							<button
								key={item.id}
								type='button'
								className='btn btn-primary-kyomi mr-2'
								onClick={() => categoryIndexHandler(index)}
							>
								{item.category}
							</button>
						))}
					</div>
				</SectionHeader>

				<Row>
					{blog &&
					blog.map((item, index) => (
						<Col className="col-lg-3 col-sm-12" key={index}>
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
			<Highlight/>
			<Footer/>
		</>
	)
}

export default Blog
