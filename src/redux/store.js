import { createStore }  from 'redux'

const reducer = (state = 5, action) => {
  console.log('this is the reducer, reporting action: ' + action.type);
  if(action.type === 'increment') return state + 1
  return state
}

const store = createStore(reducer);
window.store = store;
export default store;