import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup  from 'yup'
import { Button } from '@chakra-ui/react'
import { loginCall } from '../../services/httpClient'
import InputFiled from './Types/InputFiled'

const loginSchemaValidation = yup.object({
    email:yup.string().email('invalid email').required('email is required'),
    password:yup.string().min(6,'password to short').required('password is required')
})

export default function LoginForm({history}) {

    const [isLoading,setLoading] = useState(false)
    const handleFormSubmit = async(values, actions)=>{
        console.log("values: ",values)
        try{
            setLoading(true)
            const response = await loginCall(values)
            console.log("response: ",response)
            const { token } = response
            localStorage.setItem("REFLECT_TOKEN",token)
            setLoading(false)
            history.push('/dashboard')
        }
        catch(error){
            console.log(error)
            setLoading(false)
            // actions.setFieldError('email',error.response.data.errors.email[0])
        }
    }
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchemaValidation}
            onSubmit={(values, actions)=>{
                handleFormSubmit(values, actions)
            }}
        >
            {
               ()=>(
                    <Form>
                        <InputFiled 
                            name="email"
                            placeholder="exampel@gmail.com"
                            type="email"
                            label="Email"
                            my="8"
                        />
                        <InputFiled 
                            name="password"
                            placeholder={"password"}
                            type="password"
                            label="Password"
                            mb="8"
                        />
                        <Button isLoading={isLoading} loadingText='Submitting' type="submit" colorScheme='green' w="full" my="2" fontWeight={"medium"}>Login</Button>
                   </Form>
               )
            }
        </Formik>
    )
}
