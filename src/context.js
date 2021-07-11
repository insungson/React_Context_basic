// import React, {useContext, useState, createContext} from 'react';

// //아래처럼 export 로 내보내어 다른 곳에서 가져다 사용하고 React.createContext() 를 사용하여 공통으로 사용한다.
// // export const UserContext = React.createContext();
// //위의 코드를 아래와 같이 나눠서 state별로 나눠서 관리하는것도 방법이다.
// const UserContext = React.createContext();

// const UserContextProvider = ({children}) => {
//   const [user, setUser] = useState({
//     name: "Nick",
//     loggedIn: false
//   });
//   const logUserIn = () => setUser({});
//   return (
//     <UserContext.Provider value={{user, fn: {logUserIn}}}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// //여기서 state 별로 관리한다.
// export const useUser = () => {
//   const {user} = useContext(UserContext);
//   return user;
// };

// export const useFns = () => {
//   const {fn} = useContext(UserContext);
//   return fn;
// };

// export default UserContextProvider



// 새로운 프로젝트
import React, {useState, useContext, createContext} from 'react';

const LangContext = createContext();

const Lang = ({defaultLang, children, translations}) => {
  const [lang, setLang] = useState(defaultLang);
  const hyperTranslate = text => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };

  return (
    <LangContext.Provider value={{setLang, t: hyperTranslate}}>
      {children}
    </LangContext.Provider>
  );
};


export const useSetLang = () => {
  const {setLang} = useContext(LangContext);
  return setLang;
};

export const useT = () => {
  const {t} = useContext(LangContext);
  return t;
};

export default Lang;