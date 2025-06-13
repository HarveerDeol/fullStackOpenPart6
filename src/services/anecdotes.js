import axios from 'axios'

const baseURL = 'http://localhost:3001/'

const getAll = async () => {
    try {
        const response = await axios.get(baseURL)
        return response.data
    } catch (error){
        console.error('error fetching data:',error)
    }
}

