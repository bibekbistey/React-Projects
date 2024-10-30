import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { TodoContext } from '../context/TodoContext';



const Todo = () => {
    const todo=useContext(TodoContext)
  return (
    <div className='max-w-[1200px] h-[70vh] bg-green-200 mx-auto'>
        <h1 className='font-mono text-center p-5'>To-do App</h1>

        <div className='justify-center flex items-center space-x-4'>
            <input className='border border-gray-300 rounded px-3 py-2 focus:outline-none'
             type='text'
             value={todo.added}
             onChange={todo.handlechange}
             placeholder='Enter a task...'>            
            </input>  
            <IoAddCircle onClick={todo.addtask} className='mr-1 flex w-8 h-8' />       
        </div>

        <div className='mt-10 flex justify-center'>
            <ul className=''>
                {todo.task.map((to,index)=>
                    <li key={index} className='flex items-center justify-between p-4 w-[100%]  bg-white border border-blue-300 rounded-xl shadow-xl mb-4 mr-40'>
                        {to}
                    <MdDeleteForever onClick={()=>{todo.deletetask(index)}} className='w-5 h-5 text-red-500' />
                    
                </li>
                )}
                
            </ul>

            

        </div>
        
    
    </div>

  )
}

export default Todo