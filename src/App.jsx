
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, resetValue } from './store/slices/counter/counterSlice'

function App() {
  

  const {counter} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>REDUX TOOLKIT</h1>
        <h2>count is {counter}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
        <button onClick={() => dispatch(resetValue())}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
