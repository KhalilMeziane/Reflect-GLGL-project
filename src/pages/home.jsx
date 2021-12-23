import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Navbar, Header } from '../components/_index'
import { Box } from '@chakra-ui/react'
import headerImage from '../assets/images/header2.jpg'




export default function Home() {
    const [counter,setCounter]= useState(0)
    return (
        <>
            <Helmet>
                <title>Reflect</title>
            </Helmet>
            <Box 
                bgImage={`url(${headerImage})`}
                bgRepeat="no-repeat"
                bgSize="cover"
                h="100vh"
                position={"relative"}
            >
                <Box
                    position={"absolute"}
                    w="full"
                    h="full"
                    bg="black"
                    opacity={"60%"}
                ></Box>
                <Navbar/>
                <Header/>
            </Box>
        </>
    )
}
