import React from 'react'
import { Helmet } from 'react-helmet'
import { AuthNavbar, ProjectsTable } from '../components/_index'
import { Text, Flex, Button } from '@chakra-ui/react'
import { BiMessageSquareAdd } from 'react-icons/bi'

export default function dashboard() {
    return (
        <>
           <Helmet>
                <title>Dashboard | Reflect</title>
            </Helmet> 
            <AuthNavbar/>
            <Flex justify={"space-between"} align={"center"} px={{ base: 4, sm: 6, md: 8, xl: 28 }} py="3">
                <Text fontSize="2xl" textTransform={"capitalize"} fontWeight={"semibold"}>Dashboard</Text>
                <Button variant={"none"} bg="green.500" px="5" color="white" textTransform={"capitalize"} fontWeight={"normal"} leftIcon={<BiMessageSquareAdd/>}>new project</Button>
            </Flex>
            <ProjectsTable/>            
        </>
    )
}
