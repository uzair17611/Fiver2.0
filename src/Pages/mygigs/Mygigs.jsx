import React from 'react'
import "./Mygigs.scss"
import deleteIcon from "../../public/img/delete.png"
import { Link } from 'react-router-dom'






const Mygigs = () => {
  return (
    <div className='Mygigs'> 
    <div className="container">
      <div className="title">
        <h1>gig</h1>
        <Link  to="/add">

         <button>Add new gig</button> 
        </Link>
         </div>
        <div>

          <table>
            <tr>
              <th>Image</th>
              <th>Price</th>
              <th>Title</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img className='img'   src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?b=1&s=170667a&w=0&k=20&c=n5AHUpXa0UuMkN_Spug8-UMOiz4_-IrnjwkWe34ICiA=" alt="" />
              </td>
              <td>Gig1</td>
              <td>Gig2</td>
              <td>Gig3</td>
              <td>
                <img className='delete' src={deleteIcon} alt="" />
              </td>
            </tr>
            <tr>
              <th>Image</th>
              <th>Price</th>
              <th>Title</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img className='img'   src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?b=1&s=170667a&w=0&k=20&c=n5AHUpXa0UuMkN_Spug8-UMOiz4_-IrnjwkWe34ICiA=" alt="" />
              </td>
              <td>Gig1</td>
              <td>Gig2</td>
              <td>Gig3</td>
              <td>
                <img className='delete' src={deleteIcon} alt="" />
              </td>
            </tr>
            <tr>
              <th>Image</th>
              <th>Price</th>
              <th>Title</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img className='img'   src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?b=1&s=170667a&w=0&k=20&c=n5AHUpXa0UuMkN_Spug8-UMOiz4_-IrnjwkWe34ICiA=" alt="" />
              </td>
              <td>Gig1</td>
              <td>Gig2</td>
              <td>Gig3</td>
              <td>
                <img className='delete' src={deleteIcon} alt="" />
              </td>
            </tr>
            <tr>
              <th>Image</th>
              <th>Price</th>
              <th>Title</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img className='img'   src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?b=1&s=170667a&w=0&k=20&c=n5AHUpXa0UuMkN_Spug8-UMOiz4_-IrnjwkWe34ICiA=" alt="" />
              </td>
              <td>Gig1</td>
              <td>Gig2</td>
              <td>Gig3</td>
              <td>
                <img className='delete' src={deleteIcon} alt="" />
              </td>
            </tr>
            <tr>
              <th>Image</th>
              <th>Price</th>
              <th>Title</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img className='img'   src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?b=1&s=170667a&w=0&k=20&c=n5AHUpXa0UuMkN_Spug8-UMOiz4_-IrnjwkWe34ICiA=" alt="" />
              </td>
              <td>Gig1</td>
              <td>Gig2</td>
              <td>Gig3</td>
              <td>
                <img className='delete' src={deleteIcon} alt="" />
              </td>
            </tr>
            <tr>
              <th>Image</th>
              <th>Price</th>
              <th>Title</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img className='img'   src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?b=1&s=170667a&w=0&k=20&c=n5AHUpXa0UuMkN_Spug8-UMOiz4_-IrnjwkWe34ICiA=" alt="" />
              </td>
              <td>Gig1</td>
              <td>Gig2</td>
              <td>Gig3</td>
              <td>
                <img className='delete' src={deleteIcon} alt="" />
              </td>
            </tr>
          </table>
        </div>


     
    </div>
    
    </div>
  )
}

export default Mygigs