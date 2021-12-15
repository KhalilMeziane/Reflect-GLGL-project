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
  Tbody,
} from '@chakra-ui/react'
import { AiFillEdit } from 'react-icons/ai'
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs'

export default function projectsTable() {
  const header = ['project', 'created', 'actions'];
  const data = [
    { name: 'Daggy', created: '7 days ago' },
    { name: 'Anubra', created: '23 hours ago' },
    { name: 'Josef', created: 'A few seconds ago' },
    { name: 'Sage', created: 'A few hours ago' },
  ];
  return (
    <Flex
      w="full"
      bg="gray.50"
      px={{ base: 4, sm: 6, md: 8, xl: 28 }}
      py="8"
      alignItems="center"
      justifyContent="center"
    >
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
          },
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
          {data.map((token, tid) => {
            return (
              <Tr
                key={tid}
                display={{
                  base: 'grid',
                  md: 'table-row',
                }}
                sx={{
                  '@media print': {
                    display: 'table-row',
                  },
                  gridTemplateColumns: 'minmax(0px, 35%) minmax(0px, 65%)',
                  gridGap: '10px',
                }}
              >
                {Object.keys(token).map((x) => {
                  return (
                    <React.Fragment key={`${tid}${x}`}>
                      <Td
                        display={{
                          base: 'table-cell',
                          md: 'none',
                        }}
                        sx={{
                          '@media print': {
                            display: 'none',
                          },
                          textTransform: 'uppercase',
                          color:"black",
                          fontWeight: 'bold',
                        }}
                      >
                        {x}
                      </Td>
                      <Td
                        color="gray.900"
                        fontSize="md"
                      >
                        {token[x]}
                      </Td>
                    </React.Fragment>
                  );
                })}
                <Td
                  display={{
                    base: 'table-cell',
                    md: 'none',
                  }}
                  sx={{
                    '@media print': {
                      display: 'none',
                    },
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                >
                  Actions
                </Td>
                <Td>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="blue"
                      icon={<BsBoxArrowUpRight />}
                    />
                    <IconButton colorScheme="green" icon={<AiFillEdit />} />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                    />
                  </ButtonGroup>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
}
