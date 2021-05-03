import React, {Fragment} from 'react'
import {DashboardPage} from './pages/DashboardPage'
import {Router} from '@reach/router'

export const App = () => {
	
	const Section = ({heading}) => (
		<div className='mx-auto text-lg text-center text-black'>
			{heading}
		</div>
	)

	return(
		<Fragment>
			<Router>
				<Section heading='Home' path='/'></Section>
				<DashboardPage path='dashboard/*' ></DashboardPage>
				<Section heading='Error' default></Section>
			</Router>
		</Fragment>
	)
}
