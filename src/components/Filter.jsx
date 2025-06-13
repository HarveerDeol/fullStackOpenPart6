import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
import { setNotification } from '../reducers/notificationReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
     filter <input  name='filter' onChange={(e)=> {
      dispatch({ type: 'filter/filterChange', payload: e.target.value })
      dispatch(setNotification(`you voted for: '${e.target.value}'`, 5000))
      
      }} />
    </div>
  )
}

export default Filter