import styled from 'styled-components'
import { DefaultStyle } from '../../../../assets/style'
import { Container } from 'react-bootstrap'

export const BlogStyle = styled(Container)`
	padding: ${DefaultStyle.sectionPaddingTopBottom} 0px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);

	.card-body {
		padding: 1.25rem 0;
	}

	.price {
		color: ${DefaultStyle.primary} !important;
	}

	.col-sm-12{
		padding: 30px;
	}
`
