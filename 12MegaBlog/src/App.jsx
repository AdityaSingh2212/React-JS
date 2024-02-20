import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)  
  const dispatch = useDispatch()

  //Jaise hi application load ho to useEffect lo aur usse pucho ki aap log in ho ya nhi
  useEffect(() => {
    authService.getCurrentUser() //ask authService who is your current user, getCurrentUser is a method define in auth.js 
    .then((userData) => {
      if (userData) {
        dispatch(login({userData})) //agar userData hai to login method call karlo, this method (login) is define in authSlice.js
      } else {
        dispatch(logout()) //this method (logout) is define in authSlice.js
      }
    })
    .finally(() => setLoading(false))
  }, [])
  

  //Conditional Rendering
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null //agar loading true hai to null show ho
}

export default App