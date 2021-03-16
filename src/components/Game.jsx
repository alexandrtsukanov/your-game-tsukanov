import { useEffect, useCallback } from 'react'
import { CHECK_ANSWER, CLOSE, questionsThunk } from '../redux/questionReducer.js'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Game() {
  const questions = useSelector(store => store.question.questions);
  const dispatch = useDispatch();
  const history = useHistory();

  const questionHandler = (param) => {
    // event.target.style.color = 'red';
    // console.log(event)
    dispatch({
      type: CLOSE,
      payload: param,
    })
    history.push(`/question/${param}`);
  }

  useEffect(() => {
    // dispatch(questionsThunk());
    dispatch({
      type: CHECK_ANSWER,
      payload: null,
    });
  }, [])

  const finishHandler = () => {
    history.push('/result')
  }

  return (
    <div className="comp">
      <h1>Game</h1>
      {questions.map(({ topic, body, _id }) => (
        <table>
          <tbody>
        <tr key={_id}>
          <td>{topic}</td>
          
            {body.map(({ price, isOpen, _id }) => (
              <td onClick={() => questionHandler(_id, )} style={{color: isOpen ? null : 'red' }} key={_id}><td>
                  {price}
                  </td>
                </td>
            ))}       
        </tr>

        </tbody>
        </table>

      ))}
      <button onClick={finishHandler}>Finish a game</button>
     </div>
  );
}

export default Game;
