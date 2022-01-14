import React from 'react';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalCounter from './components/IntervalCounter';
// import DataFetching from './components/DataFetching';
import ComponentA from './components/ComponentA';

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

function App() {
  return (
    <div className="App">
<UserContext.Provider value={'neha'}>
  <ChannelContext.Provider value={'mysterious maya'}>
  <ComponentA/>
  </ChannelContext.Provider>
</UserContext.Provider>
    </div>
  )
}

export default App;
