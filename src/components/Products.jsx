import { Container } from 'postcss'
import React, { useContext } from 'react'
import Herophoto from "../assets/Hero.webp"
import saree from "../assets/Saree.webp"
import Lehenga from "../assets/Lehenga.webp"
import Bag from "../assets/Bag.webp"
import OnePiece from "../assets/One.png"
import { FaCartPlus } from "react-icons/fa";
import CardContext from '../context/CardContext'
import { NavLink } from 'react-router-dom'

const Products = () => {

    const prod=useContext(CardContext);

    const Clothes=[
    {
        img:Herophoto,
        name:"Kurtha",
        price: 2000
    },
    {
        img:saree,
        name:"Saree",
        price: 2000
    },
    {
        img:Lehenga,
        name:"Lehenga",
        price: 5000
    },
    {
        img:Bag,
        name:"Bag",
        price: 2000
    },
    {
        img:OnePiece,
        name:"One Piece",
        price: 2000
    }
    ]
  return (
   <section className='bg-zinc-200 mb-7'>
        <div className='flex items-center justify-center'>
            <h1 className='font-bold text-2xl text-center pt-4'>Products</h1>
            
            {/* <div className='flex justify-center items-center'>
                <button className='flex justify-center'>Cart</button>
            </div> */}
            

        </div>
        
        <div className=' md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {Clothes.map((cloth,index)=>

                <div key={index}className='w-60 h-64 border border-gray-800 shadow-2xl mx-auto mt-10 cursor-pointer hover:scale-105 rounded-2xl '>

                    <img className='w-52 h-48 mx-auto object-cover mt-1 ' src={cloth.img}></img>
                    <div className='flex space-x-5'>
                        <div className=''>
                            <h1 className='font-bold px-8'>{cloth.name}</h1>
                            <p className='pt-1 px-8'>NPR: {cloth.price}</p>
                        </div>
                        <NavLink to="/cart" className='px-5 py-1 rounded-md text-red-600 items-center flex'>
                            <FaCartPlus onClick={()=>{prod.displayCart(cloth);}} className='w-6 h-6' /></NavLink>
                    </div>

                    
                    

                </div>
            )}
            
        </div>
        
   </section>
  )
}

export default Products



