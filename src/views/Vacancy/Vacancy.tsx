import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardInformation } from '../../components/organisms/'
import { VacancyBase } from './Vacancy.style'
import { data } from './data.json'
import axios from 'axios'
import { Spinner } from '../../components/atoms'

/**
 * A page for a vacancy.
 *
 * @returns JSX.Element
 */
const Vacancy = (): JSX.Element => {
	const [vacancy, setVacancy] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		axios.get('http://localhost:3001/jobs').then((response) => {
			setVacancy(response.data)
			setIsLoading(false)
		})
		return () => {
			console.log('cleanup code.')
		}
	}, [])

	return (
		<VacancyBase>
			{isLoading ? (
				<Spinner />
			) : (
				<Container className={'pt-4'}>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
							<h1 className='pt-4 pb-4'>Vacancy</h1>
							<div>
								{vacancy.map((item: any, index) => (
									<CardInformation
										key={index}
										location={item.location}
										title={item.title}
										status={item.status}
									>
										<div dangerouslySetInnerHTML={{ __html: item.content }} />
									</CardInformation>
								))}
							</div>
						</Col>
					</Row>
				</Container>
			)}
		</VacancyBase>
	)
}

export default Vacancy
