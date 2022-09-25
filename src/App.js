import { useSelector, useDispatch } from 'react-redux';
import { asyncPlusOneAction, asyncMinusOneAction } from './store/counterReducer';
import { asyncGetUsers } from './store/usersReducer';
import './App.css';

function App() {
  const counter = useSelector(state => state.counterReduser.counter);
  const users = useSelector(state => state.usersReducer.users);
  const dispatch = useDispatch();

  const handlePlusOne = () => (
    dispatch(asyncPlusOneAction())
  );

  const handleMinusOne = () => (
    dispatch(asyncMinusOneAction())
  );

  const handleGetUsers = () => (
    dispatch(asyncGetUsers())
  );

  return (
    <div className="App">
      <h1 className='App__title'>Getting to know redux-saga</h1>

      <div className='App__counter'>
        {counter}
      </div>

      <div className='App__buttons'>
        <button 
          className='App__btn'
          onClick={() => handlePlusOne()}
        >Num++</button>

        <button 
          className='App__btn'
          onClick={() => handleMinusOne()}
        >Num--</button>

        <button
          className='App__btn'
          onClick={() => handleGetUsers()}
        >Show users</button>
      </div>

      <div>
        {users.length > 0
          ?
          <ul className='App__users'>
            {users.map(user => 
              <li 
              key={user.id} 
              className='App__user'
              >
                {user.name}
              </li>
            )}
          </ul>
          :
          <div>
            No users found...
          </div>
        }
      </div>
    </div>
  );
}

export default App;
