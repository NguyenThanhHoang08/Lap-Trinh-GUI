import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetAPI from '../Tuan4/Bai1/Bai1'
import GetAPI1 from '../Tuan4/bai2/bai2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <GetAPI></GetAPI> */}

      <GetAPI1></GetAPI1>
    </>
  )
}

export default App
