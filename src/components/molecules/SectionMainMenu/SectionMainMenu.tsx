import React from 'react'
import { SectionMainMenuStyle } from './SectionMainMenu.style'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionMainMenu = () => {
	return (
		<SectionMainMenuStyle className='ml-auto'>
			<Nav>
				<Link to={'/'} className='nav-link'>
					Home
				</Link>
				<Link to={'/blog'} className='nav-link'>
					Blog
				</Link>
				<Link to={'/shop'} className='nav-link'>
					Shop
				</Link>
				<Link to={'/vacancy'} className='nav-link'>
					Jobs
				</Link>
				<NavDropdown title='Who are we' id='basic-nav-dropdown'>
					<Link to={'/contact'} className='dropdown-item'>
						Contact us
					</Link>
					<Link to={'/about'} className='dropdown-item'>
						About us
					</Link>
				</NavDropdown>
			</Nav>
		</SectionMainMenuStyle>
	)
}

export default SectionMainMenu
