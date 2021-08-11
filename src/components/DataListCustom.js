import React from 'react'
import { useField } from 'formik'
 import {DataList} from "react-datalist-field/build";
import ReactHTMLDatalist from "react-html-datalist";
var cars = [
        {value : 1,text: "Honda" },
        {value : 2, text: "Honda" },
        {value : 3, text:"Maruti" },
        {value : 4, text: "Honda" },
        {value : 5, text: "Tesla" },
        {value : 6, text: "Tesla" },
        {value : 7, text: "Tesla" },
        {value : 8, text: "Toyota" },
        {value : 9,  text:"Toyota" },
    ];


export const DataListCustom = (props) => {
   const [field, meta] = useField({ ...props, type: 'checkbox' });
    return(
        <>
            <ReactHTMLDatalist
                {...field}
                {...props}
                placeholder="Select an option from the drop down menu..."
                options={cars}
                value1="model"
                value2="company"
                id='id'
            />    
                {meta.touched && meta.error ? (
                 <div className="error">{meta.error}</div>
                ) : null}
        </>
    )
}
