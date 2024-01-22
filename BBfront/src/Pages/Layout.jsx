import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <h1>
        Heading
    </h1>
    <Outlet/>
    <h2>
        Footer
    </h2>
    </>
  )
}

export default Layout