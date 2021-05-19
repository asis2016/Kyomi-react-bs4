import React, { Fragment, useEffect } from 'react'
import api from '../../api/contacts'

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
		<Fragment>
			<h1>From About</h1>
		</Fragment>
	)
}

export default About
