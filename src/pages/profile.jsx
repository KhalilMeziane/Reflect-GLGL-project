import React from 'react'
import { Helmet } from "react-helmet"
import { AuthNavbar } from '../components/_index'
// import { Link } from 'react-router-dom'
import { Box, Button, Flex, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react';

export default function profile() {
    return (
        <>
            <Helmet>
                <title>Account | Reflect</title>
            </Helmet>
            <AuthNavbar/>
            <Box 
                border="2px" 
                borderStyle="solid" 
                borderColor="gray.200"
                rounded="md"
                mt="8"
                mx="auto"
                w={{base: 11/12, lg:10/12}}
            >
                {/* <Text as="h1" fontWeight="semibold" fontSize="3xl">Account</Text> */}
                <Box>
                    <Text 
                        color="gray.900" 
                        fontSize="2xl" 
                        p="5"
                        borderBottom="2px" 
                        borderStyle="solid" 
                        borderColor="gray.200"
                    >Personal info</Text>
                    <Box p="5">
                        <Text 
                            color="gray.700" 
                            fontSize="md"
                            mb="4" 
                        >
                            Your email
                        </Text>
                        <Text 
                            color="gray.900" 
                            fontSize="xl" 
                            fontWeight="semibold"
                        >
                            khalilmez2000@gmail.com
                        </Text>
                    </Box>
                    <hr/>
                    <SimpleGrid
                        columns={1}
                        p={5}
                        spacing={4}
                    >
                        <Stack>
                            <Text mb='3px' textTransform="capitalize">email address</Text>
                            <Input
                                type="email"
                                placeholder="exampel@gmail.com"
                                required="true"
                                color="gray.900"
                                borderColor="gray.300"
                                border="2px"
                                borderStyle="solid"
                                size="lg"
                                w={{base: "full", lg:5/12}}
                            />
                        </Stack>
                        <Stack>
                            <Text mb='3px' textTransform="capitalize">full name</Text>
                            <Input
                                type="text"
                                placeholder="john snow"
                                required="true"
                                color="gray.900"
                                borderColor="gray.300"
                                border="2px"
                                borderStyle="solid"
                                size="lg"
                                w={{base: "full", lg:5/12}}
                            />
                        </Stack>
                       <Flex gap="2">
                            <Button bg="green.500" fontSize="lg" textTransform="capitalize" variant="none" color="white"  py={4} type="submit" px="10" fontWeight="normal">
                                save
                            </Button>
                            <Button border="2px" color="green.500"  borderStyle="solid" borderColor="green.500" fontSize="lg" variant="none" px="10" textTransform="capitalize" fontWeight="normal"  py={4} type="submit">
                                cancel
                            </Button>
                       </Flex>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    )
}
