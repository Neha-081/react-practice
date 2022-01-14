import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'

function DataFetching() {
const [post,setPost]=useState({})
const [id,setId]=useState(1)
const [buttonClickFromId,SetbuttonClickFromId] =useState(1)

const handleClick=()=>{
  SetbuttonClickFromId(id)
}

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickFromId}`)
    .then(res=>{
        console.log(res);
        setPost(res.data)
    }).catch(err=>{
        console.log(err);

    })
},[buttonClickFromId])

    return (
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    post.map(post=>(<li key={post.id}>{post.title}</li>))
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
