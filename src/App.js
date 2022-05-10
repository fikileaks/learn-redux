import './App.css'
import { incrementAction } from './actions'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const counter = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      counter: {counter}
      <button onClick={() => dispatch(incrementAction)}>Increment</button>
    </div>
  )
}

export default App
//Connect : untuk mapping state dari store biar bisa di ambil komponennya sebagai props
// yang dipake reducer biar dispatch dipake sama appnya
