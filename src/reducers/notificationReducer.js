import {createSlice} from '@reduxjs/toolkit'

const initialState = 'Welcome!'

const notificationSlice = createSlice ({
    name:'notification',
    initialState,
    reducers:{
        newVote(state, action){
            const vote = action.payload
            state = `you voted: '${vote}'`
            return state
        },
        newAnecdote(state, action){
            const anecdote = action.payload
            state = (`you created a new anecdote: '${anecdote.content}'`)
            return state
        },
        newFilter(state, action){
            const filter = action.payload
            state = (`you set a new filter: '${filter}'`)
            return state

        }
    },
})

export const {newVote, newAnecdote, newFilter} = notificationSlice.actions
export default notificationSlice.reducer