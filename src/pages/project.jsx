import React from 'react'
import { Helmet } from "react-helmet"
import { AuthNavbar } from '../components/_index'
import { Box, Text, Divider, Tabs, Tab,  TabPanels, TabPanel, TabList, Flex } from '@chakra-ui/react'
import { EditProject } from '../components/modals/_index'
import Pert from '../components/charts/pert/pert'
import { useParams } from 'react-router-dom'

export default function Project() {
    const { id } = useParams()
    console.log('id: ', id)
    
    return (
        <>
            <Helmet>
                <title>Project | Reflect</title>
            </Helmet>
            <AuthNavbar/>
            <Box px={{ base: 4, sm: 6, md: 8, xl: 28 }} py="3">
                <Flex justify={"space-between"} align={"center"}>
                    <Text py="3" fontSize="2xl" textTransform={"capitalize"} fontWeight={"semibold"}>Project name</Text>
                    <EditProject/>
                </Flex>
                <Divider bg="black" my="3"/>
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>Pert Chart</Tab>
                        <Tab>Gant Chart</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Pert/>
                        </TabPanel>
                        <TabPanel>
                            <p>this is gant chart!!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}
