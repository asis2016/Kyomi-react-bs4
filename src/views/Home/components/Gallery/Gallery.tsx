import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GalleryBase } from './Gallery.style'
import { HomeGallery, Spinner } from '../../../../components/atoms'
import { SectionHeader } from '../../../../components/molecules'
import {gallery} from './data.json'
import axios from 'axios'

/**
 * A gallery section for a homepage.
 *
 * @returns A JSX.Element
 */
const Gallery = (): JSX.Element => {
	//const [gallery, setGallery] = useState<GalleryProps[]>([])
	const [isLoading, setIsLoading] = useState(false)

	/* todo: netlify
	useEffect(() => {
		axios.get('/json-server/kyomi/gallery.json').then((response) => {
			setGallery(response.data)
			setIsLoading(false)
		})
		return () => console.log('cleanup')
	}, [])*/

	return (
		<GalleryBase>
			<Container>
				<SectionHeader
					description={`Quisque nec diam ac erat varius luctus. Vivamus felis eros, accumsan 
        feugiat congue ut at leo. Curabitur accumsan placerat dapibus. Proin nec enim nec dui pretium
        at tellus non, vehicula egestas justo. `}
					subTitle={'Sed cursus metus eget orci iaculis'}
					title={'Instagram Gallery'}
				>
					<div>
						<button type='button' className='btn btn-primary-kyomi mr-2'>
							Latest
						</button>
						<button type='button' className='btn btn-primary-kyomi mr-2'>
							Instagram
						</button>
						<button type='button' className='btn btn-primary-kyomi mr-2'>
							Blog
						</button>
						<button type='button' className='btn btn-primary-kyomi mr-2'>
							Travel
						</button>
					</div>
				</SectionHeader>
				<Row>
					<Col md={{ span: 10, offset: 1 }} className='text-center'>
						{isLoading ? (
							<Spinner />
						) : gallery && gallery.length === 0 ? (
							'No record found'
						) : (
							gallery.map((item, index) => (
								<HomeGallery
									key={index}
									tag={item.tag}
									image={item.image}
									title={item.title}
								/>
							))
						)}
					</Col>
				</Row>
			</Container>
		</GalleryBase>
	)
}

export default Gallery
