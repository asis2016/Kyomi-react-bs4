import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FooterBase } from './Footer.style'
import { FooterData } from '../../../views/Home/data'

const Footer = (): JSX.Element => {
	return (
		<FooterBase>
			<Container>
				<Row className='row-two'>
					<Col xs={6} className='col-one'>
						<h5>Kyomi Everest Expedition</h5>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi beatae vitae dicta sunt.
						</p>

						<form className='form-inline'>
							<div className='form-group mr-2 mb-2'>
								<input
									type='text'
									className='form-control'
									placeholder='Sign up for Newsletter.'
								/>
							</div>
							<button type='submit' className='btn btn-secondary-kyomi mb-2'>
								Subscribe
							</button>
						</form>
					</Col>

					{/* Col 4 */}
					{FooterData.map((item, index) => (
						<Col key={index}>
							<h5>{item.title}</h5>
							<ul>
								{item.content.map((i, index) => (
									<a className='none' href={i.menuUrl} key={index}>
										<li>{i.menuIitle}</li>
									</a>
								))}
							</ul>
						</Col>
					))}
				</Row>

				<hr />

				<Row className='row-three'>
					<Col className={'text-right'}>
						<p>
							Made with <i className='fas fa-heart'></i> in Germany.
						</p>
					</Col>
				</Row>
			</Container>
		</FooterBase>
	)
}

export default Footer
