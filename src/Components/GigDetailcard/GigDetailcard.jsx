import React from 'react'
import "./GigDetailcard"
import star from "../../public/img/star.png"
import heart from "../../public/img/heart.png"

const GigDetailcard = ({item}) => {
  return (
    <Link  to="/gig/123">
    <div className='gigdetailcard'>
        <img src={item.img}></img>
        <div className="info">
         <div className="user">
          <img src={item.pp} alt="" />
          <span>{item.username}</span>
         </div>
         <p>
            {item.desc}
         </p>
         <div className="star">
          <img src={star} alt="" />

         </div>

        </div>
        <hr/>
        <div className="detail">
            <img src={heart} alt="" />
            <div className="price">
            <span>Starting AT</span>
            <h2>${item.price}</h2>
            </div>

        </div>



    </div>
    </Link>
  )
}

export default GigDetailcard