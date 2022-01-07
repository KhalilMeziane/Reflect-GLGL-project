const Domain = 'http://127.0.0.1:8000/api/v1'

// auth
export const LOGIN = `${Domain}/auth/login`
export const SIGNUP = `${Domain}/auth/register`

// PROFILE
export const GET_PROFILE = `${Domain}/user`
export const UPDATE_PROFILE = `${Domain}/user/update`

// project
export const CREATE_PROJECT = `${Domain}/user/project/create`
export const GET_PROJECTS = `${Domain}/user/project`
export const GET_PROJECT = `${Domain}/user/project`
export const EDIT_PROJECT = `${Domain}/user/project/update`
export const DELETE_PROJECT = `${Domain}/user/project/delete`