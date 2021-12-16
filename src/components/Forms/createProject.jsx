import React from 'react'
import {
    Box,
    SimpleGrid,
    Input,
    Text,
    Stack,
    HStack,
    Flex,
    Button
  } from "@chakra-ui/react"
import { BsFillTrashFill } from 'react-icons/bs'

export default function CreateProjectModal() {
    return (
        <Box as="form">
            <SimpleGrid
                columns={1}
                spacing={4}
            >
                <Stack>
                    <Text >Project Name</Text>
                    <Input
                        type="text"
                        placeholder="E-commerce"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                </Stack>
                <Stack>
                    <Flex justify={"space-between"} align={"center"}>
                        <Text mb='1px'>Tach 01:</Text>
                        <Button colorScheme="red" rounded={"sm"} size="sm"><BsFillTrashFill/></Button>
                    </Flex>
                    <HStack>
                    <Input
                        type="text"
                        placeholder="Name"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                    <Input
                        type="text"
                        placeholder="Duration"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                    <Input
                        type="text"
                        placeholder="Antecedents"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                    </HStack>
                    
                </Stack>
                <Stack>
                    <Flex justify={"space-between"} align={"center"}>
                        <Text mb='1px'>Tach 02:</Text>
                        <Button colorScheme="red" rounded={"sm"} size="sm"><BsFillTrashFill/></Button>
                    </Flex>
                    <HStack>
                    <Input
                        type="text"
                        placeholder="Name"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                    <Input
                        type="text"
                        placeholder="Duration"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                    <Input
                        type="text"
                        placeholder="Antecedents"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                    </HStack>
                    
                    
                </Stack>                
                <Stack>
                    <Flex justify={"space-between"} align={"center"}>
                        <Text mb='1px'>Tach 03:</Text>
                        <Button colorScheme="red" rounded={"sm"} size="sm"><BsFillTrashFill/></Button>
                    </Flex>
                    <HStack>
                    <Input
                        type="text"
                        placeholder="Name"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                    <Input
                        type="text"
                        placeholder="Duration"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                    <Input
                        type="text"
                        placeholder="Antecedents"
                        required="true"
                        color="gray.900"
                        borderColor="gray.300"
                        border="2px"
                        borderStyle="solid"
                        size="md"
                    />
                    </HStack>
                </Stack>
            </SimpleGrid>
        </Box>
    )
}
