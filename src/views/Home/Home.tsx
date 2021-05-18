import React from 'react'
import { HomeBase } from './Home.style'
import { Blog, Feature, Gallery, MainHeader, Portfolio } from './components'
import { SectionOffer } from '../../components/molecules'
import { Footer } from '../../components/organisms'

const Home = (): JSX.Element => {
	return (
		<HomeBase>
			<MainHeader
				title={'नमस्ते नेपाल'}
				subTitle={'Welcome to Nepal. The land of Himalayas.'}
			/>
			<SectionOffer
				title={'We offer you to a commodo vitae nulla. Code: 2021-21.'}
				href={'#'}
			/>
			<Feature />
			<Portfolio />
			<Blog />
			<Gallery />
			<Footer />
		</HomeBase>
	)
}

export default Home
