import React from 'react'
import { TopNavigationBase } from './TopNavigation.style'
import { Col, Container, Nav, NavDropdown, Row } from 'react-bootstrap'
import { NavigationData } from '../../../../views/Home/data'
import { IconSocial } from '../../../../components/atoms'

const TopNavigation = () => {
	return (
		<TopNavigationBase>
			<Container>
				<Row>
					<Col>
						<Nav>
							{NavigationData.map((item, index) => (
								<Nav.Link key={index}>
									<i className={`fas fa-` + item.one.faIcon}></i>{' '}
									{item.one.title}
								</Nav.Link>
							))}
						</Nav>
					</Col>

					{/* Menu 2 */}
					<Col>
						<Nav>
							{/* Currency */}
							{NavigationData.map((item, index) => (
								<NavDropdown title='Currency' id='nav-dropdown' key={index}>
									{item.two.currency.map((i) => (
										<NavDropdown.Item key={i.id}>{i.title}</NavDropdown.Item>
									))}
								</NavDropdown>
							))}

							{/* Language */}
							{NavigationData.map((item, index) => (
								<NavDropdown title='Language' id='nav-dropdown' key={index}>
									{item.two.language.map((i) => (
										<NavDropdown.Item key={i.id}>{i.title}</NavDropdown.Item>
									))}
								</NavDropdown>
							))}
						</Nav>
					</Col>

					{/* Menu 4 */}
					<Col md={3} className='ml-auto col-four'>
						<Nav>
							{NavigationData.map((item) => (
								<>
									{item.four.map((i, index) => (
										<IconSocial
											key={index}
											faIcon={i.faIcon}
											title={'#'}
											href={'#'}
										/>
									))}
								</>
							))}
						</Nav>
					</Col>
				</Row>
			</Container>
		</TopNavigationBase>
	)
}

export default TopNavigation
