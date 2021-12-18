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
    IconButton,
    Heading,
    Text
} from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'

export default function DeleteProject() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <IconButton
                colorScheme="red"
                variant="outline"
                icon={<BsFillTrashFill />}
                onClick={onOpen}
            />
            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                size={"xl"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading textTransform={"capitalize"} fontFamily={"poppins"} size="lg" fontWeight={"medium"} textAlign={"center"} my="2">your about to delete a project</Heading>
                        <Text textTransform={"capitalize"} textAlign={"center"} fontSize={"lg"}>this will delete your project</Text>
                        <Text textTransform={"capitalize"} textAlign={"center"} fontSize={"lg"}>are you sure?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='red' mx="3" fontWeight={"medium"}>Delete</Button>
                        <Button
                            variant={"none"}
                            onClick={onClose}
                            border="2px"
                            borderStyle={"solid"}
                            borderColor={"red.300"}
                            color="red.400"
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