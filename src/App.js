import React,{useReducer} from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import DataFetchingState from './components/DataFetchingState';
import DataFetchingReducer from './components/DataFetchingReducer';
import ParentComponent from './components/callback/ParentComponent';
import Counter from './components/useMemo/Counter';
import FocusInput from './components/useRef/FocusInput';
import HookTimer from './components/useRef/HookTimer';
import DocTitleOne from './components/CustomHook1/DocTitleOne';
import DocTitleTwo from './components/CustomHook1/DocTitleTwo';
import CounterOne from './components/CustomHook2/CounterOne';
import CounterTwo from './components/CustomHook2/CounterTwo';
import UserForm from './components/CustomHook3/UserForm';

export const CountContext=React.createContext()



// function App() {
//   const [count,dispatch]=useReducer(reducer,initialState)
//   return (
//     <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
// <div>
//   count : {count}
//  <ComponentA/>
//  <ComponentB/>
//  <ComponentC/>
// </div>
// </CountContext.Provider>
//   )
// }

function App(){
  return(
    <div>
<UserForm/>

    </div>
  )
}

export default App;
