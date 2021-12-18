import React from 'react'
import { ErrorMessage, useField } from 'formik'
import { InputControl } from 'formik-chakra-ui'

export default function InputFiled(props) {
    const [field, meta] = useField(props)
    return (
        <>
            <InputControl {...field} {...props} value={meta.value}/>  
            <ErrorMessage name={field.name} component="span"/> 
        </>
    )
}
