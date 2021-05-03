import React, {Fragment} from 'react'
import {Link, Router} from '@reach/router'
import {Dashboard} from '../components/Dashboard'
import {FormExample} from '../components/form'
import {Home} from '../components/Home'

export const DashboardPage = () => {
		
	return(
		<Fragment>
			<Dashboard>
				<Router>
						<Home path='/'></Home>
						<FormExample path='form'></FormExample>
				</Router>
			</Dashboard>
		</Fragment>
	)
}
