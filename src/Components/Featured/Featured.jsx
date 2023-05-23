import React from 'react'
import "./Featured.scss"
import {AiOutlineSearch} from "react-icons/ai"
import men1 from "../../public/img/men1.png"

const Featured = () => {
  return (
    <div className='feature'>
        <div className="container">
       <div className="left">
             <h1> Finding the perfect freLance Service for your bussiness</h1>
             <div className="search">
             <div className="searchInput">
               <AiOutlineSearch/> 
              <input type="text"  placeholder='try building mobile app'/>


             </div>

 <button  src="AiOutlineSearch">Search</button>
 </div>
 <div className="popular">
    <button>Web design</button>
    <button>App design</button>
    <button>Ai services</button>
    <button>logo sedign</button>
 </div>
             



       </div>
       <div className="right">
     <img src={men1} alt=''></img>

       </div>

         
        </div>




    </div>
  )
}

export default Featured