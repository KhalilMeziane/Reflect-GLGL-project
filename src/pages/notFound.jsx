import React from 'react'
import { Helmet } from "react-helmet"
import { Heading, Image, Box, Text  } from "@chakra-ui/react"
import notFound from '../assets/images/404-Not-Found.svg'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <>
        <Helmet>
                <title>404 | Reflect</title>
            </Helmet>
            <Box boxSize='xl' mx="auto">
                <Image src={notFound}/>
            </Box>
            <Heading as="H1" size="2xl" mt="-48" textAlign={"center"} fontFamily={"poppins"} fontWeight={"medium"}>Page Not Found</Heading>
            <Text textAlign={"center"} fontSize={"xl"} color="green.500" mt="4" textTransform={"capitalize"} fontWeight={"medium"}>
                <Link to="/">go back</Link>
            </Text>
        </>
    )
}