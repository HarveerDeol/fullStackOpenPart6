import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
     filter <input  name='filter' onChange={(e)=>dispatch(filterChange(e.target.value))} />
    </div>
  )
}

export default Filter