const redux= require('redux');

const INITIAL_VALUE={
  counter:0
};

const reducer=(store=INITIAL_VALUE,action)=>{
  return {counter: store.counter+1};
}     //reducer


const store= redux.createStore(reducer);//store

const subscriber=()=>{
  const state=store.getState();
  console.log(state);
}


store.subscribe(subscriber);//subsriber

store.dispatch({type:'INCREMENT'});
