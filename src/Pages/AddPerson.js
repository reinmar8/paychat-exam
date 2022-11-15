import React, { useContext, useReducer } from 'react';
import Navbar from '../components/Navbar';
import { Store } from '../Store';
import './AddPerson.css';
import { useNavigate } from 'react-router-dom';

const initialState = {
	name: '',
	email: '',
	mobile: '',
	address: '',
	friends: []
}

const reducer = (state, action) => {
	switch(action.type) {
		case 'HANDLE_INPUT' :
			return {...state, [action.payload.name]:action.payload.value}
		default :
			return state;
	}
}

const AddPerson = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const { state:ctxState, dispatch: ctxDispatch } = useContext(Store);
	const navigate = useNavigate()

	const handleChange = (e) => {
		dispatch({ type: 'HANDLE_INPUT', payload:{name: e.target.name, value: e.target.value}});
		console.log(state);
	}

	const submitHandler = (e) => {
		e.preventDefault();
		ctxDispatch({ type: 'ADD_USER', payload: state});
		navigate('/');
	}
  return (
  	<div className='add-container'>
			<Navbar title={'Add a person'}/>
			<form onSubmit={submitHandler}>
				<input type='text' name='name' placeholder='Enter Name' onChange={handleChange} required/>
				<input type='text' name='email' placeholder='Enter Email Address' onChange={handleChange} required/>
				<input type='text' name='mobile' placeholder='Enter Mobile Number' onChange={handleChange} required/>
				<input type='text' name='address' placeholder='Enter Address' onChange={handleChange} required/>
				<button>Submit</button>
			</form>
    </div>
  )
}

export default AddPerson