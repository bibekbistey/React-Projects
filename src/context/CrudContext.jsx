import React, { useState } from 'react'

export const CrudContext = React.createContext();

export const CrudContextProvider=({children})=>{
    const[data,setdata]=useState([]);

    const[name,setname]=useState("");
    const[lastname,setlastname]=useState("");
    const[age,setAge]=useState("");
    const[update,setupdate]=useState(null);

    const handlename=(e)=>{
        setname(e.target.value)
    }
    const handlelastname=(e)=>{
        setlastname(e.target.value)
    }
    const handleage=(e)=>{
        setAge(e.target.value)
    }

    const handlAdd=()=>{
        const bibek={name,lastname,age};
        setdata([...data,bibek]);
        console.log("data",data)
        setname("");
        setlastname("");
        setAge("");
    }

    const handleEdit=(index)=>{
        const edited=data[index];
        if(edited){
            setname(edited.name);
            setlastname(edited.lastname);
            setAge(edited.age);
            setupdate(index);

        }
    }

    const handleUpdate=()=>{
        if(update!==null){
            const updatedData=[...data];
            updatedData[update]={name,lastname,age};
            setdata(updatedData);
            setupdate(null);
            setname("");
            setlastname("");
            setAge("");
        }
    }

    const handleDelete=(index)=>{
        setdata(data.filter((_,i)=>i!==index))
    }

    return(
        <CrudContext.Provider value={{data,handleage,handlename,handlelastname,name,lastname,age,handlAdd,handleDelete,handleEdit,handleUpdate}}>
            {children}
        </CrudContext.Provider>
    )

}