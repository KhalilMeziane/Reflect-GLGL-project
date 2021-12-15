import React from 'react'
import { Helmet } from 'react-helmet'
import { AuthNavbar, ProjectsTable } from '../components/_index'

export default function dashboard() {
    return (
        <>
           <Helmet>
                <title>Dashboard | Reflect</title>
            </Helmet> 
            <AuthNavbar/>
            <ProjectsTable/>            
        </>
    )
}
