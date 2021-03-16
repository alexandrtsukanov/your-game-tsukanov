import{ useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import{ ANSWER_VALUE, SET_ANSWER, ADD_SCORE} from '../redux/userReducer.js';
import{ CHECK_ANSWER } from '../redux/questionReducer.js';

function Question() {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const questions = useSelector(store => store.question.questions);
  const answerStatus = useSelector(store => store.question.answerStatus);
  const answerValue = useSelector(store => store.user.answerValue);
  const answer = useSelector(store => store.user.answerValue);
 
  const questionTopic = questions.find(el => el.body.find(el => el._id === params.id));
  const question = questionTopic.body.find(el => el._id === params.id);

  const clickAnswerHandler = () => {
    dispatch({
      type: SET_ANSWER,
      payload: answerValue
    });
    if (answer === question.answer) {
      dispatch({
        type: CHECK_ANSWER,
        payload: 'right'
      });
      dispatch({
        type: ADD_SCORE,
        payload: question.price
      })
    } else {
        dispatch({
          type: CHECK_ANSWER,
          payload: 'wrong'
        });
        dispatch({
          type: ADD_SCORE,
          payload: 0
        })
      } 
      dispatch({
        type: ANSWER_VALUE,
        payload: ''
      });
    }
    const answerHandler = ({ target }) => {
      dispatch({
        type: ANSWER_VALUE,
        payload: target.value
      })
    }
    console.log(answerStatus)

  return (
    <div className="comp">
       {question.question}

      { answerStatus ?
       (answerStatus === 'right' ?
      <>
      Congrats! You're right!
      <div onClick={() => history.push('/game')}>Go on!</div>  
      </> :
      <>
      Your answer is wrong! Correct answer is {question.answer}
      <div onClick={() => history.push('/game')}>Go on!</div> 
      </>) :
      null }
       
      <input onChange={answerHandler} value={answerValue}/>
      <button onClick={clickAnswerHandler}>Answer</button>

    </div>
  );
}

export default Question;
