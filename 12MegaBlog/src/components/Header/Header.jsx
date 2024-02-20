import React from 'react'
import {Container, Logo, LogoutBtn} from '../index' //everything is compile in the index
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)  //finding the current status
  const navigate = useNavigate()

  const navItems = [  //Nav items is a array
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? ( //agar item active hai 
              <li key={item.name}> 
                <button
                onClick={() => navigate(item.slug)}  //navigate comes from react router dom
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                //Text in the button will be the name of the item (item.name)
                >{item.name}</button> 
              </li>
            ) : null //agar item active nhi hai
            )}
            {authStatus && ( // agar auth status true hoga tabhi ()-> ye run hoga 
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header