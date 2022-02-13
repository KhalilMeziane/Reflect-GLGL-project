import React from 'react'
import { Helmet } from "react-helmet"
import { AuthNavbar } from '../components/_index'
import { Box, Text, Divider, Tabs, Tab,  TabPanels, TabPanel, TabList, Flex, Heading, Image } from '@chakra-ui/react'
import { EditProject } from '../components/modals/_index'
import Pert from '../components/charts/pert/pert'
import { useParams } from 'react-router-dom'
import { useProject } from '../hooks/useProject'
import notFound from '../assets/images/404-Not-Found.svg'
import { Link } from 'react-router-dom'
import Gant from '../components/charts/gant/gant'
import { Skeleton } from '@chakra-ui/react'

export default function Project() {
    const { id } = useParams()
    const { project, error, isLoading } = useProject(id)
    console.log("project: ", project?.data?.project)
    return (
        <>
            <Helmet>
                <title>Project | Reflect</title>
            </Helmet>
            <AuthNavbar/>
            <Box px={{ base: 4, sm: 6, md: 8, xl: 28 }} py="3">
                {
                    isLoading && <>
                        <Flex justify={"space-between"} align={"center"}>
                            <Skeleton height='32px' width="160px" />
                            <Skeleton height='32px' width="100px" />
                        </Flex>
                        <Divider bg="black" my="3"/>

                    </>
                }
                {
                    project && !isLoading &&
                    <>
                        <Flex justify={"space-between"} align={"center"}>
                            <Text py="3" fontSize="2xl" textTransform={"capitalize"} fontWeight={"semibold"}>{project?.data?.project?.name}</Text>
                            <EditProject project={project?.data?.project}/>
                        </Flex>
                        <Divider bg="black" my="3"/>
                    </>
                }
                {
                    error? <NotFound/>: <Content project={project?.data?.project?.tasks}/>
                }
            </Box>
        </>
    )
}

const NotFound=()=>{
    return(
        <>
            <Box boxSize='lg' mx="auto" mt="-12">
                <Image src={notFound}/>
            </Box>
            <Heading as="H1" size="xl" mt="-32" textAlign={"center"} fontFamily={"poppins"} fontWeight={"medium"}>Project Not Found</Heading>
            <Text textAlign={"center"} fontSize={"xl"} color="green.500" mt="4" textTransform={"capitalize"} fontWeight={"medium"}>
                <Link to="/dashboard">go back</Link>
            </Text>
        </>
    )
}
const Content = ({project})=>{
    return(
        <Tabs variant='enclosed'>
            <TabList>
                <Tab>Pert Chart</Tab>
                <Tab>Gant Chart</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    {project && <Pert tasks={project}/>}
                </TabPanel>
                <TabPanel>
                    {project && <Gant tasks={project}/>}
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}