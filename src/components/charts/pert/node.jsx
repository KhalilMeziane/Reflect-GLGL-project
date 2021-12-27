import React from 'react'
import { Box, Text, VStack , HStack } from '@chakra-ui/react'

export default function Node({expectedTime, name}){
    return(
        <Box w="72" bg="white" border="1px" borderStyle={"solid"} borderColor={"gray.300"} borderRadius={"sm"}>
            <HStack>
                <VStack p="2.5" spacing={"50px"} bg="green.500" color="white" h="full">
                    <Text fontSize={"3xl"} fontWeight={"bold"}>{name}</Text>
                    <Text fontSize={"lg"} fontWeight={"bold"} textTransform={"capitalize"}>0 days</Text>
                </VStack>
                <VStack>
                    <HStack>
                        <Text textAlign={"center"}>DTO<Text fontWeight={"bold"} textTransform={"capitalize"}>{Math.floor(expectedTime,2)} days</Text></Text>
                        <Text textAlign={"center"}>FTO<Text fontWeight={"bold"} textTransform={"capitalize"}>0 days</Text></Text>
                    </HStack>
                    <HStack>
                        <Text textAlign={"center"}>DTA<Text fontWeight={"bold"} textTransform={"capitalize"}>0 days</Text></Text>
                        <Text textAlign={"center"}>FTA<Text fontWeight={"bold"} textTransform={"capitalize"}>0 days</Text></Text>
                    </HStack>
                </VStack>
            </HStack>
        </Box>
    )
}