import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../CSS/Navbar.css'
import { Ucontext } from './Usercontext'

const Navbar = () => {
 
  let context3 = useContext(Ucontext);
  let navigate = useNavigate();

  const setuniquepass = () =>{
        if(context3.secret_pass !== ''){
           alert('first signup the form....')
           navigate('/SignUp')
        }
        else{
          navigate('/createblog');
        }
  }

  return (
    <>
      <div className='navbar'>
        <div>
           <Link to='/' className='head-logo'><h1>BLOG</h1></Link> 
        </div>
        <div className='nav-link'>
            <ul>
            <Link to='/SignUp'> <li><button>SignUp</button></li></Link>


            <Link to='/Login'><li><button>Login</button></li></Link>
            <li><button onClick={setuniquepass}>Create New Blog</button></li>

            {/* <Link to='/CreateBlog' ><li><button onClick={setuniquepass}>Create New Blog</button></li></Link> */}

             
           
            </ul>
        </div>
       </div>

     
    </>
  )
}

export default Navbar
