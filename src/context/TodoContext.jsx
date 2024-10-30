import React, { Children, useState } from 'react'

export const TodoContext=React.createContext();

export const TodoContextProvider=({children})=>{
    const [task,setTask]=useState([]);
    const [added,setAdded]=useState("")

    const handlechange=(e)=>{
        setAdded(e.target.value);
        // setTask('');

    }

    const addtask=()=>{
        setTask([...task,added]);
        setAdded('');
        
    }

    const deletetask=(index)=>{
        setTask(task.filter((_,i)=>i!==index));

    }

    return(
        <TodoContext.Provider value={{task,added,addtask,handlechange,deletetask}}>
            {children}
        </TodoContext.Provider>
    )


}