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
    IconButton
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
                    <ModalHeader>Create Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* <CreateProject/> */}
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dignissimos eum mollitia dolorem, iste voluptate, accusantium impedit repellendus veniam quae illo voluptates eveniet sit dolores repudiandae error quis quod id accusamus nihil officia suscipit nisi amet? Rerum necessitatibus, fuga minima optio aliquid doloremque est totam, adipisci harum aut, sunt in.
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