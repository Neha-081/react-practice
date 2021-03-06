import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingState() {

    const [loading,setLoading]=useState(true)
    const [err,setErr]=useState('')
    const [post,setPost]=useState({})

    useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res=>{
      setLoading(false)
      setPost(res.data)
      setErr('')
  })
  .catch(err=>{
      setLoading(false)
      setPost({})
      setErr('something went wrong')
   })
    },[])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {err ? err : null}
        </div>
    )
}

export default DataFetchingState
