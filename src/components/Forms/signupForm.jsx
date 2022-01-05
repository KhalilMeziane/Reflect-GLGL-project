import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup  from 'yup'
import { Button } from '@chakra-ui/react'
import { signupCall } from '../../services/httpClient'
import InputFiled from './Types/InputFiled'

const signupSchemaValidation = yup.object({
    name:yup.string().min(5,'user name to short').required('user name is required'),
    email:yup.string().email('invalid email').required('email is required'),
    password:yup.string().min(6,'password to short').required('password is required'),
})

export default function SignupForm({ history }) {

    const [isLoading,setLoading] = useState(false)
    const handleFormSubmit = async(values, actions)=>{
        console.log("values: ",values)
        try{
            setLoading(true)
            const response = await signupCall(values)
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
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={signupSchemaValidation}
            onSubmit={(values, actions)=>{
                handleFormSubmit(values, actions)
            }}
        >
            {
               ()=>(
                <Form>
                    <InputFiled 
                        name="name"
                        placeholder={"john snow"}
                        type="text"
                        label="User Name"
                        my="8"
                    />
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
                    <Button isLoading={isLoading} loadingText='Submitting' type="submit" colorScheme='green' w="full" my="2" fontWeight={"medium"}>Create Account</Button>
            </Form>
               )
            }
        </Formik>
    )
}
