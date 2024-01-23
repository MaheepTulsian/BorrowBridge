import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from './Pages/Homepage.jsx';
import Dashboard from './Pages/Dashboard.jsx'
import Oppurtunity from './Pages/Oppurtunity.jsx';
import Borrow from './Pages/Borrow.jsx';
import Applicationform from './Pages/Applicationform.jsx'
import Applicationstatus from './Pages/Applicationstatus.jsx';
import Autherror from './Pages/Autherror.jsx';


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Homepage/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='oppurtunity/:id' element={<Oppurtunity/>}/>
      <Route path='borrow' element={<Borrow/>}/>
      <Route path='form' element={<Applicationform/>}/>
      <Route path='borrow/:id' element={<Applicationstatus/>}/>
      <Route path='login' element={<Autherror/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>
)
