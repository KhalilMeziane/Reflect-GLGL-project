const Domain = 'http://127.0.0.1:8000/api'

// auth
export const LOGIN = `${Domain}/login`
export const SIGNUP = `${Domain}/register`

// PROFILE
export const GET_PROFILE = `${Domain}/profile`
export const UPDATE_PROFILE = `${Domain}/profile/update`

// project
export const CREATE_PROJECT = `${Domain}/create`
export const GET_PROJECTS = `${Domain}/projects`
export const GET_PROJECT = `${Domain}/project/:id`
export const EDIT_PROJECT = `${Domain}/project/:id`
export const DELETE_PROJECT = `${Domain}/project/:id`