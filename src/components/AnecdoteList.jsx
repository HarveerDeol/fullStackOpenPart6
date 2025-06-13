import { useDispatch, useSelector } from 'react-redux'
import { votesAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'



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
              handleClick={()=>{     
                dispatch(votesAnecdote({...anecdote, votes:anecdote.votes+1}))
                dispatch(setNotification(`you voted for: '${anecdote.content}'`, 3000))
              }}
            />
          )}
          </div>
    )
}


export default AnecdoteList