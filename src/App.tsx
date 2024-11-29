
// import { decrease, increment } from './redux/counter/counterSlice'
// import { useAppDispatch, useAppSelector } from './redux/hooks'
import Header from './view/header/header'
import Home from './view/header/Home'
import UserTable from './view/header/UserTable'

function App() {
  // const count = useAppSelector(state => state.ghost)
  // const dispatch = useAppDispatch()
  return (
    <>
      <div >
        <Header></Header>
        <Home></Home>
        <UserTable></UserTable>
      </div>
      {/* <h1>Vite + React</h1>
      <h2>Value: {count.value}</h2>
      <button onClick={() => dispatch(increment())}>increment+one</button>
      <button onClick={() => dispatch(decrease())}>decrease-one</button> */}
    </>
  )
}

export default App
