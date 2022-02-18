import React, { useState } from 'react'
import { Formik, Form, FieldArray } from 'formik'
import * as yup  from 'yup'
import { Button , HStack, Flex, Text, Box, SimpleGrid, ModalFooter } from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'
import InputFiled from './Types/InputFiled'
import { editProjectCall } from '../../services/httpClient'
import { useProject } from '../../hooks/useProject'

const editSchemaValidation = yup.object({
    name: yup.string().min(6,'project name to short').required('project name is required'),
    tasks: yup.array()
        .of(
            yup.object().shape({
                name: yup.string().min(1, 'too short').required('Required'),
                duration: yup.number().typeError('must be a number').positive("must be a positive number")
                .integer("must be a integer number").min(1, 'must be a greater or equal 1').required('Required'), 
            })
        )
})

export default function EditForm({onClose, project}) {
    const [isLoading, setLoading] = useState(false)
    const { mutate } = useProject(project.id)
    const handleFormSubmit = async(values)=>{
        const projectUpdated = {}
        projectUpdated.name = values.name
        const tasks = []
        values.tasks.forEach(({name, duration, previous})=>{
            tasks.push({
                name,
                duration,
                previous : !previous || previous.length === 0 ? []: previous.split(/,| /)
            })
        })
        projectUpdated.tasks = [...tasks]
        try{
            setLoading(true)
            await editProjectCall(project.id, projectUpdated)
            mutate()
            setLoading(false)
            onClose()
        }
        catch(error){
            console.log(error.response)
            setLoading(false)
            onClose()
        }
    }

    const projectUpdated = {}
        projectUpdated.name = project.name
        const tasks = []
        project.tasks.forEach(({name, duration, previous})=>{
            tasks.push({
                name,
                duration,
                previous : previous.map(item=>item.name).join()
            })
        })
        projectUpdated.tasks = [...tasks]

    return (
        <Formik
            initialValues={projectUpdated}
            validationSchema={editSchemaValidation}
            onSubmit={(values)=>{
                handleFormSubmit(values)
            }}
        >
            {
                ({values})=>(
                    <Form>
                        <InputFiled 
                            name="name"
                            placeholder="project"
                            type="text"
                            label="Project Name"
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
                                                    <Flex justify={"space-between"} align={"center"} mb="1">
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
                                                                placeholder="tach name"
                                                                type="text"
                                                                mb="7"
                                                            />
                                                            <InputFiled 
                                                                name={`tasks.${index}.duration`}
                                                                placeholder="tach duration"
                                                                type="text"
                                                                mb="7"
                                                            />
                                                            <InputFiled 
                                                                name={`tasks.${index}.previous`}
                                                                placeholder="tach antecedents"
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
                                            disabled={values.tasks.length >= 20}
                                        >add new tach</Button>
                                    </SimpleGrid>
                                )
                            }
                        </FieldArray>
                        <ModalFooter pr='0'>
                            <Button isLoading={isLoading} loadingText='Updating' colorScheme='green' mr="3" fontWeight={"medium"} type="submit">Update</Button>
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