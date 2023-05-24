import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'



const Message = () => {
  return (
    <div  className='message'>
     <div className="container">
     <span className="breadsrum">
    <Link  to ="/messeges"> Messeges </Link>  John DOE

     </span>
     <div className="messeges">
      <div className="item">
        <img src="https://res.cloudinary.com/demo/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/f_auto/lady.png" alt="" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br/>
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br/>
          sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="item  owner">
        <img src="https://res.cloudinary.com/demo/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/f_auto/lady.png" alt="" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br/>
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br/>
          sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="item">
        <img src="https://res.cloudinary.com/demo/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/f_auto/lady.png" alt="" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br/>
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br/>
          sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="item  owner">
        <img src="https://res.cloudinary.com/demo/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/f_auto/lady.png" alt="" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br/>
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br/>
          sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="item">
        <img src="https://res.cloudinary.com/demo/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/f_auto/lady.png" alt="" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br/>
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br/>
          sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="item  owner">
        <img src="https://res.cloudinary.com/demo/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/f_auto/lady.png" alt="" />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br/>
         in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,<br/>
          sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
     </div>

     
      <div className="write">
        <hr/>
        <textarea name=""  placeholder ="write a messege" id="" cols="30" rows="10"></textarea>
       <button>send</button>
    
     </div>

     </div>

    </div>
  )
}

export default Message