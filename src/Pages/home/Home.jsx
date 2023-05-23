import React from 'react'
import "./Home.scss"
import Featured from '../../Components/Featured/Featured'
import TrustedBy from '../../Components/TrustedBy/TrustedBy'
import Slid from '../../Components/Slider/Slid'
import Gigcard from '../../Components/gigcard/Gigcard'
import { cards } from '../../Data';
import { projects } from '../../Data'
import check from '../../public/img/check.png';
import Projectcard from '../../Components/Projectcard/Projectcard'


const Home = () => {
  return (
    <div className='home'>


      <Featured/>
      <TrustedBy/>
      <Slid  slidesToShow ={5} arrowsScroll={5} >
     {cards.map((card)=>{
         return <Gigcard   key={card.id}  item={(card)}/>

})} 
      </Slid>
      <div className='features'>
        <div className='container'>
          <div className='item'>
            <h1>A whole world of Freelance talent at your fingerprints</h1>
            <div className="title">
           
              <img src={check} alt="Check" />
             The Best of every budget
           
            <p> find the highest quality at every price point .No hourly rates, just project base pricing</p>
            </div>
          <div className='item'>
           
            <div className="title">
              <img src={check} alt="Check" />
              The Best of every budget
            </div>
            <p> find the highest quality at every price point .No hourly rates, just project base pricing</p>
          </div>
          <div className='item'>
           
            <div className="title">
              <img src={check} alt="Check" />
              The Best of every budget
            </div>
            <p> find the highest quality at every price point .No hourly rates, just project base pricing</p>
          </div>
          <div className='item'>
         
            <div className="title">
              <img src={check} alt="Check" />
              The Best of every budget
            </div>
            <p> find the highest quality at every price point .No hourly rates, just project base pricing</p>
          </div>
          </div>

          <div className="item">
            <video src controls></video>
          </div>
        </div>
      </div>


      <div className='features  dark'>
        <div className='container'>
          <div className='item'>
            <h1>Fiver Freelance</h1>
            <div className="title">
           
              <img src={check} alt="Check" />
             The Best of every budget
           
            <p> find the highest quality at every price point .No hourly rates, just project base pricing</p>
            </div>
          <div className='item'>
           
            <div className="title">
              <img src={check} alt="Check" />
              The Best of every budget
            </div>
            <p> find the highest quality at every price point .No hourly rates, just project base pricing</p>
          </div>
          <div className='item'>
           
            <div className="title">
              <img src={check} alt="Check" />
              The Best of every budget
            </div>
            <p> find the highest quality at every price point .No hourly rates, just project base pricing</p>
          </div>
          <div className='item'>
         
            <div className="title">
              <img src={check} alt="Check" />
              The Best of every budget
            </div>
            <p> find the highest quality at every price point .No hourly rates, just project base pricing</p>
          </div>
          <button>Explore the Fiverr Business</button>
          </div>
          
          <div className="item1">
          <img  src="data:image/jpeg;base64,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"></img>
          </div>
        </div>

        
      </div>
      <Slid  slidesToShow ={4} arrowsScroll={4} >
     {projects.map((card)=>{
         return <Projectcard   key={card.id}  item={(card)}/>

})} 
      </Slid>
    </div>
  )
}

export default Home