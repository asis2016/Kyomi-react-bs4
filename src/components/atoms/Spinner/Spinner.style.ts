import styled from 'styled-components'

export const SpinnerBase = styled.div`
	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	.iconLoading {
		animation: spin 1.5s linear infinite;
	}
`
