import React from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'
import {
  chakra,
  Box,
  GridItem,
  Button,
  SimpleGrid,
  Input,
  Text,
  Stack
} from "@chakra-ui/react"

export default function Login() {
    return (
        <>
            <Helmet>
                <title>Login | Reflect</title>
            </Helmet>
            <Box px={8} mx="auto">
                <SimpleGrid
                    alignItems="center"
                    w="full"
                    columns={{ base: 1, lg: 12 }}
                    gap={{ base: 0, lg: 24 }}
                    mx="auto"
                    h="100vh"
                >
                    <GridItem
                        colSpan={{ base: "auto", lg: 6 }}
                        textAlign={{ base: "center", lg: "left" }}
                        bg="gray.200"
                    >
                        <chakra.h1
                            mb={4}
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="bold"
                            lineHeight={{ base: "shorter", md: "none" }}
                            color="gray.900"
                            letterSpacing={{ base: "normal", md: "tight" }}
                        >
                            Ready to start your journey?
                        </chakra.h1>
                        <chakra.p
                            mb={{ base: 10, md: 4 }}
                            fontSize={{ base: "lg", md: "xl" }}
                            fontWeight="thin"
                            color="gray.700"
                            letterSpacing="wider"
                        >
                            Low-latency voice and video feels like you’re in the same room. Wave
                            hello over video, watch friends stream their games, or gather up and
                            have a drawing session with screen share.
                        </chakra.p>
                    </GridItem>
                    <GridItem colSpan={{ base: "auto", md: 6 }}>
                        <Box as="form" mb={6}>
                            <Text fontSize="3xl" fontWeight="semibold" textTransform="capitalize" pt={2}>create account</Text>
                            <SimpleGrid
                                columns={1}
                                py={2}
                                spacing={4}
                            >
                                <Stack>
                                    <Text mb='3px'>Email Address</Text>
                                    <Input
                                        type="email"
                                        placeholder="exampel@gmail.com"
                                        required="true"
                                        color="gray.900"
                                        borderColor="gray.300"
                                        border="2px"
                                        borderStyle="solid"
                                        size="lg"
                                    />
                                </Stack>
                                <Stack>
                                    <Text mb='3px'>Password</Text>
                                    <Input
                                        type="password"
                                        placeholder="password"
                                        required="true"
                                        color="gray.900"
                                        borderColor="gray.300"
                                        border="2px"
                                        borderStyle="solid"
                                        size="lg"
                                    />
                                </Stack>
                                <Button bg="green.500" fontSize="lg" variant="none" color="white" w="full" py={3.5} type="submit">
                                    Sign up for free
                                </Button>
                            </SimpleGrid>
                            <Text 
                                fontSize="md" 
                                textAlign="center" 
                                color="gray.700" 
                                textTransform="capitalize" 
                            >
                                dont have account? 
                                <Link to="/signup">
                                    <Text display="inline" px="2" fontWeight="semibold" color="green.500">Create</Text>
                                </Link>
                            </Text>
                        </Box>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    )
}