import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Box, GridItem, SimpleGrid, Text, Image } from "@chakra-ui/react"
import { SignupForm } from '../components/Forms/_index'
import WebsiteSignIn from '../assets/images/WebsiteSignIn.svg'

export default function Signup() {
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
                            <SignupForm />
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