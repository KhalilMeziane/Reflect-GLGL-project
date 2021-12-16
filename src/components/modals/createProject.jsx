import React from 'react'
import { 
    Button ,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { CreateProjectForm } from '../Forms/_index'

export default function CreateProject() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
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
                        <CreateProjectForm/>
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
