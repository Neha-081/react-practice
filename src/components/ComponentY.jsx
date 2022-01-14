import React,{useContext} from 'react'
import ComponentC from './ComponentZ'
import { UserContext,ChannelContext } from '../App'

function ComponentY() {
const user=useContext(UserContext)
const channel=useContext(ChannelContext)

    return (
        <div>
{user}-{channel}
        </div>
    )
}

export default ComponentY
