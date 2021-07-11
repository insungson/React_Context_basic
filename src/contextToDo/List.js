import React from 'react';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({name, children}) => (
  <>
    <h1>{name}</h1>
    {children}
  </>
);