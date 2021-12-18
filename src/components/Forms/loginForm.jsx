import React from 'react'
import { Formik, Form } from 'formik'
import { InputControl } from 'formik-chakra-ui'
import * as yup  from 'yup'
import { Button } from '@chakra-ui/react'
// import InputFiled from './Types/InputFiled'

const loginSchemaValidation = yup.object({
    email:yup.string().email('invalid email').required('email is required'),
    password:yup.string().min(6,'password to short').required('password is required')
})

 const handleFormSubmit = async(values)=>{
    console.log("values: ",values)
    try{
        //  call api here

    }
    catch(error){
        console.log(error)
    }
 }

export default function LoginForm() {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchemaValidation}
            onSubmit={(values)=>{
                handleFormSubmit(values)
            }}
        >
            {
               ()=>(
                    <Form>
                        <InputControl 
                            name="email"
                            placeholder="exampel@gmail.com"
                            type="email"
                            label="Email"
                            my="4"
                        />
                        <InputControl 
                            name="password"
                            type="password"
                            label="Password"
                            mb="4"
                        />
                        <Button type="submit" colorScheme='green' w="full" my="2" fontWeight={"medium"}>Login</Button>
                   </Form>
               )
            }
        </Formik>
    )
}
