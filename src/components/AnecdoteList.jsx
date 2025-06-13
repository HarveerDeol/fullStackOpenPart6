import { useDispatch, useSelector } from 'react-redux'
import { addToVote } from '../reducers/anecdoteReducer'


const Anecdote = ({anecdote, handleClick})=>{

    return (
        <div>
            <div>
            {anecdote.content}
            </div>
            <div>
            has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = ()=>{
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
      return state.anecdote.filter(item =>{
        if (item.content.includes(state.filter)){
          return item
        }
     })
    })
  
    return (
        <div>
        {anecdotes.map(anecdote =>
            <Anecdote
              key={anecdote.id}
              anecdote={anecdote}
              handleClick={() => {
                dispatch({ type: 'anecdotes/addToVote', payload: anecdote.id })
                dispatch({ type: 'notification/newVote', payload: anecdote.content })}
              }
            />
          )}
          </div>
    )
}


export default AnecdoteList