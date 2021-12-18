import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'
import WebsiteSignIn from '../assets/images/WebsiteSignIn.svg'
import {
  Box,
  GridItem,
  Button,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react"
import { Formik, Form } from 'formik'
import {
    InputControl
} from "formik-chakra-ui"

export default function Login() {
    return (
        <>
            <Helmet>
                <title>Signup | Reflect</title>
            </Helmet>
            <Box px={8} mx="auto">
                <SimpleGrid
                    alignItems="center"
                    w="full"
                    columns={{ base: 1, lg: 12 }}
                    gap={{ base: 0, lg: 24 }}
                    mx="auto"
                    h="100vh"
                >
                    <GridItem
                        colSpan={{ base: 0, lg: 6 }}
                        display={{base:"none", lg:"block"}}
                    >
                        <Image src={WebsiteSignIn} alt='login image' />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", md: 6 }}>
                        <Box mb={6}>
                            <Text fontSize="3xl" fontWeight="semibold" textTransform="capitalize" pt={2}>create account</Text>
                            <SignUpForm/>
                            <Text 
                                fontSize="md" 
                                textAlign="center" 
                                color="gray.700" 
                                textTransform="capitalize" 
                            >
                                already have account? 
                                <Link to="/login">
                                    <Text display="inline" px="2" fontWeight="semibold" color="green.500">Login</Text>
                                </Link>
                            </Text>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    )
}

const SignUpForm = ()=>{
    return(
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
                            type="password"
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