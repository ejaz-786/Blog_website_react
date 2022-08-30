import React, { useContext } from 'react'
import '../CSS/ReadSection.css'
import Navbar from './Navbar'
import { Ucontext } from './Usercontext'

const ReadSection = () => {
 
  let contextimg = useContext(Ucontext); 


  return (
    <>
      <Navbar/>
      <div className='readsection-div'>
          {
            contextimg.readdata.map((val)=>{
              return(
                <>
                   <h1>{val.title}</h1>
                  <img src={val.url}  alt='' id='read-img'/>
                  <p>{val.desc}</p>

                  
                </>
              )
            })
          }
             
      </div>
    </>
  )
}

export default ReadSection
