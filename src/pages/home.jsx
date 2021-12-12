import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Navbar } from '../components/_index'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Reflect</title>
            </Helmet>
            <Navbar/>
            <h1>this is home page</h1>
            <Link to="/login">login</Link>
        </>
    )
}
