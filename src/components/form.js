import React from 'react'
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik'
import * as Yup from 'yup'
import {DataListCustom} from './DataListCustom'

const INITIAL_VALUES = {id: 0, designation_title:'Opciones'}
const designations_data = [
    {id: 1, designation_title: 'Option 1'},
    {id: 2, designation_title: 'Option 2'},
    {id: 3, designation_title: 'Option 3'},
    {id: 4, designation_title: 'Option 1'}
]

export const FormExample = () => {
	return(
		<Formik
			className='h-full'
			initialValues={{
				name: '',
				password: '',
                designation: [INITIAL_VALUES]
			}}
             onSubmit={values =>
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 500)
            }
			validationSchema = {Yup.object({
				name: Yup.string()
					.max(20, 'Must br 20 character or less')
					.min(3, 'Carcateres minimos 3')
					.required('Required'),
				password: Yup.string()
					.max(15, 'Must be 15 character or less')
					.required('Required'),
			})}
            render={({values})=>(
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
                        <Field  as='select' isMulti={true} id='datalist_test' name ='datalist_test'>
                            <option value=""></option>
                            <option>American Black Bear</option>
                            <option>Asiatic Black Bear</option>
                            <option>Brown Bear</option>
                            <option>Giant Panda</option>
                            <option>Sloth Bear</option>
                            <option>Sun Bear</option>
                            <option>Polar Bear</option>
                            <option>Spectacled Bear</option>
                        </Field>

                         <FieldArray
                                  name="designation"
                                  render={arrayHelpers => (
                                    <div>
                                      {values.designation.map((formItem, index) => (
                                        <div key={index}>
                                          <Field
                                              type="text"
                                              name={`designation.${index}`}
                                              list="designations"
                                              id="designation"
                                            />
                                            <datalist id="designations">
                                              {designations_data.map((designation) => {
                                                return (
                                                  <option
                                                    value={`${designation.id}`}
                                                    key={`${designation.id}`}
                                                  >
                                                    {`${designation.designation_title}`}
                                                  </option>
                                                );
                                              })}
                                            </datalist>
                                            <button
                                            type="button"
                                            onClick={() => arrayHelpers.remove(index)} // remove a form from the list of forms
                                          >
                                            -
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() =>
                                                    arrayHelpers.push(index, '')
                                            } // insert an empty string at a position
                                          >
                                            +
                                          </button>
                                        </div>
                                      ))}
                                      <div>
                                        <button type="submit">Submit</button>
                                      </div>
                                    </div>
                                  )}
                                />
                       <DataListCustom name='test' type='text' />
                        <button type='submit' >Submit</button>
                    </Form>
                </div>
            )}
	    />
	)
}
