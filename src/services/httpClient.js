import axios from 'axios'
import setAuthHeader from './_setAuthHeader'
import { LOGIN, SIGNUP, UPDATE_PROFILE, CREATE_PROJECT, EDIT_PROJECT, DELETE_PROJECT } from './_endPointes'

// login call
export const loginCall = (requestBody) => {
    return axios.post(LOGIN, requestBody)
}

// signup call
export const signupCall = (requestBody) => {
    return axios.post(SIGNUP, requestBody)
}

// update profile info
export const UpdateProfileCall = (requestBody)=>{
    const token = localStorage.getItem("REFLECT_TOKEN")
    setAuthHeader(token)
    return axios.post(UPDATE_PROFILE, requestBody)
}

// create Project
export const createProjectCall = (requestBody)=>{
    const token = localStorage.getItem("REFLECT_TOKEN")
    setAuthHeader(token)
    return axios.post(CREATE_PROJECT, requestBody)
}

// edit Projects
export const editProjectCall = (id, requestBody)=>{
    const token = localStorage.getItem("REFLECT_TOKEN")
    setAuthHeader(token)
    return axios.post(`${EDIT_PROJECT}/${id}`, requestBody)
}

// delete Projects
export const deleteProjectCall = (id)=>{
    const token = localStorage.getItem("REFLECT_TOKEN")
    setAuthHeader(token)
    return axios.post(`${DELETE_PROJECT}/${id}`)
}