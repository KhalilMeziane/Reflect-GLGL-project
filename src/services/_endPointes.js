const Domain = 'http://127.0.0.1:8000/api/v1'

// auth
export const LOGIN = `${Domain}/auth/login`
export const SIGNUP = `${Domain}/auth/register`

// PROFILE
export const GET_PROFILE = `${Domain}/profile`
export const UPDATE_PROFILE = `${Domain}/profile/update`

// project
export const CREATE_PROJECT = `${Domain}/create`
export const GET_PROJECTS = `${Domain}/user/project`
export const GET_PROJECT = `${Domain}/user/project`
export const EDIT_PROJECT = `${Domain}/project/:id`
export const DELETE_PROJECT = `${Domain}/user/project/delete`