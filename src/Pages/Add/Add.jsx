import React from 'react'
import "./Add.scss"


const Add = () => {
  return (
    <div className='add'> 
    <div className="container">
      <h1>Add new gig</h1>
      <div className="sections">
        <div className="left">
           <label htmlFor="">Title</label>
           <input type="text"  placeholder='i will something i am really good at'/>

           <select name="cats" id="cats">
             <option value="design">design</option>
             <option value="Web DEV">Web dev</option>
             <option value="Animation">Animation</option>
             <option value="Music">Music</option>
           </select>
           <label htmlFor="">File input</label>
           <input type="file" />
           <label htmlFor="">upload image</label>
           <input type="file"  multiple />
           <label htmlFor="">description</label>
           <textarea name="" id="" cols="30" rows="10"  placeholder='Brief introduction of customer service'></textarea>
      <button>Create</button>
        </div>
        <div className="right"> 
         <label htmlFor="">Service Text</label>
         <input type="text"  placeholder='please enter '/>
         <label htmlFor="">short Description</label>
         <input type="text"  placeholder='please enter '/>
         <label htmlFor="">Delivery Time(e.g 3 days)</label>
         <input type="number"  min={1}/>
         <label htmlFor="">Revision Number</label>
         <input type="number"  min={1}/>
         <label htmlFor="">Add feature</label>
         <input type="text"  placeholder='page design '/>
         <input type="text"  placeholder='file upload '/>
         <input type="text"  placeholder='setting up a domain '/>
         <input type="text"  placeholder='hosting '/>
         <label htmlFor="">Price</label>
         <input type="number"  min={1}/>
        </div>
      </div>
    </div>
    
    
    </div>
  )
}

export default Add