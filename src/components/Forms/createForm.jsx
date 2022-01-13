import React, { useState } from 'react'
import { Formik, Form, FieldArray } from 'formik'
import * as yup  from 'yup'
import { Button , HStack, Flex, Text, Box, SimpleGrid, ModalFooter } from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'
import InputFiled from './Types/InputFiled'
import { createProjectCall } from '../../services/httpClient'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    name: 'khalil',
    tasks: [
      {
        name: 'A',
        duration: '4',
        previos: '',
      },
      {
        name: 'B',
        duration: '9',
        previos: 'A',
      },
      {
        name: 'C',
        duration: '12',
        previos: 'A',
      },
    ],
}

const createSchemaValidation = yup.object({
    name: yup.string().min(6,'project name to short').required('project name is required'),
    tasks: yup.array()
        .of(
            yup.object().shape({
                name: yup.string().min(1, 'too short').required('Required'),
                duration: yup.string().min(1, 'too short').required('Required'), 
            })
        )
})

export default function CreateForm({onClose}) {
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
    const handleFormSubmit = async(values, actions)=>{
        const project = {}
        project.name = values.name
        const tasks = []
        values.tasks.forEach(({name, duration, previos})=>{
            tasks.push({
                name,
                duration,
                previous : !previos || previos.length === 0 || previos !== undefined ? []: previos.split(/,| /)
            })
        })
        project.tasks = [...tasks]
        try{
            setLoading(true)
            const response = await createProjectCall(project)
            const { id }= response.data.project
            setLoading(false)
            navigate(`/dashboard/${id}`)
        }
        catch(error){
            console.log(error.response)
            setLoading(false)
        }
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={createSchemaValidation}
            onSubmit={(values, actions)=>{
                handleFormSubmit(values, actions)
            }}
        >
            {
                ({values})=>(
                    <Form>
                        <InputFiled 
                            name="name"
                            placeholder="project"
                            type="text"
                            label="Project"
                            mb="7"
                        />
                        <FieldArray name="tasks">
                            {
                                ({ insert, remove, push })=>(
                                    <SimpleGrid
                                        columns={1}
                                        spacing={2}
                                    >
                                        {
                                            values.tasks.map((task,index)=>(
                                                <Box mt="-2" key={index}>
                                                    <Flex justify={"space-between"} align={"center"} mb='1'>
                                                        <Text>Tach {index+1}:</Text>
                                                        <Button 
                                                            colorScheme="red" 
                                                            rounded={"sm"} 
                                                            size="sm" 
                                                            onClick={() => remove(index)}
                                                            disabled={values.tasks.length < 4}
                                                        >
                                                            <BsFillTrashFill/>
                                                        </Button>
                                                    </Flex>
                                                    <HStack>   
                                                        <InputFiled 
                                                            name={`tasks.${index}.name`}
                                                            placeholder="name"
                                                            type="text"
                                                            mb="7"
                                                        />
                                                        <InputFiled 
                                                            name={`tasks.${index}.duration`}
                                                            placeholder="duration"
                                                            type="text"
                                                            mb="7"
                                                        />
                                                        <InputFiled 
                                                            name={`tasks.${index}.previos`}
                                                            placeholder="antecedents"
                                                            type="text"
                                                            mb="7"
                                                        /> 
                                                    </HStack>
                                                </Box>
                                            ))
                                        }
                                        <Button 
                                            textTransform={"capitalize"}
                                            colorScheme='blue'
                                            fontWeight={"normal"}
                                            onClick={() => push({ name: '', duration: '', previos:'' })}
                                            disabled={values.tasks.length >= 10}
                                        >add new tach</Button>
                                    </SimpleGrid>
                                )
                            }
                            
                        </FieldArray>
                        <ModalFooter pr='0'>
                            <Button isLoading={isLoading} loadingText='Creating' colorScheme='green' mr="3" fontWeight={"medium"} type="submit">Create</Button>
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
