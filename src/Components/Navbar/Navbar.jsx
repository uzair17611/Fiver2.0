import React, { useEffect } from 'react'
import "./Navbar.scss"
import { useState } from 'react';
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const [Active ,SetActive] = useState(false);
    const [open ,Setopen] = useState(false);


    const isActive =()=>{
        window.scrollY > 0 ?  SetActive( true) : SetActive(false)

    }

    const {pathname} =useLocation()

    const currentuser={
        id :1,
        userName:"john doe",
        isSeller:true
    }

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
                <img  src="https://images.unsplash.com/photo-1577974291737-faf660945d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGV0dGVyJTIwYXxlbnwwfHwwfHw%3D&w=1000&q=80" alt='image'></img>
                <span>{currentuser.userName}</span>
                {open && <div className="options">
                {currentuser ?.isSeller  && (
                   <>
                  <Link to='MYgigs' className='link'>Gigs</Link>
                  <Link to='/add' className='link'>Add New Gigs</Link>
                  </>

                )}
                <Link to="/order" className='link'>order</Link>
                <Link to="/massages" className='link'>Messeges</Link>
                <Link to="/" className='link'>Logout</Link>
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