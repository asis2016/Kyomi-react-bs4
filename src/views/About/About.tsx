import React, { Fragment, useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import api from '../../api/contacts'
import { ImageToggleOnMouseOver } from '../../components/atoms'
import { SectionHeader } from '../../components/molecules'
import { AboutBase } from './About.style'

const AboutData = [
	{
		primaryImage: 'about-2.png',
		secondaryImage: 'about-2-bw.png',
		title: 'Jane Doe',
	},
]

const About = () => {
	// get contacts
	const getContacts = async () => {
		const response = await api.get('/contacts')
		return response.data
	}

	useEffect(() => {
		const getAllContacts = async () => {
			const allContacts = await getContacts()
		}
		getAllContacts()
	}, [])

	return (
		<AboutBase>
			<SectionHeader
				title='About'
				description='lorem ipsum'
				subTitle='Welcome to the Kyomi team.'
			/>

			<Container>
				<Row>
					<Col lg={4} className={'text-center'}>
						<ImageToggleOnMouseOver
							primaryImage='https://raw.githubusercontent.com/asis2016/kyomi-react-bootstrap4/main/src/assets/images/about-1.png'
							secondaryImage='https://raw.githubusercontent.com/asis2016/kyomi-react-bootstrap4/main/src/assets/images/about-2.png'
						/>
						<h2 className={'pt-2'}>Heading</h2>
						<p>
							Donec sed odio dui. Etiam porta sem malesuada magna mollis
							euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
							Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
							Praesent commodo cursus magna.
						</p>
					</Col>
				</Row>
			</Container>
		</AboutBase>
	)
}

export default About
