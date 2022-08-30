import React, { useContext, useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../CSS/CreateBlog.css'
import { Link } from 'react-router-dom'
import { Ucontext } from './Usercontext'

const CreateBlog = () => {
 
   let contextimg = useContext(Ucontext);
   const Post_blog = () =>{

    let image  = document.getElementById('img-data');
    let url = URL.createObjectURL(image.files[0]);
    let title = document.getElementById('title-data').value;
    let desc = document.getElementById('text-area').value;


    let temp_obj = {"url":url,'title':title,'desc':desc}
    contextimg.setCard_data([...contextimg.card_data,temp_obj]); 
   }

   useEffect(()=>{

     contextimg.card_data.map((val)=>{
        let image  = document.getElementById('img-data');
        let url = URL.createObjectURL(image.files[0]);
        let title = document.getElementById('title-data').value;
        let desc = document.getElementById('text-area').value;


        
     })
    


   },[contextimg.edit_data])
 
   return (
    <>
    <Navbar/>

    

    <div className='create-blog'>
        <div className='choose-img'>
            <span>Upload Image: </span><input type='file' id='img-data'/>
        </div>
        <div className='title'>
            <span>Write Title: <input type='text' id='title-data'/></span>
        </div>
    </div>

    <div>
        <h1 style={{marginLeft:"6%"}}>Write Description about the Blog:</h1>
    </div>
  
    <div className='description'>
        
        <textarea id='text-area'/>
    </div>

    <div style={{textAlign:"center",marginTop:"28px"}}>
        <Link to='/' id='post-blog'>
            <button onClick={Post_blog}>POST YOUR BLOG</button>
        </Link>
    </div>

   

      
    </>
  )
  
}

export default CreateBlog
