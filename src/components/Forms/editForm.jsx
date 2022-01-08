import React, { useState } from 'react'
import { Formik, Form, FieldArray } from 'formik'
import * as yup  from 'yup'
import { Button , HStack, Flex, Text, Box, SimpleGrid, ModalFooter } from '@chakra-ui/react'
import { BsFillTrashFill } from 'react-icons/bs'
import InputFiled from './Types/InputFiled'
import { editProjectCall } from '../../services/httpClient'

const editSchemaValidation = yup.object({
    name: yup.string().min(6,'project name to short').required('project name is required'),
    tasks: yup.array()
        .of(
            yup.object().shape({
                name: yup.string().min(1, 'too short').required('Required'),
                duration: yup.string().min(1, 'too short').required('Required')
            })
        )
})

export default function EditForm({onClose, project}) {
    console.log("project start: ", project)
    const [isLoading, setLoading] = useState(false)
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
                                                                // value={values?.tasks[index].previous.map(item=>item.name).join()}
                                                            /> 
                                                            {/* {console.log("val: ",typeof(values?.tasks[index].previous.map(item=>item.name).join()))} */}
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