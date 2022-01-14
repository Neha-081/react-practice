import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    err:'',
    post:{}
}

const reducer=(state,action)=>{
    switch(action.type){
   case 'FETCH_SUCCESS':
       return{
           loading:false,
           err:'',
           post:action.payload
       }
    case 'FETCH_ERR':
        return{
            loading:false,
            post:{},
            err:'something went wrong'
        }
        default:
        return state    
        
    }
}

function DataFetchingReducer() {
    const [state,dispatch]=useReducer(reducer,initialState)
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
          dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch(err=>{
         dispatch({type:'FETCH_ERR'})
         })
          },[])
    
    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.err ? state.err : null}
        </div>
    )
}

export default DataFetchingReducer
