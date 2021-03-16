const initStore = {
  name: '',
  nameValue: '',
  score: 0,
  answer: '',
  answerValue: ''
}

export const NAME_VALUE = 'NAME_VALUE';
export const SET_USER = 'SET_USER';
export const ANSWER_VALUE = 'ANSWER_VALUE';
export const SET_ANSWER = 'SET_ANSWER';
export const ADD_SCORE = 'ADD_SCORE';

export default function reducer (store = initStore, { type, payload }) {
  switch (type) {
    case NAME_VALUE:
      return {...store, nameValue: payload}
    case SET_USER:
      return {...store, name: payload}
    case ANSWER_VALUE:
      return {...store, answerValue: payload} 
    case SET_ANSWER:
      return {...store, answer: payload} 
    case ADD_SCORE:
      return {...store, score: store.score + payload} 
  
    default: 
      return store
  }
}
