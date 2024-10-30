import React, { useContext } from 'react'
import Quizdata from '../components/Quizquestion'
import { QuizContext } from '../context/QuizContext'

const Quiz = () => {
  const dt=useContext(QuizContext)
  return (
    <div className='max-w-[1200px] h-[90vh] mx-auto bg-slate-300 '>
      <div className='flex justify-center p-5'>
        <h1 className='font-mono text-xl font-bold'>Lets play quiz</h1>
      </div>
      {/* Question and options */}
      <div className='text-center'>
        <div className='border w-[80%] mx-auto p-5 bg-gray-400 shadow-md'>
        <h1 className='text-lg font-mono font-bold'>{Quizdata[dt.next].question}</h1>
        </div>
        <div className='mt-5'>
          <ul>
            {Quizdata[dt.next].option.map((quiz,index)=>
            <li key={index} onClick={()=>{dt.setselectedindex(index+1)}} className={`w-[50%] mx-auto mb-4 p-2 border border-black
              ${dt.selectedindex === index + 1 && dt.isCorrect === true ? 'bg-green-400' : ''}
              ${dt.selectedindex === index + 1 && dt.isCorrect === false ? 'bg-red-400' : 'bg-lime-300'}
          `}>
              {quiz}
            </li>)}
          </ul>
        </div>
        <div className='mt-4'>
          <button onClick={()=>{dt.clickNext()}} className='px-3 py-2 bg-cyan-500 rounded-xl'>Next</button>
        </div>
        
        

      </div>
      <h1>Score:{dt.score}</h1>
    </div>
  )
}

export default Quiz