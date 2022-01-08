import React from 'react'
import {
  Flex,
  ButtonGroup,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody
} from '@chakra-ui/react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { DeleteProject } from '../components/modals/_index'
import {useProjects} from '../hooks/useProjects'

export default function ProjectsTable() {
    const header = ['project', 'actions']
    const { projects } = useProjects()
    const projectList = projects?.projects
    return (
      <Flex
        w="full"
        px={{ base: 4, sm: 6, md: 8, xl: 28 }}
        py="8"
        alignItems="center"
        justifyContent="center"
      >
        {
          projects && 
          <Table
              w="full"
              bg="white"
              shadow="lg"
              display={{
                base: 'block',
                md: 'table',
              }}
              sx={{
                '@media print': {
                  display: 'table',
                }
              }}
          >
            <Thead
              display={{
                base: 'none',
                md: 'table-header-group',
              }}
              sx={{
                '@media print': {
                  display: 'table-header-group',
                },
              }}
            >
              <Tr>
                {header.map((x) => (
                  <Th bg="gray.100" fontFamily="poppins" fontWeight="semibold" color="gray.800" fontSize="md" key={x}>{x}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody
              display={{
                base: 'block',
                lg: 'table-row-group',
              }}
              sx={{
                '@media print': {
                  display: 'table-row-group',
                },
              }}
            >

              {
                projectList?.map(({name,id})=>{
                  return(
                  <React.Fragment key={id}>
                    <Tr>
                      <Td textTransform="uppercase" color="gray.900" fontWeight={"medium"}>
                        {name}
                      </Td>
                      <Td>
                        <ButtonGroup variant="solid" size="sm" spacing={3}>
                          <Link to={`/dashboard/${id}`}>
                            <IconButton
                              colorScheme="blue"
                              icon={<BsBoxArrowUpRight />}
                            />
                          </Link>
                          <DeleteProject id={id} name={name}/>
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  </React.Fragment> 
                  )
                }) 
              }
            </Tbody>
          </Table>
        }
      </Flex>
    )
}