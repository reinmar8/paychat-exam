import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { FaUserFriends, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className='navbar'>
        <h3>{props.title}</h3>
        {
            props.title === "People's List" ? 
              <Link to='/add'>
                <FaPlusSquare style={{color: 'white', cursor:'pointer'}} size={20}/>
              </Link>
            : props.title === "Person Details" ? 
              <Link to={`/friendslist/${props.id}`}>
                <FaUserFriends style={{color: 'white', cursor:'pointer'}} size={20}/>
              </Link>
            : props.title === "Friends List" || 'Add a person' ? 
              <Link to={'/'}>
                <FaHome style={{color: 'white', cursor:'pointer'}} size={20} />
              </Link>
            : ''
        }
    </div>
  )
}

export default Navbar