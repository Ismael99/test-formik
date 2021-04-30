import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'


export const FormExample = () => {
	return(
		<Formik
			initialValues={{
				name: '',
				password: '',
			}}
			validationSchema = {Yup.object({
				name: Yup.string()
					.max(20, 'Must br 20 character or less')
					.min(3, 'Carcateres minimos 3')
					.required('Required'),
				password: Yup.string()
					.max(15, 'Must be 15 character or less')
					.required('Required')
			})}
		>
			<div className='flex flex-col min-h-screen'>
				<Form className='flex flex-col w-1/3 py-5 mx-auto my-auto border-2 border-blue-300 rounded-md h-1/2 px-15'>
					<label className='w-1/2 mx-auto text-left'> Name </label>
						<Field
							name='name'
							type='text'
							className='w-1/2 mx-auto mt-1 mb-1 text-lg bg-blue-100 border-2 border-blue-200 rounded-md'
						/>
					<div className='w-1/2 mx-auto text-sm text-left text-red-600'> <ErrorMessage name='name'/> </div>
					<label className='w-1/2 mx-auto text-left mt-3'> Password </label>
					<Field
						name='password'
						type='password'
						className='w-1/2 mx-auto mt-1 mb-1 text-lg bg-blue-100 border-2 border-blue-200 rounded-md'
					/>
					<div className='w-1/2 mx-auto text-sm text-left text-red-600'> <ErrorMessage name='password'/> </div>
				</Form>
			</div>
		</Formik>
	)
}
