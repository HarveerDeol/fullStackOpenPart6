import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
     filter <input  name='filter' onChange={(e)=> {
      dispatch({ type: 'filter/filterChange', payload: e.target.value })
      setTimeout(()=>{
        dispatch({ type: 'notification/newFilter', payload: e.target.value })
      }, 1000)
      
      }} />
    </div>
  )
}

export default Filter