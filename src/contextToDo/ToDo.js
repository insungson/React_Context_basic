import React from 'react';
import {COMPLETE, UNCOMPLETE, DEL} from './action';
import {useDispatch} from './context';

const ToDo = ({text, id, isCompleted}) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{text}</span>
      <span
        onClick={() => dispatch({type: DEL, payload: id})}
      >❌</span>
      <span
        onClick={() => dispatch({type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id})}
      >
        {isCompleted ? "❓" : "✅"}
      </span>
    </li>
  );
};

export default ToDo;