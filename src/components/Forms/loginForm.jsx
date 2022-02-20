import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup  from 'yup'
import { Button } from '@chakra-ui/react'
import { loginCall } from '../../services/httpClient'
import InputFiled from './Types/InputFiled'
import { useNavigate  } from "react-router-dom"

const loginSchemaValidation = yup.object({
    email:yup.string().email('invalid email').required('email is required'),
    password:yup.string().min(6,'password to short').required('password is required')
})

export default function LoginForm(){
    const navigate = useNavigate()
    const [isLoading,setLoading] = useState(false)
    const handleFormSubmit = async(values, actions)=>{
        try{
            setLoading(true)
            const response = await loginCall(values)
            const [tokenObject] = response.data
            localStorage.setItem("REFLECT_TOKEN", tokenObject.token)
            setLoading(false)
            navigate('/dashboard')
        }
        catch(error){
            setLoading(false)
            const field = error?.response?.data?.message.includes('User')? 'email': 'password'
            actions.setFieldError(field, error?.response?.data?.message)
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
                            mb="8"
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
