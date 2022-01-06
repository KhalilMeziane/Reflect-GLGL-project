import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home, Login, SignUp, NotFound, Profile, Dashboard, Project } from '../pages/_index'

export default function RouterConfig() {
    const isAuth = localStorage.getItem('APP_TOKEN')? true:false

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={isAuth? <Profile/>:<Navigate to="/login"/>}/>
            <Route path="/dashboard" element={isAuth? <Dashboard/>:<Navigate to="/login"/>}/>
            <Route path="/dashboard/:id" element={isAuth? <Project/>:<Navigate to="/login"/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

