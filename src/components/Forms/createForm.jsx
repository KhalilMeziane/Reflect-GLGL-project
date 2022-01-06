import React from 'react'
import { Formik, Form, FieldArray } from 'formik'
import * as yup  from 'yup'
import { Button , HStack, Flex, Text, Box, SimpleGrid, ModalFooter } from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'
import InputFiled from './Types/InputFiled'

const initialValues = {
    project: '',
    tachs: [
      {
        name: '',
        duration: '',
        antecedents: '',
      },
      {
        name: '',
        duration: '',
        antecedents: '',
      },
      {
        name: '',
        duration: '',
        antecedents: '',
      },
    ],
}

const createSchemaValidation = yup.object({
    project: yup.string().min(6,'project name to short').required('project name is required'),
    tachs: yup.array()
        .of(
            yup.object().shape({
                name: yup.string().min(4, 'too short').required('Required'),
                duration: yup.string().min(3, 'too short').required('Required'), 
                antecedents: yup.string().min(3, 'too short').required('Required'),
            })
        )
})

export default function CreateForm({onClose}) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={createSchemaValidation}
            onSubmit={(values)=>{
                console.log("values: ",values)
            }}
        >
            {
                ({values})=>(
                    <Form>
                        <InputFiled 
                            name="project"
                            placeholder="project"
                            type="text"
                            label="Project"
                            mb="8"
                        />
                        <FieldArray name="tachs">
                            {
                                ({ insert, remove, push })=>(
                                    <SimpleGrid
                                        columns={1}
                                        spacing={4}
                                    >
                                        {
                                            values.tachs.map((tach,index)=>(
                                                <Box mt="1" key={index}>
                                                    <Flex justify={"space-between"} align={"center"}>
                                                        <Text mb='1px'>Tach {index+1}:</Text>
                                                        <Button 
                                                            colorScheme="red" 
                                                            rounded={"sm"} 
                                                            size="sm" 
                                                            onClick={() => remove(index)}
                                                            disabled={values.tachs.length < 4}
                                                        >
                                                            <BsFillTrashFill/>
                                                        </Button>
                                                    </Flex>
                                                    <HStack>   
                                                            <InputFiled 
                                                                name={`tachs.${index}.name`}
                                                                placeholder="tach name"
                                                                type="text"
                                                            />
                                                            <InputFiled 
                                                                name={`tachs.${index}.duration`}
                                                                placeholder="tach duration"
                                                                type="text"
                                                            />
                                                            <InputFiled 
                                                                name={`tachs.${index}.antecedents`}
                                                                placeholder="tach antecedents"
                                                                type="text"
                                                            /> 
                                                    </HStack>
                                                </Box>
                                            ))
                                        }
                                        <Button 
                                            textTransform={"capitalize"}
                                            colorScheme='blue'
                                            fontWeight={"normal"}
                                            onClick={() => push({ name: '', duration: '', antecedents:'' })}
                                            disabled={values.tachs.length >= 10}
                                        >add new tach</Button>
                                    </SimpleGrid>
                                )
                            }
                            
                        </FieldArray>
                        <ModalFooter pr='0'>
                            <Button colorScheme='green' mr="3" fontWeight={"medium"} type="submit">Create</Button>
                            <Button
                                variant={"none"}
                                onClick={onClose}
                                border="2px"
                                borderStyle={"solid"}
                                borderColor={"green.300"}
                                color="green.400"
                                fontWeight={"medium"}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </Form>
                )
            }
        </Formik>
    )
}
