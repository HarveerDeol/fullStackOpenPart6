import {createSlice} from '@reduxjs/toolkit'
const filterReducer = (state = ' ', action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return action.payload
      default:
        return state
    }
  }

  export const filterChange = filter => {
    return {
      type: 'SET_FILTER',
      payload: filter,
    }
  }
  
// const  Slice = createSlice({
//   name: 'notes',
//   initialState,
//   reducers: {
//     createAnecdote (content){
//       return {
//         type: 'NEW-ANECDOTE',
//         payload: {
//           content: content,
//           votes: false,
//           id: getId()
//         }
//       }
//     },
//     AddToVote (id) {
//       return {
//         type: 'MAKE-VOTE',
//         payload: { id }
        
//       }
//     }
//   },
// })

export default filterReducer