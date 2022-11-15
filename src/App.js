
import {Routes, Route} from 'react-router-dom';
import AddPerson from './Pages/AddPerson';
import EditPeople from './Pages/EditPeople';
import FriendsList from './Pages/FriendsList';
import PeoplesList from './Pages/PeoplesList';
import PersonDetails from './Pages/PersonDetails';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Routes>
          <Route path='/' element={ <PeoplesList/> }/>
          <Route path='/persondetails/:id' element={ <PersonDetails/>}/>
          <Route path='/friendslist/:id' element={<FriendsList />} />
          <Route path='/add' element={<AddPerson />} />
          <Route path='/edit/:id' element={<EditPeople />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
