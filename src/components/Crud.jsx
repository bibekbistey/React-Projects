import React from 'react';
import {useContext} from "react"
import { CrudContext } from '../context/CrudContext';

const Crud = () => {
  const info=useContext(CrudContext)
  return (
    <div className="p-4 justify-center bg-slate-400 max-w-[1200px] h-[70vh] mx-auto font-mono">
      <h1 className='text-center text-2xl font-bold mb-10'>Crud Operation</h1>
      <div className='mx-36'>
        <input value={info.name} onChange={info.handlename} className='my-5 mr-5 px-1 py-1 shadow-xl rounded-md' type='text' placeholder='Enter your first name..'></input>
        <input value={info.lastname} onChange={info.handlelastname} className='my-5 mr-5 px-1 py-1 shadow-xl rounded-md'type='text' placeholder='Enter your last name..'></input>
        <input value={info.age} onChange={info.handleage} className='my-5 mr-5 px-1 py-1 shadow-xl rounded-md'type='text' placeholder='Enter your age..'></input>
        <button onClick={info.handlAdd} className='mx-5 px-2 py-2 rounded-md bg-cyan-600'>Add</button>
      </div>
      <div className="p-4 flex justify-center">
      <table className="table-auto w-full max-w-2xl text-left bg-white shadow-lg rounded-lg border border-gray-200">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="px-4 py-2 text-gray-700 font-semibold">Name</th>
            <th className="px-4 py-2 text-gray-700 font-semibold">LastName</th>
            <th className="px-4 py-2 text-gray-700 font-semibold">Age</th>
            <th className="px-4 py-2 text-gray-700 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {info.data.map((d,index)=>
            <tr key={index} className="hover:bg-gray-50 border-b border-gray-200">
            <td className="px-4 py-2">{d.name}</td>
            <td className="px-4 py-2">{d.lastname}</td>
            <td className="px-4 py-2">{d.age}</td>
            <td className="px-4 py-2">
              <button onClick={()=>{info.handleEdit(index)}} className='px-4 py-2 bg-green-600 rounded-xl'>Edit</button>
              <button onClick={()=>{info.handleDelete(index)}} className='px-2 py-2 bg-red-600 rounded-xl mx-5'>Delete</button>
              {/* <button onClick={()=>{info.handleEdit(index)}} className='px-4 py-2 bg-green-600 rounded-xl'>Edit</button> */}
              <button onClick={()=>{info.handleUpdate()}} className='px-2 py-2 bg-rose-200 rounded-xl'>Update</button>
            </td>
          </tr>
          )}
          
        </tbody>
      </table>
    </div>
      
    </div> 
  );
};

export default Crud;
