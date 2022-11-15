import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import People from '../components/People';
import { Store } from '../Store';
import './PeoplesList.css';

const PeoplesList = () => {

  const { state } = useContext(Store);
  console.log(state)
  
  return (
    <div>
      <Navbar title="People's List"/>
      <div className='people-lists'>
        {
          state.map((list, index) => (
            <People list={list} key={index} index={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default PeoplesList