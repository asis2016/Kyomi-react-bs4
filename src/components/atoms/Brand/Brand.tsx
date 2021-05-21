import React from 'react'
import { BrandStyle } from './Brand.style'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

/**
 * A navigation brand on top-left main navigation.
 *
 * @params A props from src/types/BrandProps
 * @returns A JSX.Element
 */
const Brand = ({ brandName, href }: BrandProps): JSX.Element => {
	return (
		<BrandStyle>
			<Link className='navbar-brand' to={href}>
				<i className='fas fa-mountain'></i> {brandName}
			</Link>
		</BrandStyle>
	)
}

export default Brand
