import { Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'
import { NavigationBase } from './Navigation.style'
import { Brand } from '../../../../components/atoms'
import { SectionMainMenu } from '../../../../components/molecules'

const Navigation = () => {
	return (
		<NavigationBase>
			<Navbar expand='lg'>
				<Container>
					<Brand brandName={'Kyomi Mountaineering'} href={'/'} />
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<SectionMainMenu />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</NavigationBase>
	)
}

export default Navigation
