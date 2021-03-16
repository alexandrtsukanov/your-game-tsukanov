const initStore = {
  questions: [],
  answerStatus: null,
}

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const CHECK_ANSWER = 'CHECK_ANSWER';
export const CLOSE = 'CLOSE';

export const questionsThunk = () => {
  return async (dispatch, getStore) => {
    const fetchResult = await fetch('http://localhost:8080/questions');
    const finalFetchResult = await fetchResult.json();
    dispatch({
      type: SET_QUESTIONS,
      payload: finalFetchResult,
    })
  }
}

export default function reducer (store = initStore, { type, payload }) {
  switch(type) {
    case SET_QUESTIONS:
      return {...store, questions: payload}
    case CHECK_ANSWER:
      return {...store, answerStatus: payload}
    case CLOSE:
      return {...store, questions: store.questions.map(el => el.body.find(el => el._id === payload) ? {...el, body: el.body.map(el => el._id === payload ? {...el, isOpen: false} : el)} : el)}
    default:
      return store
  }
}
