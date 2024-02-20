import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


                         //1st Method of making router

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />  //for rendering
//       },
//       {
//         path: "about",
//         element: <About />  //for rendering
//       },
//       {
//         path: "contact",
//         element: <Contact />  //for rendering
//       }
//     ]
//   }
// ])


                          // 2nd Method of making router
const router = createBrowserRouter(
  createRoutesFromElements(
    //layout ke andar saare components aa rhe hain kyyn ki iske andar outlet laga rakha hai. Isko hum kch bhi keh sakte hai jaise root, layout etc
    <Route path='/' element={<Layout />}> 
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> 
      <Route 
      loader={githubInfoLoader}  //already start fetching the data from api while hovering.
  //githubInfoLoader is the method to fetch the data. This method is define in github.jsx
      path='github' 
      element={<Github />}
       />
    </Route>// layout vala route hai ye
  )
)

//RouterProvider is like a wrap in which we had combine all the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
