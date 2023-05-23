import React from 'react'
import "./Gig.scss"
import star from "../../public/img/star.png"
import Slider from 'infinite-react-carousel';
import like from "../../public/img/like.png"
import dislike from "../../public/img/dislike.png"
import clock from "../../public/img/clock.png"
import recycle from "../../public/img/recycle.png"
import greencheck from "../../public/img/greencheck.png"
function Gig() {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className="breadcrums">
            Fiver Graphic  @ Design
          </span>
          <h1>I will create AI generated Art for you</h1>

          <div className="user">
            <img className='profilePicture'
            src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/6070b055529e3cb656ff41cb_shutterstock_1066433267.jpeg" alt="" />
            <span>Uzair</span>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>

          </div>
          <Slider   slidesToShow={1}   arrowScroll={1} className="slider">
       <img src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/6070b055529e3cb656ff41cb_shutterstock_1066433267.jpeg" alt="" />
       <img src="https://media.istockphoto.com/id/1357880802/photo/shot-of-an-attractive-young-businesswoman-standing-and-looking-contemplative-while-holding-a.jpg?b=1&s=170667a&w=0&k=20&c=762aRLVGmKoBQo-pU6Gww2Vr50XbEdS16-Npf1IVOjI=" alt="" />
       <img src="https://media.istockphoto.com/id/1357880802/photo/shot-of-an-attractive-young-businesswoman-standing-and-looking-contemplative-while-holding-a.jpg?b=1&s=170667a&w=0&k=20&c=762aRLVGmKoBQo-pU6Gww2Vr50XbEdS16-Npf1IVOjI=" alt="" />



          </Slider>
          <h2>About the seller</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, <br/>
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  <br/>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,  <br/>
            </p>
        <div className="seller">
          <h2>About the seller</h2>
          <div className="user">

            
            <img src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/6070b055529e3cb656ff41cb_shutterstock_1066433267.jpeg" alt="" />
          <div className="info">

            <span>john doe</span>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>
            <button>Contact me</button>
          </div>
          </div>
          <div className="boxes">
            <div className="items">
              <div className="item">
                <span className="title">From </span>
                <span className="desc">USA</span>
              </div>
              <div className="item">
                <span className="title">Member Since </span>
                <span className="desc">Nov 2022</span>
                
              </div>
              <div className="item">
                <span className="title">Avg respontime  Time</span>
                <span className="desc">4 hour</span>
                
              </div>
              <div className="item">
                <span className="title">last delivery </span>
                <span className="desc">1 day</span>
                
              </div>
              <div className="item">
                <span className="title">Language </span>
                <span className="desc">english</span>
                
              </div>
            </div>
            <hr/>
            <p>ences that are extremely painful. Nor again is there anyone who loves or pursues or desires to <br/>obtain pain of itself, because it is pain, but because occasionall"</p>
          </div>
        </div>
        <div className="review">
          <h2>Reviews</h2>
          <div className="item">
            <div className="user">
              <img  className="pp"  src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/6070b055529e3cb656ff41cb_shutterstock_1066433267.jpeg" alt="" />
             <div className="info">
              <span>john doe</span>
              <div className="country">
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                <span>United States</span>
              </div>
             </div>
           
            </div>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>
            
            <p>ences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
          <div className="helpful">
            <span>Helpfull</span>
            <img src={like} alt="" />
            <span>Yess</span>
            <img src={dislike}alt="" />
            <span>No</span>
          </div>
          </div>
          <hr/>
          <div className="item">
            <div className="user">
              <img className="pp" src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/6070b055529e3cb656ff41cb_shutterstock_1066433267.jpeg" alt="" />
             <div className="info">
              <span>john doe</span>
              <div className="country">
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                <span>United States</span>
              </div>
             </div>
           
            </div>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>
            
            <p>ences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
          <div className="helpful">
            <span>Helpfull</span>
            <img src={like} alt="" />
            <span>Yess</span>
            <img src={dislike}alt="" />
            <span>No</span>
          </div>
          </div>
          <hr/>
          <div className="item">
            <div className="user">
              <img className="pp" src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/6070b055529e3cb656ff41cb_shutterstock_1066433267.jpeg" alt="" />
             <div className="info">
              <span>john doe</span>
              <div className="country">
                <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" />
                <span>United States</span>
              </div>
             </div>
           
            </div>
            <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>
            
            <p>ences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
          <div className="helpful">
            <span>Helpfull</span>
            <img src={like} alt="" />
            <span>Yess</span>
            <img src={dislike}alt="" />
            <span>No</span>
          </div>
          </div>
        </div>
        </div>
        <div className="right">
           <div className="price">
          <h3>AI generated image</h3>
          <h2>$59.99</h2>
          </div>
           <p>
              i will create unique high quality image AI generated image based on the description you give to me
           </p>
           <div className="detail">
            <div className="item">
            <img src={clock} alt="" />
            <span>2 days Delivery</span>
            </div>
            <div className="item">
            <img src={recycle} alt="" />
            <span>3 days Revision</span>
            </div>
           </div>
           <div className="feature">
            <div className="item">
              <img src={greencheck} alt="" />
              <span>prompt writing</span>
            </div>
            <div className="item">
              <img src={greencheck} alt="" />
              <span>prompt writing</span>
            </div>
            <div className="item">
              <img src={greencheck} alt="" />
              <span>prompt writing</span>
            </div>
           </div>
           <button>Continue</button>
          

        </div>
      </div>
    </div>
  )
}

export default Gig
