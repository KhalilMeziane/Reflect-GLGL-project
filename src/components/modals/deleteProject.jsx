import React, { useState } from 'react'
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
import { deleteProjectCall } from '../../services/httpClient'
import {useProjects} from '../../hooks/useProjects'

 export default function DeleteProject({id, name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setLoading] = useState(false)
    const { mutate } = useProjects()
    const handelDelete = async()=>{
        try{
            setLoading(true)
            await deleteProjectCall(id)
            setLoading(false)
            mutate()
            onClose()
        }catch(error){
            setLoading(false)
            console.log(error.response)
        }
    }
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
                        <Heading textTransform={"capitalize"} fontFamily={"poppins"} size="md" fontWeight={"medium"} my="2">your about to delete a project</Heading>
                        <Text textTransform={"capitalize"}  fontSize={"md"}>this will delete your project, are you sure?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handelDelete} isLoading={loading} loadingText='deleting' colorScheme='red' mx="3" fontWeight={"medium"} size="md">Delete</Button>
                        <Button
                            size="md"
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