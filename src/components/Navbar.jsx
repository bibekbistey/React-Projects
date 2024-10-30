import React, { useState } from 'react'
import Logo from "../assets/Logo3.png"
import { NavLink } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

    const[nav,setNav]=useState(false)
    const togglenav=()=>{
        setNav(!nav)
    }

    const list=[{
        path:"",
        name:"Home"
    },
    {
        path:"product",
        name:"Product"
    },
    {
        path:"todo",
        name:"To-do"
    },
    {
        path:"quiz",
        name:"Quiz"
    },
    {
        path:"crud",
        name:"Crud"
    }

]
  return (
    <div className='items-center mt-3 flex justify-between shadow-md'>
        {/* Logo */}
        <div className='items-center mx-5'>
            <img className='w-16 mb-5' src={Logo}></img>

        </div>
        {/* right part */}
        <div className=''>
            <ul className='md:flex gap-5 mr-5 hidden'>
                {list.map((li,index)=>
                <li key={index} className='font-mono text-lg'>
                    <NavLink to={li.path} className={({isActive})=>isActive?"text-yellow-500":""}>{li.name}</NavLink>
                </li>)}
            </ul>

        </div>
        <div className='mr-5 mb-2 md:hidden'>
            {!nav?<CiMenuBurger className='w-6 h-6' onClick={togglenav} />:<IoMdClose className='w-6 h-6' onClick={togglenav} />}
        </div>

        {/* Small screen */}
        
        <ul className={nav?'md:hidden mr-5 left-0 top-24 fixed w-1/2 h-[70%] bg-slate-400 shadow-red-500':'left-[-100%] fixed'}>
            {list.map((li,index)=>
            <li key={index} className='font-mono text-lg mt-10 mx-5 border-b'>
                <NavLink to={li.path} className={({isActive})=>isActive?"text-yellow-500":""} onClick={()=>{setNav(false)}}>{li.name}</NavLink>
            </li>)}
        </ul>
        
       



    </div>
  )
}

export default Navbar