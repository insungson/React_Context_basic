import React, {createContext, useReducer, useContext} from 'react';
import {reducer2, initialState} from '../reducer';

const ToDosContext = createContext();

const ToDosProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer2, initialState);
  return (
    <ToDosContext.Provider value={{state, dispatch}}>
      {children}
    </ToDosContext.Provider>
  );
};

export const useDispatch = () => {
  const {dispatch} = useContext(ToDosContext);
  return dispatch;
};

export const useState = () => {
  const {state} = useContext(ToDosContext);
  return state;
};

export default ToDosProvider;