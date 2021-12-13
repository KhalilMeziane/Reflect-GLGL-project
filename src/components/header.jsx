import React from "react"
import { Link } from "react-router-dom"

import {
  chakra,
  Box,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react"

export default function Header(){
  return (
    <Flex px={4} py={32} mx="auto"  position={"relative"}>
      <Box 
        // mx="auto" 
        // w="full"
        px={{ base: 4, sm: 6, md: 8, xl: 20 }}
        w={{base: "full", sm: 10/12, md: 9/12, lg: 8/12}}
      >
        <chakra.p
          mb={2}
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="wide"
          color="gray.100"
          textTransform="uppercase"
        >
          {/* For Developers */}
        </chakra.p>
        <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="semibold"
          lineHeight="shorter"
          color="white"
        >
          Lorem ipsum dolor sit amet.
        </chakra.h1>
        <chakra.p mb={5} color="gray.50" fontSize={{ md: "lg" }}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor sunt sequi libero neque iste excepturi earum optio, voluptatum, commodi amet temporibus blanditiis asperiores expedita.
        </chakra.p>
        <HStack>
            <Button 
                colorScheme='blue'
                bg="green.500" 
                color="white"
                px="12"
                size="lg"
                variant="none"
            >
                <Link to="/signin">Sign in</Link>
            </Button>
        </HStack>
      </Box>
    </Flex>
  );
};