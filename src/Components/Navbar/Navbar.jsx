import React, { useEffect } from 'react'
import "./Navbar.scss"
import { useState } from 'react';
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';
import noavatar from  "../../public/img/noavatar.jpg"
import newRequest from '../../Utilis/newRequest';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [Active ,SetActive] = useState(false);
    const [open ,Setopen] = useState(false);

const navigate =useNavigate()
    const isActive =()=>{
        window.scrollY > 0 ?  SetActive( true) : SetActive(false)

    }

    const HandleSubmit =  async()=>{
          try {
         await   newRequest.post("/auth/logout")
         localStorage.setItem("currentUser" ,null)
         navigate("/")
          } catch (error) {
            console.log(err)
          }

    }

    const {pathname} =useLocation()

    const currentuser= JSON.parse(localStorage.getItem("currentUser" ,))

    useEffect(()=>{
     window.addEventListener("scroll" , isActive)

     return()=>{
      window.removeEventListener("scroll",isActive)
     }
    },[])
  return (
    <div className={Active  || pathname !== "/" ? "navbar Active" :  "navbar"}>
    <div className="container">
     <div className="logo">
        <Link to='/'  className='link'>  
        <span className='text'> fiverr</span>
        <span className='dot'> . </span>
        </Link>
     </div>
     <div className="links">
        <span className='text'> fiverr business</span>
        <span className='dot'> Explore</span>
        <span className='text'>English </span>
        <span className='dot'> Sign in </span>
       {!currentuser ?.isSeller && <span className='text'> Become a seller</span>}
        { !currentuser    &&   <button>Join</button>}
        {currentuser && (
            <>
            <div className="user"  onClick={()=>Setopen(!open)}>
                <img  src={currentuser.img || noavatar} alt='image'></img>
                <span>{currentuser.username}</span>
                {open && <div className="options">
                {currentuser ?.isSeller  && (
                   <>
                  <Link to='MYgigs' className='link'>Gigs</Link>
                  <Link to='/add' className='link'>Add New Gigs</Link>
                  </>

                )}
                <Link to="/order" className='link'>order</Link>
                <Link to="/massages" className='link'>Messeges</Link>
                <Link to="/" className='link'  onClick={HandleSubmit}>
                    
                    Logout</Link>
                </div>}
            </div>
            </>
        )}
        </div>



    </div>
    {(Active ||  pathname !== "/" ) &&
 <> 
        <hr/>
    <div className="menu">
        <Link className='link' to="/">
            Graphic and design
        
        </Link>
        <Link className='link' to="/">
            Video and Animation
        
        </Link>
        <Link className='link' to="/">
            Wrighting and translation
        
        </Link>
        <Link className='link' to="/">
           Ai service
        
        </Link>
        <Link className='link' to="/">
            Digital Marketing
        
        </Link>
        <Link className='link' to="/">
           Musin and Audio
        
        </Link>
        <Link className='link' to="/">
           Business
        
        </Link>
        <Link className='link' to="/">
           Lifestyle
        
        </Link>
       
    </div>
    <hr/>
    </>
    }
    
    </div>
  )
}

export default Navbar