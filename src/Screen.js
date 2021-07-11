// import React, {useContext} from 'react';
// import Header from './Header';
// // import {UserContext} from './context';
// import {useFns} from './context';

// const Screen = () => {
//   // const {logUserIn} = useContext(UserContext);
//   const {logUserIn} = useFns();
//   return (
//     <div>
//       <Header />
//       <h1>First screen</h1>
//       <button onClick={logUserIn}>Log user in</button>
//     </div>
//   );
// };

// export default Screen;



//새로운 프로젝트
import React from 'react';
import {useSetLang, useT} from './context';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const setLang = useSetLang();
  const t = useT();
  return (
    <>
      <h1>{t("Hello")}</h1>
      <button onClick={() => setLang("es")}>{t("Translate")}</button>
    </>
  );
};