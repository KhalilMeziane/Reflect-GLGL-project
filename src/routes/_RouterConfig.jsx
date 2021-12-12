import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, NotFound } from '../pages/_index'


export default function RouterConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

