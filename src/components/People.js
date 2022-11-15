import React, { useContext } from 'react';
import '../components/People.css';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';
import { Store } from '../Store';

const People = (props) => {
	const { dispatch } = useContext(Store);
	const deleteHandler = () => {
		dispatch({ type: 'DEL_USER', payload: props.index})
	}
	return (
		<div className='people-item'>
			<div className='logo'>
				<h1>{props.list.name[0].toUpperCase()}</h1>
			</div>
			<div className='details'>
				<Link to={`/persondetails/${props.index}`}>
					<h4>{props.list.name}</h4>
					<h5>{props.list.email}</h5>
				</Link>
			</div>
			<div className='btn-grp'>
				<Link to={`/edit/${props.index}`}>
					<BsGearFill size={20} style={{cursor: 'pointer', color: 'green'}} />
				</Link>
				<MdDelete size={20} style={{cursor: 'pointer', color: 'red'}} onClick={deleteHandler}/>
			</div>
      </div>
	)
}

export default People