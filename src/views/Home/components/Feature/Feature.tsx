import React from 'react'
import { FeatureStyle } from './Feature.style'
import { SectionHeader } from '../../../../components/molecules'
import { CardFeature } from '../../../../components/organisms'
import { Container, Row } from 'react-bootstrap'
import { FeatureData } from '../../data'

const Feature = () => {
	return (
		<FeatureStyle>
			<Container>
				<SectionHeader
					description={
						'Nulla luctus libero a risus auctor efficitur. Suspendisse nec nulla in leo lacinia sodales. Morbi auctor nulla euismod turpis faucibus, eget dignissim odio pharetra.'
					}
					subTitle={'vitae maximus nulla'}
					title={'Everest Story 2019'}
				/>
				<Row className='row-two'>
					{FeatureData.map((item) => (
						<CardFeature
							id={item.id}
							href={item.href}
							hrefTitle={item.hrefTitle}
							title={item.title}
							image={item.img}
						/>
					))}
				</Row>
			</Container>
		</FeatureStyle>
	)
}

export default Feature
