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
import { BiCaretDown , BiLogOut, BiUser, BiHomeAlt } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useProfile } from './../hooks/useProfile'

export default function Dsll() {
  const { user } = useProfile()
  const navigate = useNavigate()
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
                <Button variant="none" outline={"none"} rightIcon={<BiCaretDown />} fontWeight="normal" textTransform="capitalize">{user?.data?.user?.name}</Button>
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
                    <Text cursor={"pointer"} display={"block"} mt="-4" variant={"none"} fontSize="lg" fontWeight={"medium"} textTransform="capitalize" onClick={()=>{ localStorage.clear(); navigate('/login')}}>
                      <Flex gap="2" justifyItems={"center"} alignItems={"center"}>
                        <BiLogOut/>
                        <Text fontSize="lg" textTransform="capitalize">logout</Text>
                      </Flex>
                    </Text>
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

