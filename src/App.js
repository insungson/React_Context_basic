// import React from 'react';
// import Screen from './Screen';
// import UserContextProvider from './context';

// function App() {
//   return (
//    <UserContextProvider>
//      <Screen />
//    </UserContextProvider>
//   );
// }

// export default App;



// 새로운 프로젝트
import React, {useReducer, useState} from 'react';
import Screen from './/Screen';
import Lang from './context';
import translations from './translation';
import {
  INCREMENT,
  DECREMENT,
  initialState,
  ADD, DEL, COMPLETE, UNCOMPLETE,
  reducer, reducer1, reducer2
} from './reducer';
import Add from './contextToDo/Add';



function App(){
  //아래의 dispatch 는 reducer를 불러오는 것이고 아래의 return 랜더링에서 dispatch 에서 reducer 함수의 action를 불러오고..
  //switch 문을 통해 type 에 관련된 객체를 return 해 주는 것이다!!
  //아래의 state 는 useState의 state와 비슷하다!! 아래의 뒤 {} 는 현재 초기 state라고 생각하면 된다!!!
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const [state1, dispatch1] = useReducer(reducer1, {count: 0});

  // // 아래의 코드는 context 로따로 처리하여 정리하였으므로 주석처리
  // const [state2, dispatch2] = useReducer(reducer2, initialState);
  // const [newTodo, setNewTodo] = useState("");
  // const onSubmit = e => {
  //   e.preventDefault();
  //   dispatch2({type: ADD, payload: newTodo});
  //   setNewTodo("");
  // };
  // const onChange = e => {
  //   const {
  //     target: {value}
  //   } = e;
  //   setNewTodo(value);
  // };
  return (
    <>
      <Lang defaultLang="en" translations={translations}>
        <Screen />
      </Lang>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type: INCREMENT})}>Add</button>
      <button onClick={() => dispatch({type: DECREMENT})}>Remove</button>
      <h1>{state1.count}</h1>
      <button onClick={() => dispatch1(INCREMENT)}>Add1</button>
      <button onClick={() => dispatch1(DECREMENT)}>Remove1</button>

      {/* <ul>
        <h2>To Dos</h2>
        {state2.toDos.map((toDo, index) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span onClick={() => dispatch2({type: DEL, payload: toDo.id})}>❌</span>
            <span onClick={() => dispatch2({type: COMPLETE, payload: toDo.id})}>✅</span>
          </li>
        ))}
      </ul>
      <ul>
        {state2?.completed?.length > 0 && (
          <>
            <h2>Completed</h2>
            {state2?.completed.map(toDo => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span
                  onClick={() => dispatch2({type: DEL, payload: toDo.id})}
                >❌</span>
                <span
                  onClick={() => dispatch2({type: UNCOMPLETE, payload: toDo.id})}
                >❓</span>
              </li>
            ))}
          </>
        )}
      </ul> */}
    </>
  );
}

export default App;