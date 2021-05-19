import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { SpinnerBase } from './Spinner.style'

/**
 * A spinner component.
 *
 * @returns A spinner react-icons.
 */
const Spinner = () => {
	return (
		<SpinnerBase>
			<FaSpinner className='iconLoading' />
		</SpinnerBase>
	)
}

export default Spinner
