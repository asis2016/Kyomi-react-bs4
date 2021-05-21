import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardInformation } from '../../components/organisms/'
import { VacancyBase } from './Vacancy.style'
import { data } from './data.json'

/**
 * A page for a vacancy.
 *
 * @returns JSX.Element
 */
const Vacancy = (): JSX.Element => {
	return (
		<VacancyBase>
			<Container className={'pt-4'}>
				<Row>
					<Col md={{ span: 8, offset: 2 }}>
						<h1>Vacancy</h1>
						<div>
							{data.map((item: any, index) => (
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
		</VacancyBase>
	)
}

export default Vacancy
