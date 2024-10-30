import React, { useState } from 'react'
import Data from '../components/Quizquestion';

export const QuizContext = React.createContext();

export const QuizContextProvider=({children})=>{

    const [next,setnext]=useState(0);
    const [score,setScore]=useState(0);
    const[selectedindex,setselectedindex]=useState(null);
    const[isCorrect,setisCorrect]=useState(null);

    const clickNext=()=>{
        handlescore();
        if(next<Data.length-1){
            setnext(next+1)
            setisCorrect(true);

        }else{
            setisCorrect(false);;

        }
        

    }
    const handlescore=()=>{
        if(selectedindex===Data[next].answer){
            setScore(score+1)
            setisCorrect(true);
        }else{
            setisCorrect(false)
        }
    }
    return(
        <QuizContext.Provider value={{next,clickNext,score,setselectedindex,isCorrect,setisCorrect,selectedindex}}>
            {children}
        </QuizContext.Provider>
    )

}