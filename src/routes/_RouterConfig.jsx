import React from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { Home, Login, SignUp, NotFound, Profile, Dashboard, Project } from '../pages/_index'

export default function RouterConfig() {
    const isAuth = localStorage.getItem('REFLECT_TOKEN')? true:false

    return (
        <Routes>
            <Route path="/" element={!isAuth?<Home/>:<Navigate to="/dashboard"/>}/>
            <Route path="/login" element={!isAuth?<Login/>:<Navigate to="/profile"/>}/>
            <Route path="/signup" element={!isAuth?<SignUp/>:<Navigate to="/profile"/>}/>
            <Route element={<RequireAuth />}>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/dashboard/:id" element={<Project/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}
function RequireAuth() {
    const isAuth = localStorage.getItem('REFLECT_TOKEN')? true:false
    if (!isAuth) {
      return <Navigate to="/login" />
    }
    return <Outlet />
}