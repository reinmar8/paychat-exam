import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Store } from '../Store';
import './FriendsList.css';

const FriendsList = () => {
	const params = useParams();
	const { id } = params;
	const { state } = useContext(Store);
	console.log(state[id].friends);

  return (
    <div className='friends-list-container'>
			<Navbar title={'Friends List'}/>
			{
				state[id].friends.length === 0 ? <h3>No Friends</h3>
				:
				<ul>
					{
						state[id].friends.map((item, index) => (
							<li key={index}>
								{item}
							</li>
						))
					}
				</ul>
			}
			
			
    </div>
  )
}

export default FriendsList