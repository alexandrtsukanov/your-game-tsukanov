import Game from './components/Game';
import Greeting from './components/Greeting';
import Question from './components/Question';
import Result from './components/Result';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CHECK_ANSWER, CLOSE, questionsThunk } from './redux/questionReducer.js';

function App() {

  const dispatch = useDispatch();
  const name = useSelector(store => store.user.name);
  const score = useSelector(store => store.user.score);

  useEffect(() => {
    dispatch(questionsThunk());
  }, [])

  return (
    <div className="App">
      Playing:{name}: Score:{score}
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/question/:id">
          <Question />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/">
          <Greeting />
        </Route>
      </Switch>
      <a href="/">Home</a>
    </div>
  );
}

export default App;
