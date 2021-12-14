import React from 'react'
import { Helmet } from "react-helmet"
import { AuthNavbar } from '../components/_index'
// import { Link } from 'react-router-dom'

export default function profile() {
    return (
        <>
            <Helmet>
                <title>Account | Reflect</title>
            </Helmet>
            <AuthNavbar/>

        </>
    )
}
