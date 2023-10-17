import React,{useState} from 'react'

import  {BiSolidDownArrow,BiSolidUpArrow} from 'react-icons/bi'

const Question = ({title,info}) => {
    const [showInfo, setShowInfo] =  useState(false)

  return (
    <article className=' h-min bg-white rounded-xl  shadow-lg mb-5 w-[80%] mx-[10%] p-6 '>

        <header onClick={()=> setShowInfo(!showInfo)}  className='flex justify-between items-center' >
            <p className='font-semibold text-xl font-Poppins'>{title}</p>
            {showInfo ? <BiSolidUpArrow/> :<BiSolidDownArrow/> }
        </header>

        { showInfo &&<p className='mt-2 p-1 mr-4'> {info}  </p> }
    </article>
  )
}

export default Question