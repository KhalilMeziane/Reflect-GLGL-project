import React from 'react'
import { Helmet } from 'react-helmet'
import { AuthNavbar, ProjectsTable } from '../components/_index'
import { CreateProject } from '../components/Forms/_index'
import { 
    Text, 
    Flex, 
    Button ,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { BiMessageSquareAdd } from 'react-icons/bi'

export default function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Helmet>
                <title>Dashboard | Reflect</title>
            </Helmet> 
            <AuthNavbar/>
            <Flex justify={"space-between"} align={"center"} px={{ base: 4, sm: 6, md: 8, xl: 28 }} py="3">
                <Text fontSize="2xl" textTransform={"capitalize"} fontWeight={"semibold"}>Dashboard</Text>
                <Button 
                    variant={"none"} 
                    bg="green.500" 
                    px="5" 
                    color="white" 
                    textTransform={"capitalize"} 
                    fontWeight={"normal"} 
                    leftIcon={<BiMessageSquareAdd/>}
                    onClick={onOpen}
                    >
                        new project
                </Button>
            </Flex>
            <ProjectsTable/> 
            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                size={"xl"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CreateProject/>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' mx="3" fontWeight={"medium"}>Create</Button>
                        <Button
                            variant={"none"}
                            onClick={onClose}
                            border="2px"
                            borderStyle={"solid"}
                            borderColor={"green.300"}
                            color="green.400"
                            fontWeight={"medium"}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>           
        </>
    )
}