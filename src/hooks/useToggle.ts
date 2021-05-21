import { useState } from 'react'

/**
 * A custom use toggler hook.
 *
 * @param initialState
 * @returns [state, toggleHandler]
 */
const useToggle = (initialState: boolean = true): [boolean, any] => {
	const [state, setState] = useState(initialState)

	const toggle = () => setState(!state)

	return [state, toggle]
}

export default useToggle
