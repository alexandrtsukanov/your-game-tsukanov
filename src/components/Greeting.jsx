import{ useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import{ NAME_VALUE, SET_USER } from '../redux/userReducer.js'

function Greeting() {

  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector(store => store.user.name);
  const nameValue = useSelector(store => store.user.nameValue);
  
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: SET_USER,
      payload: nameValue
    });
    dispatch({
      type: NAME_VALUE,
      payload: '',
    });
    history.push('/game')
  }
  const nameHandler = ({ target }) => {
    dispatch({
      type: NAME_VALUE,
      payload: target.value
    })
  }

  return (
    <div className="comp">

      <h3>Hello! Welcome to our game! Please, enter your name into a field below to begin. Wish you good luck!</h3>

      <form onSubmit={submitHandler}>
        <div>
        <label>Enter uour name:</label>
        <input onChange={nameHandler} value={nameValue} name="name"/>
        </div>

        <div>
        <button type="submit">Begin</button>
        </div>
      </form>
    </div>
  );
}

export default Greeting;
