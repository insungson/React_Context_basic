import React, {useState} from 'react';
import {ADD} from './action';
import {useDispatch} from './context';

const Add = () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch({type: ADD, payload: newToDo});
    setNewToDo("");
  };
  const onChange = e => {
    const {
      target: {value}
    } = e;
    setNewToDo(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input 
        value={newToDo}
        type="text"
        placeholder="Write to do"
        onChange={onChange}
      />
    </form>
  );
};

export default Add;