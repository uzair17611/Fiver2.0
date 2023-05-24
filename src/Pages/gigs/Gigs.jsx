import React from 'react'
import "./Gigs.scss"
import down from "../../public/img/down.png"
import { useState } from 'react'
import {gigs} from "../../Data/"
import Projectcard from '../../Components/Projectcard/Projectcard'

const Gigs = () => {
  const [open, setopen] =useState(false)
  const [sort ,setsort] =useState("sales")

  const SortedAt=(type)=>{
      setsort(type);
      setopen(false);

  }
  return (
    <div className='Gigs'>
    <div className="container">
 <span className="breadscrums">
  Fiver  @  Graphic Design
 </span>
<h1>
  AI  Artist
</h1>
<p>Explore the boundries of arts and technology with Fiver AI arts</p>
<div className="menu">
  <div className="left">
  <span>budget</span>
  <input type="text"  placeholder='min' />
  <input type="text"  placeholder='max' />
  <button>Apply</button>
  </div>
  <div className="right">
<div className="sort">Sort by</div>
<div className="sortType">{sort === "sales"?  "Best selling": "Newest"}</div>
<img src={down} alt=""   onClick={()=>{
     setopen(!open)
}} />

 { open && (<div className="rightmenu">

 
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => SortedAt("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => SortedAt("sales")}>Best Selling</span>
                  )}
                
              </div>
            
</div>

)}
  </div>
</div>
<div className="cards">
{
  gigs.map((gig)=>{
    return <Projectcard  key={gig.id}   item={gig} />
  })
}
</div>
    </div>


    </div>
  )
}

export default Gigs