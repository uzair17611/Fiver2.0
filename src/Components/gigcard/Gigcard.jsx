import React from 'react'
import {Link} from "react-router-dom"
import "./Gigcard.scss"
const Gigcard = ({item}) => {
  return (
    <Link to="gigs?cat=design">
    <div className='gigcard  '>
        <img src={item.img} alt="" />
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>



    </div>
    </Link>
  )
}

export default Gigcard