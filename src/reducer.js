import {v4 as uuid} from 'uuid';
import {ADD, DEL, COMPLETE, UNCOMPLETE} from './contextToDo/action';


// 새로운 프로젝트

export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const initialState = {
  toDos: [],
  completed: []
};

// export const ADD = "add";
// export const DEL = "del";
// export const COMPLETE = "complete";
// export const UNCOMPLETE = "uncomplete";

//아래의 action을 바꿔도 상관은 없다..
export const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT:
      return {count: state.count + 1};
    case DECREMENT:
      return {count: state.count - 1};
    default:
      throw new Error();
  }
};
// 예를 들면 위의 코드를 아래와 같이 작성한다고 해도 문제는 전혀 없다!!
// 다만 아래와 같이 사용하지 않는 이유는... dispatch로 넘겨줄떄 다른 인자를 넘겨줄수 없기 때문이다...
// 그래서 굳이 type 속성을 정해서 switch 문으로 나누는 것이다!!!
export const reducer1 = (state, action) => {
  switch(action){
    case INCREMENT:
      return {count: state.count+1};
    case DECREMENT:
      return {count: state.count-1};
    default:
      throw new Error();
  }
};

//아래는 Todo에 관련된 리듀서임
export const reducer2 = (state, action) => {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, {text: action.payload, id: uuid()}]
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: state.completed.filter(toDo => toDo.id !== action.payload)
      };
    case COMPLETE:
      const target = state.toDos.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payload),
        completed: [...state.completed, { ...target }]
      };
    case UNCOMPLETE:
      const atarget = state.completed.find(toDo => toDo.id === action.payload);
      return {
        ...state,
        completed: state.completed.filter(toDo => toDo.id !== action.payload),
        toDos: [...state.toDos, {...atarget}]
      };
    default:
      return ;
  }
};