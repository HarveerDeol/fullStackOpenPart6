import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    try {
        const response = await axios.get(baseURL)
        return response.data
    } catch (error){
        console.error('error fetching data:',error)
    }
}

const createNew = async (content) => {
    try {
        const newAnecdote = {
            content: content,
            votes: 0
          }
        const response = await axios.post(baseURL, newAnecdote)
        return response.data
    } catch (error){
        console.error(`anecdote post request failed: ${error}`)
    }
}

const changeAnecdote = async (anecdoteObject) => {
    try {
      const response = await axios.put(`${baseURL}/${anecdoteObject.id}`, anecdoteObject)
      return response.data
    } catch (error){
      console.error(`anecdote put request failed`, error);
    }
  }

export default { getAll, createNew, changeAnecdote }