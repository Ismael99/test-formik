import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'


export const FormExample = () => {
	return(
		<Formik
			className='h-full'
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
			<div className='flex items-center min-h-screen bg-blue-400'>
				<Form className='flex flex-col px-4 py-5 mx-auto my-auto bg-red-200 border-2 border-blue-300 justify-items-start w-3/2 rounded-md '>
					<label className='mx-auto text-left w-3/2'> Name </label>
						<Field
							name='name'
							type='text'
							className='mx-auto mt-1 mb-1 text-lg bg-blue-100 border-2 border-blue-200 w-3/2 rounded-md'
						/>
					<div className='mx-auto text-sm text-left text-red-600 w-3/2'> <ErrorMessage name='name'/> </div>
					<label className='mx-auto mt-3 text-left w-3/2'> Password </label>
					<Field
						name='password'
						type='password'
						className='mx-auto mt-1 mb-1 text-lg bg-blue-100 border-2 border-blue-200 w-3/2 rounded-md'
					/>
					<div className='mx-auto text-sm text-left text-red-600 w-3/2'> <ErrorMessage name='password'/> </div>
				</Form>
			</div>
		</Formik>
	)
}
