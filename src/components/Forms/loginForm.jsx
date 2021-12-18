import React from 'react'
import { Formik, Form } from 'formik'
import { InputControl } from 'formik-chakra-ui'
import { Button } from '@chakra-ui/react'

export default function LoginForm() {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values)=>{
                console.log("values: ",values)
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
