import React from 'react'
import { 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure 
} from '@chakra-ui/react'
import { BiEdit } from 'react-icons/bi'

export default function EditProject() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} variant={"none"} bg="green.500" px="5" color="white" textTransform={"capitalize"} fontWeight={"normal"} leftIcon={<BiEdit/>}>Edit</Button>
            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                size={"xl"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aut doloribus sunt. Molestias animi porro ipsam nemo voluptatibus suscipit qui amet odit, laudantium aliquam sit tempore, deleniti illo obcaecati nihil eligendi dolores cupiditate voluptas similique! Eius non nam, iste quo quaerat commodi dignissimos architecto quisquam?
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='green' mx="3" fontWeight={"medium"}>Create</Button>
                        <Button
                            variant={"none"}
                            mr={3} 
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
