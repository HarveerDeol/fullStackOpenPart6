import {createSlice} from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addToVote ( state, action ) {
      const id = action.payload
      const voteToChange = state.find(v => v.id === id)
      const changedVoted = { 
      ...voteToChange, 
      votes: voteToChange.votes + 1 
      }
      return state.map(anecdote =>
      anecdote.id !== id ? anecdote : changedVoted 
      )
    },
    appendAnecdote( state, action ){
      state.push(action.payload)
    },
    setAnecdotes( state, action ) {
      return action.payload
    }
  },
})

export const { addToVote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions 


export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const votesAnecdote = object => {
  return async dispatch => {
    const votesAnecdote = await anecdoteService.changeAnecdote(object)
    dispatch(addToVote(object.id))
  }
}

export default anecdoteSlice.reducer



//PRED-REDUX-TOOLS
// const anecdoteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'MAKE-VOTE':
//       const id = action.payload.id
//       const voteToChange = state.find(v => v.id === id)
//       const changedVoted = { 
//         ...voteToChange, 
//         votes: voteToChange.votes + 1 
//       }
//       return state.map(anecdote =>
//         anecdote.id !== id ? anecdote : changedVoted 
//       )
//     case 'NEW-ANECDOTE':
//       return [...state, action.payload]
//     default:
//       return state
//   }
// }

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW-ANECDOTE',
//     payload: {
//       content: content,
//       votes: false,
//       id: getId()
//     }
//   }
// }

// export const AddToVote= (id) => {
//   return {
//     type: 'MAKE-VOTE',
//     payload: { id }
    
//   }
// // }

// export default anecdoteReducer