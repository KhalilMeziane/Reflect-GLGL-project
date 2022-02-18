import React from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader ,ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { CreateForm } from '../Forms/_index'

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
                size={"2xl"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CreateForm onClose={onClose}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}