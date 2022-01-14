import React from 'react'

import { UserContext,ChannelContext } from '../App'

function ComponentZ() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user=>{
                        return(
                            <ChannelContext.Consumer>
                                {
                                    channel=>{
                                        return <div>User is {user} and channel {channel}</div>

                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                      
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentZ







//in app.js


//     <div className="App">
// <UserContext.Provider value={'neha'}>
//   <ChannelContext.Provider value={'mysterious maya'}>
//   <ComponentA/>
//   </ChannelContext.Provider>
// </UserContext.Provider>
//     </div>
