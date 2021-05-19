import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GalleryBase } from './Gallery.style'
import { HomeGallery } from '../../../../components/atoms'
import { SectionHeader } from '../../../../components/molecules'
import { GalleryData } from '../../data'

const Gallery = () => {
	return (
		<GalleryBase>
			<Container>
				<SectionHeader
					description={`Quisque nec diam ac erat varius luctus. Vivamus felis eros, accumsan 
        feugiat congue ut at leo. Curabitur accumsan placerat dapibus. Proin nec enim nec dui pretium
        at tellus non, vehicula egestas justo. `}
					subTitle={'Sed cursus metus eget orci iaculis'}
					title={'Instagram Gallery'}>
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
						{GalleryData.map((item, index) => (
							<HomeGallery
								tag={item.tag}
								image={item.img}
								title={item.title}
								key={index}
							/>
						))}
					</Col>
				</Row>
			</Container>
		</GalleryBase>
	)
}

export default Gallery
