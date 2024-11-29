
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrease, increment } from './redux/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'

function App() {
  const count = useAppSelector(state => state.ghost)
  const dispatch = useAppDispatch()
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
      <button onClick={() => dispatch(decrease())}>decrease-one</button>
    </>
  )
}

export default App
