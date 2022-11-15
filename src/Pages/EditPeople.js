import React, { useContext, useReducer } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import './EditPeople.css';

const reducer = (state, action) => {
	switch(action.type) {
		case 'HANDLE_INPUT' :
			return {...state, [action.payload.name]:action.payload.value};
		default :
			return state;
	}
}

const EditPeople = () => {
    const params = useParams();
	const { id } = params;
	const { state,dispatch } = useContext(Store);
    const navigate = useNavigate();

    const [ Rdxstate, Rdxdispatch ] = useReducer(reducer, state[id]);
    console.log(Rdxstate);
    console.log(id);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({ type: 'EDIT_USER', payload: {id: id, value: Rdxstate}});
        navigate('/');
    }

    const handleChange = (e) => {
		Rdxdispatch({ type: 'HANDLE_INPUT', payload:{name: e.target.name, value: e.target.value}});
        console.log(Rdxstate)
	}
  return (
    <div className='edit-people-container'>
        <Navbar title='Edit People'/>
        <form onSubmit={submitHandler}>
				<input type='text' name='name' placeholder='Enter Name' onChange={handleChange} required value={Rdxstate.name}/>
				<input type='text' name='email' placeholder='Enter Email Address' onChange={handleChange} required value={Rdxstate.email}/>
				<input type='text' name='mobile' placeholder='Enter Mobile Number' onChange={handleChange} required value={Rdxstate.mobile}/>
				<input type='text' name='address' placeholder='Enter Address' onChange={handleChange} required value={Rdxstate.address}/>
				<button>Submit</button>
		</form>
    </div>
  )
}

export default EditPeople