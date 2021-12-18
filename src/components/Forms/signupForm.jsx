import React from 'react'
import { Formik, Form } from 'formik'
import { InputControl } from 'formik-chakra-ui'
import { Button } from '@chakra-ui/react'

export default function SignupForm() {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
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
