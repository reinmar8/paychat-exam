import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Store } from '../Store';
import './PersonDetails.css'

const PersonDetails = () => {
	const params = useParams();
	const { id } = params;
	const { state } = useContext(Store);
	console.log(state[id]);
  return (
    <div className='details-container'>
			<Navbar title='Person Details' id={id}/>
			<div className='details'>
				<h4>{state[id].name}</h4>
				<p>Name</p>
				<h4>{state[id].email}</h4>
				<p>Email Address</p>
				<h4>{state[id].mobile}</h4>
				<p>Mobile Number</p>
				<h4>{state[id].address}</h4>
				<p>Address</p>
			</div>
		</div>
  )
}

export default PersonDetails