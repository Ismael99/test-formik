import React from 'react'
import {Link} from '@reach/router'
//Ruta relativa se coloca una punto en la ruta para tomar en cuenta la path
//actual
export const Dashboard = ({children}) => {
	return(
		<div className='flex flex-row'>	
			<div className='flex flex-col w-1/6 h-screen px-2 py-5 bg-red-300' >
				<p className='mb-5 ml-2 text-lg'>Navbar</p>
				<Link to='./' className='w-full my-2 text-center text-white bg-red-200 hover:opacity-60'>Home</Link>
				<Link to='form' className='w-full my-2 text-center text-white bg-red-200 hover:opacity-60'>Form</Link>
			</div>
			<div className='w-5/6 px-3 py-5 bg-gray-300'>
				{children}
			</div>
		</div>
	)
}
