import React, {Fragment} from 'react'
import {Router} from '@reach/router'
import {Dashboard} from '../components/Dashboard'
import {FormExample} from '../components/form'
import {Home} from '../components/Home'
import {Paginator} from '../components/Paginator'
import {GeneratorPDF} from '../components/GeneratorPDF'
	const titles = ['Nombre', 'Edad']
	const keysData = ['name', 'age']
	const data = [
		{name: 'Ismael', age: 22},
		{name: 'Pedro', age: 24},
		{name: 'jose', age: 22},
		{name: 'Miguel', age: 24},
		{name: 'Juan', age: 22},
		{name: 'Carlos', age: 24},
		{name: 'Maria', age: 22},
		{name: 'Karla', age: 24},
		{name: 'Andrea', age: 22},
		{name: 'Marina', age: 24},
		{name: 'Angel', age: 22},
		{name: 'Hugo', age: 22},
		{name: 'Sergio', age: 22},
		{name: 'Raul', age: 24},
		{name: 'Carme', age: 22},
		{name: 'Ana', age: 22},
		{name: 'Diana', age: 24},
		{name: 'Diego', age: 24},
		{name: 'Erika', age: 24},
		{name: 'Hector', age: 24},
		{name: 'Ismael', age: 22},
		{name: 'Pedro', age: 24},
		{name: 'jose', age: 22},
		{name: 'Miguel', age: 24},
		{name: 'Juan', age: 22},
		{name: 'Carlos', age: 24},
		{name: 'Maria', age: 22},
		{name: 'Karla', age: 24},
		{name: 'Andrea', age: 22},
		{name: 'Marina', age: 24},
		{name: 'Angel', age: 22},
		{name: 'Hugo', age: 22},
		{name: 'Sergio', age: 22},
		{name: 'Raul', age: 24},
		{name: 'Carme', age: 22},
		{name: 'Ana', age: 22},
		{name: 'Diana', age: 24},
		{name: 'Diegojvjavds', age: 24},
		{name: 'Erika', age: 24},
		{name: 'Hector', age: 24},
	]
export const DashboardPage = () => {
		
	return(
		<Fragment>
			<Dashboard>
				<Router>
						<Home path='/'></Home>
						<FormExample path='form'></FormExample>
						<Paginator path='paginator' data={data} PER_PAGE={10} tableHeaders={titles} keysData={keysData} ></Paginator>
						<GeneratorPDF path='pdf'/>
				</Router>
			</Dashboard>
		</Fragment>
	)
}
