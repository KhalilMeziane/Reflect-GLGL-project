import React from 'react'
import { Helmet } from 'react-helmet'
import { AuthNavbar, ProjectsTable } from '../components/_index'
import { 
    Text, 
    Flex, 
} from '@chakra-ui/react'
import { CreateProject } from '../components/modals/_index'

export default function Dashboard() {
    return (
        <>
            <Helmet>
                <title>Dashboard | Reflect</title>
            </Helmet> 
            <AuthNavbar/>
            <Flex justify={"space-between"} align={"center"} px={{ base: 4, sm: 6, md: 8, xl: 28 }} py="3">
                <Text fontSize="2xl" textTransform={"capitalize"} fontWeight={"semibold"}>Dashboard</Text>
                <CreateProject/>
            </Flex>
            <ProjectsTable/> 
        </>
    )
}