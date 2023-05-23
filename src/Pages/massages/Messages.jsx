import React from 'react';
import "./Messages.scss";
import deleteIcon from "../../public/img/delete.png";
import { Link } from 'react-router-dom';
import message from "../../public/img/message.png";

const Messages = () => {
  const currentuser = {
    id: 1,
    userName: "john doe",
    isSeller: true
  };

  const messageText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat`;
  
  return (
    <div className='message'> 
      <div className="container">
        <div className="title">
  
        </div>
        <div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className='active'>
              <td>John doe</td>
              <td></td>
              <td>1 aug 2010</td>
              <td>
                <button>Mark as read</button>
              </td>
            </tr>
            <tr className='active'>
              <td>John doe</td>
              <td>
                <Link to="message/123"  className="link">{messageText.substring(0, 100)}.... </Link>
              </td>
              <td>1 aug 2010</td>
              <td>
                <button>Mark as read</button>
              </td>
            </tr>
            <tr>
              <td>John doe</td>
              <td>
                <Link to="message/123"  className="link">{messageText.substring(0, 100)}....</Link>
              </td>
              <td>1 aug 2010</td>
            </tr>
            <tr>
              <td>John doe</td>
              <td>
                <Link to="message/123"  className="link">{messageText.substring(0, 100)}....</Link>
              </td>
              <td>1 aug 2010</td>
            </tr>
            <tr>
              <td>John doe</td>
              <td>
                <Link  to="message/123" className="link">{messageText.substring(0, 100)}....</Link>
              </td>
              <td>1 aug 2010</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;