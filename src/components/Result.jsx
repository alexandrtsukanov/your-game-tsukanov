import { useSelector } from 'react-redux'
function Result () {

  const score = useSelector(store => store.user.score)

  return (
    <div className="comp">
      You finished the game.
      Your score is {score} points
    </div>
  );
}

export default Result;
