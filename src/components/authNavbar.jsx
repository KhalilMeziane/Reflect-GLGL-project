import React from "react";
import {
  chakra,
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react"
import { BiCaretDown , BiLogOut, BiUser, BiHomeAlt } from "react-icons/bi";
import { Link } from 'react-router-dom'

export default function Dsll() {

  return (
    <>
      <chakra.header
        w="full"
        py={4}
        shadow="sm"
        px={{ base: 4, sm: 6, md: 8, xl: 28 }}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
              <Text fontSize="2xl" fontWeight="semibold">
                <Link to="/dashboard">Reflect</Link>
              </Text>
          </HStack>
          <HStack
            spacing={1}
            alignItems="center"
          >
            <Popover>
              <PopoverTrigger>
                <Button variant="none" outline={"none"} rightIcon={<BiCaretDown />} fontWeight="normal" textTransform="capitalize">khalil meziane</Button>
              </PopoverTrigger>
              <PopoverContent w="44">
                <PopoverArrow />
                <PopoverBody>
                  <VStack alignItems={"start"}>
                    <Link to="/dashboard">
                      <Flex gap="2" justifyItems={"center"} alignItems={"center"}>
                        <BiHomeAlt/>
                        <Text fontSize="lg" textTransform="capitalize">dashboard</Text>
                      </Flex>
                    </Link>
                    <Link to="/profile">
                      <Flex gap="2" justifyItems={"center"} alignItems={"center"}>
                        <BiUser/>
                        <Text fontSize="lg" textTransform="capitalize">profile</Text>
                      </Flex>
                    </Link>
                    <Link to="/logout">
                      <Flex gap="2" justifyItems={"center"} alignItems={"center"}>
                        <BiLogOut/>
                        <Text fontSize="lg" textTransform="capitalize">logout</Text>
                      </Flex>
                    </Link>
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
}

