import React from 'react'
import { useState, useEffect  } from 'react'
import {json} from './data'

import './reveiw.css'
import {FaChevronLeft , FaChevronRight} from 'react-icons/fa'

export default function Reveiw()  {
  
const [index , setIndex] = useState (0);
const {title,image} = json [index]



const checkNumber = (number)=>{
  if (number >json.length-1){
    return 0
  }
  if (number < 0 ){
    return  json.length-1
  }
  return number
}
console.log(index)
  return (
  
    <article >
          <div className='reveiw'>

            <img src = {image} alt={title} />
             <div className='title'>
              <h4>{title}</h4>
             </div>
             
             <footer>

             <h1 onClick={()=>setIndex((index)=>{
              let newIndex = index + 1
               return checkNumber (newIndex)
            })}><FaChevronLeft className='color'/></h1>
              <h1 onClick={()=>setIndex((index)=>{
              let newIndex = index - 1
               return checkNumber (newIndex)
            })}><FaChevronRight  className='color'/></h1> 
           </footer> 
          
        </div>  
       
    </article>
  
  )
}
