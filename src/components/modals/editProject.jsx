import React from 'react'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader ,ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { BiEdit } from 'react-icons/bi'
import { EditForm } from '../Forms/_index' 

export default function EditProject({project}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} variant={"none"} bg="green.500" px="5" color="white" textTransform={"capitalize"} fontWeight={"normal"} leftIcon={<BiEdit/>}>Edit</Button>
            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                size={"xl"}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Edit Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <EditForm onClose={onClose} project={project}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}