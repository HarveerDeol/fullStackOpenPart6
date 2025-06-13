import {createSlice} from '@reduxjs/toolkit'

const initialState = 'Welcome!'

const notificationSlice = createSlice ({
    name:'notification',
    initialState,
    reducers:{
        newNotification(state, action){
            return action.payload


        },
        clearNotification( state, action ){
            state = 'No New Notifications!'
            return state
        }
    },
})

export const {clearNotification, newNotification } = notificationSlice.actions

export const setNotification = ( content, timeout )=> {
    return async dispatch => {
        dispatch(newNotification(content))
      setTimeout(() => {
        dispatch(clearNotification())
      }, timeout)
    }
  }

export default notificationSlice.reducer