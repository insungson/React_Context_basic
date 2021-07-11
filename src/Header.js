import React, {useContext} from 'react';
// import {UserContext} from './context';
import {useUser} from './context';

const Header = () => {
  // const {
  //   user: {name, loggedIn}
  // } = useContext(UserContext);
  const {name, loggedIn} = useUser();
  return (
    <header>
      <a href="#">Home</a> Hello, {name}, you are{" "}
      {loggedIn ? "logged In" : "anonymous"}
    </header>
  );
};

export default Header;