
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { increment } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state: RootState) => state.ghost)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Value: {count.value}</h2>
      <button onClick={() => dispatch(increment())}>increment+one</button>
    </>
  )
}

export default App
