import React from 'react'
import { Formik, Form } from 'formik'
import * as yup  from 'yup'
import { InputControl } from 'formik-chakra-ui'
import { Button } from '@chakra-ui/react'

const signupSchemaValidation = yup.object({
    name:yup.string().min(5,'user name to short').required('user name is required'),
    email:yup.string().email('invalid email').required('email is required'),
    password:yup.string().min(6,'password to short').required('password is required'),
})

export default function SignupForm() {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={signupSchemaValidation}
            onSubmit={(values)=>{
                console.log("values: ",values)
            }}
        >
            {
               ()=>(
                <Form>
                    <InputControl 
                        name="name"
                        placeholder="john snow"
                        type="text"
                        label="User Name"
                        my="4"
                    />
                    <InputControl 
                        name="email"
                        placeholder="exampel@gmail.com"
                        type="email"
                        label="Email"
                        my="4"
                    />
                    <InputControl 
                        name="password"
                        type="Password"
                        label="Password"
                        mb="4"
                    />
                    <Button type="submit" colorScheme='green' w="full" my="2" fontWeight={"medium"}>Create Account</Button>
            </Form>
               )
            }
        </Formik>
    )
}
