import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'
import LoginImage from '../assets/images/WebsiteLogin.svg'
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
                <title>Login | Reflect</title>
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
                        <Image src={LoginImage} alt='login image' />
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", md: 6 }}>
                        <Box mb={0}>
                            <Text fontSize="3xl" fontWeight="semibold" textTransform="capitalize" pt={2}>login</Text>
                            <LoginForm/>
                            <Text 
                                fontSize="md" 
                                textAlign="center" 
                                color="gray.700" 
                                textTransform="capitalize" 
                            >
                                don't have account? 
                                <Link to="/signup">
                                    <Text display="inline" px="2" fontWeight="semibold" color="green.500">Create</Text>
                                </Link>
                            </Text>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    )
}


const LoginForm = ()=>{
    return(
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