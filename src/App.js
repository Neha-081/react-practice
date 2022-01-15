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
<HookTimer/>
    </div>
  )
}

export default App;
