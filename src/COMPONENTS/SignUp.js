import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/SignUp.css';
import Navbar from './Navbar';
import { Ucontext } from './Usercontext';


const SignUp = () => {
  // userdetails,setuserdetails
  const context1=useContext(Ucontext);

  const SignUp_form = () =>{
    let email = document.getElementById('email-s').value;
    let password = document.getElementById('pass-s').value;
    let name = document.getElementById('name-s').value;
    let phone = document.getElementById('phone-s').value;
    
    let temp={"name":name,"password":password,"email":email,"phone":phone}
    context1.setuserdetails([...context1.userdetails,temp]);
  }
  return (
    <div>
      <Navbar/>
       <div className='form-signup'>
          Name:  <input type='text' placeholder='Enter your name' id="name-s"/> <br></br>
          Email:  <input type='text' placeholder='Enter your Email' id="email-s"/> <br></br>
          Phone:   <input type='text' placeholder='Enter your phone no' id = "phone-s"/> <br></br>
          Password:  <input type='text' placeholder='Create your password' id='pass-s'/> <br></br>


         
           <Link to='/Login'> <button onClick={SignUp_form} className='bt'>SignUp</button> </Link>
      

       </div>
    </div>
  )
}

export default SignUp
